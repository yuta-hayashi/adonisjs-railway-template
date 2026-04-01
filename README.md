# AdonisJS Railway Template

A simple starter template for deploying an AdonisJS 7 + Inertia.js React + PostgreSQL full-stack application to Railway.

If you already have another project, the Railway settings after deployment can serve as a useful reference.

For AdonisJS documentation, see https://docs.adonisjs.com/

This is a community template, not an official AdonisJS project.

## Deploy to Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/adonisjs-railway-template?referralCode=iJA_Uz&utm_medium=integration&utm_source=template&utm_campaign=generic)

After deploying, go to the `adonisjs-railway-template` service Settings, eject the Upstream Repo, and copy the repository to your own account.

### Static Assets

By default, Railway serves static assets via its built-in CDN. No additional configuration is required.

### Health Check

Set `/health` as the health check endpoint in Railway. It verifies the database connection and returns `200 OK` when healthy or `503 Service Unavailable` otherwise.

## Local Development

### Prerequisites

- Node.js >= 24.0.0
- Docker (for PostgreSQL)

### Setup

```bash
git clone https://github.com/<your-username>/adonisjs-railway-template.git
cd adonisjs-railway-template
npm install
cp .env.example .env
node ace generate:key
docker compose up -d
node ace migration:run
npm run dev
```

The app will be available at `http://localhost:3333`.

## License

MIT
