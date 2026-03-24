---
description: How to deploy softprobe.ai domain and context/sre subdomains
---

This workflow details the steps to deploy the main `softprobe.ai` project and map its two subdomains to their respective repositories and branches via Cloudflare Pages.

### 1. Deploy the Main Domain (`softprobe.ai`)
We will deploy the `ai-sre-site` repository to a Cloudflare Pages project named `softprobe-main` and attach the `softprobe.ai` domain.

// turbo
```bash
npm install
```

// turbo
```bash
npm run build
```

// turbo
```bash
npx wrangler pages deploy dist --project-name softprobe-main --branch main
```

// turbo
```bash
npx wrangler pages custom-domain add softprobe.ai --project-name softprobe-main
```

### 2. Deploy the Context Subdomain (`context.softprobe.ai`)
This subdomain uses a different repository (`https://github.com/softprobe/website`). We will clone it into a sibling directory, build it, and deploy it to a new project called `softprobe-context`.

// turbo
```bash
cd .. && git clone https://github.com/softprobe/website softprobe-context-site
```

// turbo
```bash
cd ../softprobe-context-site && npm install
```

// turbo
```bash
cd ../softprobe-context-site && npm run build
```

*(Note: Depending on the framework used in `softprobe/website`, the output directory might be different. Adjust `dist` as necessary below.)*

// turbo
```bash
cd ../softprobe-context-site && npx wrangler pages deploy dist --project-name softprobe-context --branch main
```

// turbo
```bash
cd ../softprobe-context-site && npx wrangler pages custom-domain add context.softprobe.ai --project-name softprobe-context
```

### 3. Deploy the SRE Subdomain (`sre.softprobe.ai`)
This subdomain uses the `refactor/remove-release-gating-canary` branch of the *current* original repository. We will create a fresh project specifically for this subdomain to avoid environment conflicts with the main domain.

// turbo
```bash
cd ../ai-sre-site && git fetch origin
```

// turbo
```bash
cd ../ai-sre-site && git checkout refactor/remove-release-gating-canary
```

// turbo
```bash
cd ../ai-sre-site && npm install
```

// turbo
```bash
cd ../ai-sre-site && npm run build
```

// turbo
```bash
cd ../ai-sre-site && npx wrangler pages deploy dist --project-name softprobe-sre --branch main
```

// turbo
```bash
cd ../ai-sre-site && npx wrangler pages custom-domain add sre.softprobe.ai --project-name softprobe-sre
```

### Next Steps:
- Make sure that the Cloudflare DNS zone for `softprobe.ai` is properly configured. `wrangler` will automatically register the necessary CNAME records if the zone is managed under your Cloudflare account.
- Once completed, you can restore your local repository branch:
// turbo
```bash
git checkout main
```
