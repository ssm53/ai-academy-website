
# Zez Academy Website

A modern, responsive website for Zez Academy built with Next.js, Tailwind CSS, and Stripe integration for Malaysian payments.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 💳 Stripe checkout with Malaysian payment methods (FPX, cards)
- 🗄️ PostgreSQL database with Prisma ORM
- 📱 Mobile-first responsive design
- 🔍 SEO optimized with structured data
- 🚀 Ready for Vercel deployment
- 🇲🇾 Malaysian market focused

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (Neon)
- **Payments**: Stripe
- **Deployment**: Vercel
- **Styling**: Tailwind CSS, Framer Motion

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon recommended)
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-academy-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Update `.env.local` with your credentials:
```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# App
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

5. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Stripe Integration

### Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Enable Malaysian payment methods (FPX, cards)
3. Get your API keys from the dashboard
4. Set up webhooks for payment confirmation

### Malaysian Payment Methods

- **FPX (Financial Process Exchange)**: Direct bank transfers
- **Credit/Debit Cards**: Visa, Mastercard, etc.
- **Localized**: Malaysian Ringgit (MYR) currency

### Testing

Use Stripe test cards for development:
- Test card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits

## Database Schema

### Models

- **Applicant**: Student application information
- **Payment**: Stripe payment tracking

### Migrations

```bash
# Create a new migration
npx prisma migrate dev --name add_payment_model

# Apply migrations to production
npx prisma migrate deploy

# View database in browser
npx prisma studio
```

## Deployment

### Vercel + Neon

1. **Neon Database Setup**:
   - Create account at [neon.tech](https://neon.tech)
   - Create new project (Singapore region recommended)
   - Copy connection string

2. **Vercel Deployment**:
   - Connect GitHub repository
   - Add environment variables
   - Deploy automatically

3. **Post-deployment**:
   - Run database migrations
   - Test Stripe integration
   - Verify webhook delivery

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## SEO Optimization

### Implemented Features

- ✅ Meta tags and Open Graph
- ✅ Structured data (Schema.org)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Malaysian locale support
- ✅ Mobile-first design

### SEO Tools

- Google Analytics setup
- Google Search Console
- Core Web Vitals optimization
- Local SEO for Malaysia

See [SEO_OPTIMIZATION.md](./SEO_OPTIMIZATION.md) for comprehensive guide.

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── create-checkout-session/  # Stripe checkout
│   │   └── webhook/       # Stripe webhooks
│   ├── components/        # Reusable components
│   │   ├── checkout/      # Payment components
│   │   └── layout/        # Layout components
│   ├── enrollment/        # Enrollment page
│   └── payment-success/   # Payment success page
├── lib/                   # Utility libraries
│   └── stripe.js         # Stripe configuration
└── components/            # Global components

prisma/
├── schema.prisma          # Database schema
└── migrations/            # Database migrations

public/                    # Static assets
├── robots.txt            # SEO robots file
└── sitemap.xml           # SEO sitemap
```

## Available Scripts

```bash
# Development
npm run dev               # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio

# Deployment
npm run deploy           # Build and prepare for deployment
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `NEXT_PUBLIC_BASE_URL` | Your website URL | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

- **Technical Issues**: Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Stripe Support**: [stripe.com/support](https://stripe.com/support)
- **Neon Support**: [neon.tech/docs](https://neon.tech/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

## License

This project is proprietary to Zez Academy.

## Acknowledgments

- Next.js team for the amazing framework
- Stripe for payment processing
- Tailwind CSS for styling
- Prisma for database management
