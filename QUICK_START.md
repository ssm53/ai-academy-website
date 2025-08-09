# 🚀 Quick Start Guide - Zez Academy Website

## What's Been Implemented

✅ **Stripe Payment Integration**

- Full checkout flow with Malaysia banking support (FPX, Cards, GrabPay)
- Secure webhook handling
- Payment success/cancellation pages
- Real-time payment status tracking

✅ **Database Schema**

- Enhanced Prisma schema with enrollment tracking
- Payment status management
- Applicant relationship modeling

✅ **SEO Optimization**

- Structured data (JSON-LD) for search engines
- Meta tags for social sharing
- Sitemap and robots.txt
- Malaysia-focused keywords

✅ **Deployment Ready**

- Vercel configuration
- Environment variable templates
- Build optimization

## 🏃‍♂️ Quick Deploy (5 Minutes)

### 1. Set Up Database (Neon)

```bash
# 1. Go to https://console.neon.tech
# 2. Create project "zez-academy"
# 3. Copy connection string
```

### 2. Set Up Stripe

```bash
# 1. Go to https://dashboard.stripe.com
# 2. Get API keys from Developers > API Keys
# 3. Create webhook: https://yourdomain.com/api/webhook/stripe
# 4. Select events: checkout.session.completed, payment_intent.succeeded, payment_intent.payment_failed
```

### 3. Environment Variables

Create `.env.local`:

```env
DATABASE_URL="your-neon-connection-string"
STRIPE_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_BASE_URL="https://yourdomain.vercel.app"
```

### 4. Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### 5. Run Database Migration

After deployment, run in Vercel console:

```bash
npx prisma migrate deploy
```

## 🧪 Test Payment Flow

### Test Card Numbers (Malaysia)

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0027 6000 3184`

### Malaysian Banks (FPX)

- Maybank2U, CIMB, Public Bank
- RHB, Hong Leong, AmBank
- All major Malaysian banks supported

## 📱 Features Overview

### Payment Integration

- **Multiple Methods**: Cards, FPX, GrabPay, Alipay
- **Currency**: Malaysian Ringgit (MYR)
- **Security**: 3D Secure, webhook verification
- **UX**: Loading states, error handling

### Application Flow

1. User fills application form
2. Can submit application OR pay immediately
3. Payment redirects to Stripe Checkout
4. Success page shows confirmation
5. Webhook updates database status

### SEO Features

- **Rich Snippets**: Course, Organization, FAQ schemas
- **Social Sharing**: Open Graph, Twitter Cards
- **Local SEO**: Malaysia business optimization
- **Performance**: Optimized meta tags, sitemap

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Database operations
npx prisma studio          # GUI for database
npx prisma migrate dev      # Create migration
npx prisma generate         # Generate client

# Build for production
npm run build
```

## 🛠️ Customization

### Change Pricing

Update `src/app/components/sections/pricing.jsx`:

```jsx
// Change amount (in RM)
<CheckoutButton amount={1500} /> // RM 1500
```

### Add Payment Methods

Update `src/lib/stripe.js`:

```javascript
paymentMethods: [
  "card",
  "fpx",
  "grabpay",
  "boost", // Add Boost wallet
  "tng", // Add Touch 'n Go
];
```

### Update Course Info

Edit structured data in `src/app/components/seo/structured-data.jsx`

## 🚨 Important Notes

1. **Test Mode First**: Use Stripe test keys initially
2. **Webhook URL**: Must be HTTPS in production
3. **Database**: Run migrations after deployment
4. **Environment**: Set all variables in Vercel dashboard

## 🆘 Common Issues

### Payment Fails

- Check Stripe webhook URL is correct
- Verify webhook secret matches
- Ensure publishable key is set

### Database Errors

- Verify DATABASE_URL format
- Run `npx prisma migrate deploy`
- Check Neon database is active

### Build Fails

- All environment variables must be set
- Check for TypeScript errors
- Verify API routes work

## 📞 Support

Need help? Check:

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) for detailed steps
- Vercel deployment logs
- Stripe webhook logs
- Neon database metrics

**Ready to launch! 🚀**
