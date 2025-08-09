# Zez Academy - Deployment Guide

## Quick Deployment Steps

### 1. Database Setup with Neon

1. Visit [Neon Console](https://console.neon.tech)
2. Create a new project named "zez-academy"
3. Copy the connection string
4. Update your environment variables

### 2. Stripe Configuration

1. Create a [Stripe Account](https://dashboard.stripe.com)
2. Navigate to Developers > API Keys
3. Copy your Publishable and Secret keys
4. Set up webhook endpoint: `https://yourdomain.com/api/webhook/stripe`
5. Select these events for webhook:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

### 3. Environment Variables

Create a `.env.local` file with:

```env
# Database (from Neon)
DATABASE_URL="postgresql://user:password@hostname:port/database"

# Stripe (from Stripe Dashboard)
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App Configuration
NEXT_PUBLIC_BASE_URL="https://yourdomain.vercel.app"

# Email Configuration (Optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=465
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

### 4. Database Migration

```bash
npm install
npx prisma migrate deploy
npx prisma generate
```

### 5. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

#### Option B: GitHub Integration

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Configure environment variables in Vercel
4. Deploy

### 6. Configure Vercel Environment Variables

In Vercel Dashboard, add these environment variables:

- `DATABASE_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_BASE_URL`

### 7. Update Stripe Webhook URL

1. Go to Stripe Dashboard > Webhooks
2. Update endpoint URL to: `https://your-vercel-domain.vercel.app/api/webhook/stripe`
3. Test the webhook

### 8. Test the Complete Flow

1. Visit your deployed site
2. Click "Apply Now"
3. Fill out the form
4. Test payment flow
5. Verify database entries
6. Check webhook logs in Stripe

## Malaysia-Specific Payment Methods

The implementation supports:

- **Credit/Debit Cards** (Visa, Mastercard)
- **FPX** (Malaysian online banking)
- **GrabPay** (Digital wallet)
- **Alipay** (For international students)

Supported Malaysian banks:

- Maybank2U, CIMB, Public Bank, RHB, Hong Leong, AmBank, Bank Islam, and more

## SEO Features Included

- **Structured Data**: Organization, Course, FAQ, LocalBusiness schemas
- **Meta Tags**: Open Graph, Twitter Cards, proper titles/descriptions
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Optimized for search engines
- **Keywords**: Malaysia-focused coding bootcamp keywords

## Troubleshooting

### Common Issues:

1. **Database Connection Error**

   - Verify DATABASE_URL format
   - Check Neon database is active
   - Run `npx prisma migrate deploy`

2. **Stripe Webhook Issues**

   - Verify webhook secret in environment
   - Check webhook URL is correct
   - Ensure webhook events are selected

3. **Payment Test Failures**

   - Use Stripe test cards: `4242 4242 4242 4242`
   - Verify publishable key is set
   - Check browser console for errors

4. **Deployment Errors**
   - Check Vercel function logs
   - Verify all environment variables are set
   - Ensure build completes successfully

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Database operations
npx prisma studio          # Database GUI
npx prisma migrate dev      # Create migration
npx prisma generate         # Generate Prisma client

# Production build
npm run build
```

## Security Checklist

- [x] Environment variables secured
- [x] API routes protected
- [x] Stripe webhook signature verification
- [x] Input validation on forms
- [x] SQL injection prevention (Prisma)
- [x] HTTPS enforced on production

## Support

For deployment issues:

- Check Vercel deployment logs
- Monitor Stripe webhook logs
- Review Neon database metrics
- Contact support@zezacademy.com
