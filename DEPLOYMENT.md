# Deployment Guide for Zez Academy Website

## Prerequisites
- Vercel account
- Neon database account
- Stripe account
- GitHub repository

## 1. Neon Database Setup

### Step 1: Create Neon Database
1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Choose a region close to Malaysia (Singapore recommended)
4. Copy the connection string

### Step 2: Configure Database
1. Update your `.env` file with the Neon connection string:
   ```
   DATABASE_URL="postgresql://username:password@host:port/database"
   ```

2. Run database migrations:
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

## 2. Stripe Configuration

### Step 1: Stripe Dashboard
1. Go to [stripe.com](https://stripe.com) and create an account
2. Enable Malaysian payment methods (FPX, cards)
3. Get your API keys from the dashboard

### Step 2: Environment Variables
Add these to your `.env` file:
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Step 3: Webhook Setup
1. In Stripe dashboard, go to Webhooks
2. Add endpoint: `https://your-domain.vercel.app/api/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the webhook secret

## 3. Vercel Deployment

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Step 2: Environment Variables
Add these in Vercel dashboard:
- `DATABASE_URL`: Your Neon connection string
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `NEXT_PUBLIC_BASE_URL`: Your Vercel domain

### Step 3: Deploy
1. Push your code to GitHub
2. Vercel will automatically deploy
3. Check the deployment logs for any errors

## 4. Post-Deployment

### Step 1: Database Migration
After deployment, run:
```bash
npx prisma migrate deploy
```

### Step 2: Test Stripe Integration
1. Test the checkout flow with test cards
2. Verify webhook delivery
3. Check payment success page

### Step 3: Domain Setup (Optional)
1. Add custom domain in Vercel
2. Update DNS records
3. Update `NEXT_PUBLIC_BASE_URL` in environment variables

## 5. Monitoring

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Monitor function execution times
- Check for any build errors

### Database Monitoring
- Monitor Neon database performance
- Check connection pool usage
- Monitor query performance

## 6. Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version compatibility
2. **Database Connection**: Verify Neon connection string
3. **Stripe Errors**: Check API keys and webhook configuration
4. **Environment Variables**: Ensure all required vars are set

### Support
- Vercel: [vercel.com/support](https://vercel.com/support)
- Neon: [neon.tech/docs](https://neon.tech/docs)
- Stripe: [stripe.com/support](https://stripe.com/support)

## 7. Security Checklist

- [ ] Environment variables are set in Vercel (not in code)
- [ ] Stripe webhook signature verification is enabled
- [ ] Database connection uses SSL
- [ ] API routes have proper error handling
- [ ] No sensitive data in client-side code
- [ ] HTTPS is enforced
- [ ] CORS is properly configured

## 8. Performance Optimization

- [ ] Enable Vercel Edge Functions for API routes
- [ ] Use Next.js Image optimization
- [ ] Implement proper caching headers
- [ ] Optimize database queries
- [ ] Enable compression
- [ ] Use CDN for static assets 