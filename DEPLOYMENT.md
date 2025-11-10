# 🚀 MovieVerse Deployment Guide

## Quick Deployment Options

---

## 1. 🔷 Vercel (Recommended - Easiest)

### Why Vercel?
- Built by Next.js creators
- Zero configuration
- Automatic deployments
- Free tier available
- Global CDN
- Perfect for Next.js apps

### Steps:

**Option A: Deploy with Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
# Your site will be live in minutes!
```

**Option B: Deploy via GitHub**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! ✅

### Configuration:
No configuration needed! Vercel auto-detects Next.js.

### Custom Domain:
1. Go to project settings
2. Add your domain
3. Update DNS records
4. SSL automatically configured

---

## 2. 🟦 Netlify

### Steps:

**Via Netlify CLI:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

**Via GitHub:**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Select repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

---

## 3. 🟩 AWS Amplify

### Steps:
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Connect GitHub repo
3. Configure build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
4. Deploy!

---

## 4. 🔴 DigitalOcean App Platform

### Steps:
1. Go to [DigitalOcean](https://www.digitalocean.com)
2. Create new app
3. Connect GitHub
4. Select repo
5. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. Deploy!

---

## 5. 🐳 Docker Deployment

### Create Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run:
```bash
# Build image
docker build -t movieverse .

# Run container
docker run -p 3000:3000 movieverse
```

### Deploy to:
- Docker Hub
- AWS ECS
- Google Cloud Run
- Azure Container Instances

---

## 6. ☁️ Traditional VPS (Ubuntu)

### Steps:

**1. Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Clone and Setup:**
```bash
git clone your-repo-url
cd movieverse
npm install
npm run build
```

**3. Install PM2:**
```bash
npm install -g pm2
pm2 start npm --name "movieverse" -- start
pm2 save
pm2 startup
```

**4. Setup Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**5. SSL with Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 📋 Pre-Deployment Checklist

### ✅ Before Deploying:

**1. Environment Variables**
Create `.env.production`:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**2. Build Test**
```bash
npm run build
npm start
# Test at http://localhost:3000
```

**3. Update Configuration**

**next.config.mjs:**
```javascript
const nextConfig = {
  images: {
    domains: ['your-cdn.com', 'image.tmdb.org'],
  },
  // Add your production domain
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
```

**4. Optimize Images**
- Compress movie posters
- Use WebP format
- Implement lazy loading

**5. Security**
- Add security headers
- Enable HTTPS
- Configure CORS
- Add rate limiting

---

## 🎯 Recommended Setup

### For Production:

**Frontend:** Vercel (Free tier)
- Automatic deployments
- Global CDN
- SSL included
- Perfect for Next.js

**Backend:** Supabase or Firebase
- Database
- Authentication
- Storage
- Real-time features

**Video Storage:** Cloudflare Stream or AWS S3
- Video hosting
- CDN delivery
- Adaptive streaming

**Domain:** Namecheap or Google Domains
- Custom domain
- DNS management

---

## 💰 Cost Estimates

### Free Tier (Perfect for Starting):
- **Vercel**: Free (Hobby plan)
- **Supabase**: Free (500MB database)
- **Cloudflare**: Free (R2 storage)
- **Total**: $0/month

### Small Scale ($10-50/month):
- **Vercel Pro**: $20/month
- **Supabase Pro**: $25/month
- **Cloudflare Stream**: Pay per use
- **Total**: ~$50/month

### Medium Scale ($100-500/month):
- **Vercel Team**: $20/user/month
- **Supabase Pro**: $25/month
- **AWS S3 + CloudFront**: $50-200/month
- **Total**: ~$100-300/month

---

## 🔧 Post-Deployment

### 1. Setup Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Setup Monitoring
- Vercel Analytics
- Google Analytics
- Sentry for error tracking

### 3. Performance Optimization
- Enable caching
- Optimize images
- Minify assets
- Use CDN

### 4. SEO
- Add meta tags
- Create sitemap
- Submit to Google Search Console
- Add robots.txt

---

## 🚨 Troubleshooting

### Build Fails:
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Environment Variables Not Working:
- Prefix with `NEXT_PUBLIC_` for client-side
- Restart dev server after changes
- Check `.env.local` exists

---

## 📊 Deployment Comparison

| Platform | Ease | Cost | Speed | Features |
|----------|------|------|-------|----------|
| Vercel | ⭐⭐⭐⭐⭐ | Free-$20 | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐⭐⭐⭐ | Free-$19 | ⚡⚡⚡ | ⭐⭐⭐⭐ |
| AWS Amplify | ⭐⭐⭐ | Pay/use | ⚡⚡ | ⭐⭐⭐⭐⭐ |
| DigitalOcean | ⭐⭐⭐ | $5+ | ⚡⚡ | ⭐⭐⭐ |
| VPS | ⭐⭐ | $5+ | ⚡ | ⭐⭐⭐⭐⭐ |

---

## 🎉 Quick Start (Vercel)

**Fastest way to deploy:**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Done! Your site is live! 🚀
```

That's it! Your MovieVerse platform is now live on the internet! 🎬

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Deployment Issues: Check build logs

---

**Ready to go live? Choose Vercel and deploy in 2 minutes! 🚀**
