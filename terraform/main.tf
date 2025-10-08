# Terraform configuration for Vercel deployment
# This configuration manages the Vercel project and domain settings

terraform {
  required_version = ">= 1.0.0"

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }

  # Uncomment and configure for remote state storage (recommended for production)
  # backend "s3" {
  #   bucket         = "your-terraform-state-bucket"
  #   key            = "portfolio/terraform.tfstate"
  #   region         = "eu-west-2"
  #   dynamodb_table = "terraform-state-lock"
  #   encrypt        = true
  # }
}

# Variables
variable "vercel_api_token" {
  description = "Vercel API Token"
  type        = string
  sensitive   = true
}

variable "vercel_team_id" {
  description = "Vercel Team ID (optional, leave empty for personal account)"
  type        = string
  default     = null
}

variable "github_repo" {
  description = "GitHub repository in format owner/repo"
  type        = string
  default     = "adambinnersley/portfolio"
}

variable "production_branch" {
  description = "Branch to deploy to production"
  type        = string
  default     = "main"
}

variable "custom_domain" {
  description = "Custom domain for the portfolio (optional)"
  type        = string
  default     = null
}

# Vercel Provider Configuration
provider "vercel" {
  api_token = var.vercel_api_token
  team      = var.vercel_team_id
}

# Vercel Project
resource "vercel_project" "portfolio" {
  name      = "adam-binnersley-portfolio"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = var.github_repo
  }

  # Build settings
  build_command    = "npm run build"
  output_directory = ".next"
  install_command  = "npm ci"

  # Environment variables
  environment = [
    {
      key    = "NODE_ENV"
      value  = "production"
      target = ["production"]
    },
    {
      key    = "NEXT_TELEMETRY_DISABLED"
      value  = "1"
      target = ["production", "preview", "development"]
    }
  ]

  # Serverless function settings
  serverless_function_region = "lhr1" # London region

  # Git settings
  root_directory            = null
  ignore_command            = null
  automatically_expose_system_environment_variables = true
}

# Production deployment
resource "vercel_deployment" "production" {
  project_id  = vercel_project.portfolio.id
  production  = true
  ref         = var.production_branch

  # Only create if we want to trigger an initial deployment
  # After this, deployments will be automatic via GitHub integration
}

# Custom domain (optional)
resource "vercel_project_domain" "custom" {
  count      = var.custom_domain != null ? 1 : 0
  project_id = vercel_project.portfolio.id
  domain     = var.custom_domain
}

# WWW redirect domain (optional)
resource "vercel_project_domain" "www" {
  count      = var.custom_domain != null ? 1 : 0
  project_id = vercel_project.portfolio.id
  domain     = "www.${var.custom_domain}"

  git_branch = null # Redirect to main domain
}

# Outputs
output "project_id" {
  description = "Vercel Project ID"
  value       = vercel_project.portfolio.id
}

output "deployment_url" {
  description = "Production deployment URL"
  value       = vercel_deployment.production.url
}

output "domains" {
  description = "Configured domains"
  value = concat(
    [vercel_deployment.production.url],
    var.custom_domain != null ? [var.custom_domain, "www.${var.custom_domain}"] : []
  )
}
