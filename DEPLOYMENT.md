# Deployment Guide

## Quick Start: Deploy to Mintlify (Recommended - Free)

### Option 1: Mintlify Cloud (Easiest)

1. **Sign up for Mintlify**
   - Go to [mintlify.com](https://mintlify.com)
   - Sign up with GitHub
   - Connect your repository: `ayton-labs/mates-ai`

2. **Configure deployment**
   - Mintlify will auto-detect your `mint.json`
   - Set your subdomain (e.g., `practical-ai.mintlify.app`)
   - Click "Deploy"

3. **Automatic updates**
   - Every push to `main` branch auto-deploys
   - No additional configuration needed
   - Built-in SSL and CDN

**Cost:** Free for public documentation

**URL:** `https://your-subdomain.mintlify.app`

---

## Option 2: Vercel (Free + Custom Domain)

### Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: mates-ai
# - Directory: ./ (current directory)
# - Override settings? No
```

### Deploy with GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect GitHub repo: `ayton-labs/mates-ai`
4. Click "Deploy"
5. Done!

**Auto-deploys:** Every push to `main`

**Cost:** Free tier includes:
- Unlimited sites
- Custom domains
- SSL
- 100GB bandwidth/month

---

## Option 3: Netlify (Free + Custom Domain)

### Deploy with Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init

# Follow prompts to connect GitHub
```

### Deploy with GitHub Integration

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import from Git"
3. Choose GitHub repo: `ayton-labs/mates-ai`
4. Build settings:
   - Build command: `mintlify build` (leave empty for static)
   - Publish directory: `.` (root)
5. Click "Deploy"

**Auto-deploys:** Every push to `main`

**Cost:** Free tier includes:
- 100GB bandwidth/month
- Custom domains
- SSL
- Form handling

---

## Analytics Setup

### 1. Google Analytics 4 (Free - Most Popular)

**Setup:**

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Update `mint.json`:

```json
"analytics": {
  "ga4": {
    "measurementId": "G-XXXXXXXXXX"
  }
}
```

**What you get:**
- Page views, sessions, users
- Traffic sources
- User behavior flows
- Real-time visitors
- Geographic data

### 2. Plausible Analytics (Paid - Privacy-Friendly)

**Setup:**

1. Sign up at [plausible.io](https://plausible.io) ($9/month for 10k views)
2. Add your domain
3. Update `mint.json`:

```json
"analytics": {
  "plausible": {
    "domain": "your-domain.com"
  }
}
```

**What you get:**
- Simple, privacy-focused dashboard
- No cookies (GDPR compliant)
- Lightweight script (< 1KB)
- Public dashboard option

### 3. Simple Analytics (Paid - Privacy-Friendly)

**Setup:**

1. Sign up at [simpleanalytics.com](https://simpleanalytics.com) ($19/month)
2. Update `mint.json`:

```json
"analytics": {
  "simpleAnalytics": true
}
```

### 4. PostHog (Free tier available - Product Analytics)

**Setup:**

1. Sign up at [posthog.com](https://posthog.com)
2. Get your API key
3. Add to `mint.json`:

```json
"analytics": {
  "posthog": {
    "apiKey": "phc_xxxxxxxxxxxx",
    "apiHost": "https://app.posthog.com"
  }
}
```

**What you get:**
- Event tracking
- Session recordings
- Heatmaps
- Feature flags
- Free up to 1M events/month

### 5. Mintlify Built-in Analytics

If you deploy with Mintlify Cloud, analytics are included:

- Page views by document
- Search queries
- User engagement
- Popular pages
- Traffic sources

Access via Mintlify dashboard after deployment.

---

## Recommended Setup (Free)

**For beginners:**
1. Deploy to **Mintlify Cloud** (easiest)
2. Use **Mintlify built-in analytics** (included)
3. Add **Google Analytics** if you want more detailed data

**For custom domain:**
1. Deploy to **Vercel** or **Netlify**
2. Add custom domain (free with both platforms)
3. Use **Google Analytics 4** (free)

**For privacy-conscious:**
1. Deploy to **Vercel**
2. Use **Plausible** ($9/month) or self-hosted analytics

---

## Custom Domain Setup

### For Vercel:

1. Go to Project Settings > Domains
2. Add your domain (e.g., `practicalai.com`)
3. Add DNS records at your domain registrar:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `cname.vercel-dns.com`
4. Wait for DNS propagation (5-30 minutes)

### For Netlify:

1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Add DNS records:
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5`
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.netlify.app`

### For Mintlify:

1. Contact Mintlify support or check docs
2. Add custom domain through dashboard
3. Configure DNS as instructed

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is proofread
- [ ] Images are hosted (Cloudinary) and loading
- [ ] All internal links work
- [ ] `mint.json` has correct branding
- [ ] Analytics tracking ID is added
- [ ] Footer social links are updated
- [ ] Test locally: `mintlify dev`

---

## Deployment Commands Summary

```bash
# Test locally
mintlify dev

# Deploy to Mintlify
mintlify deploy

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod

# Check for broken links
mintlify broken-links
```

---

## Cost Comparison

| Platform | Cost | Bandwidth | Custom Domain | Analytics |
|----------|------|-----------|---------------|-----------|
| **Mintlify Cloud** | Free | Unlimited | Yes (contact) | Built-in ✅ |
| **Vercel** | Free | 100GB/mo | Yes ✅ | Add GA4 |
| **Netlify** | Free | 100GB/mo | Yes ✅ | Add GA4 |
| **GitHub Pages** | Free | 100GB/mo | Yes ✅ | Add GA4 |

| Analytics | Cost | Features |
|-----------|------|----------|
| **Google Analytics** | Free | Full-featured |
| **Mintlify Analytics** | Free | Basic dashboard |
| **Plausible** | $9/mo | Privacy-focused |
| **PostHog** | Free (1M events) | Product analytics |

---

## Next Steps

1. **Choose deployment platform** (recommend: Mintlify Cloud or Vercel)
2. **Deploy the site**
3. **Set up Google Analytics** (get Measurement ID)
4. **Update `mint.json`** with your GA4 ID
5. **Test analytics** (visit site, check dashboard)
6. **Share with users!**

---

## Troubleshooting

**Site won't build:**
- Check `mintlify dev` locally first
- Review build logs in platform dashboard
- Ensure all MDX files have valid frontmatter

**Analytics not tracking:**
- Clear browser cache
- Check browser console for errors
- Verify Measurement ID is correct
- Wait 24-48 hours for data to appear

**Broken images:**
- Ensure Cloudinary URLs are public
- Check image URLs load in browser
- Verify image paths in MDX files

**Custom domain not working:**
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify DNS records match platform requirements
- Wait 24-48 hours for full propagation

---

## Support

- **Mintlify Docs:** [mintlify.com/docs](https://mintlify.com/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GA4 Help:** [support.google.com/analytics](https://support.google.com/analytics)
