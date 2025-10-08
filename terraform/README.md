# Terraform Configuration for Vercel Deployment

This Terraform configuration manages the deployment of the portfolio website to Vercel.

## Prerequisites

1. [Terraform](https://www.terraform.io/downloads) installed (v1.0.0 or later)
2. A [Vercel account](https://vercel.com)
3. A [Vercel API Token](https://vercel.com/account/tokens)
4. The repository connected to GitHub

## Setup

1. Copy the example variables file:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:
   - `vercel_api_token`: Your Vercel API token
   - `vercel_team_id`: Your team ID (optional, use `null` for personal account)
   - `github_repo`: Your GitHub repository (e.g., `adambinnersley/portfolio`)
   - `custom_domain`: Your custom domain (optional)

3. Initialize Terraform:
   ```bash
   terraform init
   ```

4. Review the planned changes:
   ```bash
   terraform plan
   ```

5. Apply the configuration:
   ```bash
   terraform apply
   ```

## GitHub Actions Secrets

For the GitHub Actions workflow to work, you need to set the following secrets in your repository:

1. Go to your repository Settings > Secrets and variables > Actions
2. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel Org ID (found in project settings)
   - `VERCEL_PROJECT_ID`: Your Vercel Project ID (found in project settings)

## Custom Domain Setup

If you have a custom domain:

1. Update `custom_domain` in `terraform.tfvars`
2. Run `terraform apply`
3. Add the DNS records shown in Vercel's domain settings to your domain provider

## State Management

For production use, consider using remote state storage (e.g., AWS S3, Terraform Cloud).
Uncomment and configure the backend block in `main.tf`.

## Cleanup

To destroy all resources:
```bash
terraform destroy
```

**Note:** This will remove the Vercel project and all deployments.
