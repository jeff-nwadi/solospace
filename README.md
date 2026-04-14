# Solospace — Your Solo Business, All in One Space 💼

> Stop losing clients between WhatsApp and spreadsheets. Solospace is an all-in-one CRM that gives solo freelancers their own dedicated space to manage clients, projects, invoices, follow-ups, and revenue — beautifully.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Live Demo

> Coming soon — [solospace.vercel.app](https://solospace.vercel.app)

---

## 📸 Screenshots

> Coming soon

---

## 😤 The Problem

As a freelancer you're probably:

- Tracking leads in WhatsApp, clients in Notion, invoices in Wave or Excel
- Forgetting to follow up with potential clients and losing deals
- Spending hours chasing unpaid invoices manually
- Having no clear picture of your monthly revenue or pipeline value
- Losing client details scattered across 5 different tools

**Solospace fixes all of this in one place.**

---

## ✨ Features

### Core
- 👥 **Client Management** — Full client profiles with contact details, status, tags, and notes
- 📊 **Pipeline Kanban** — Drag and drop clients through Lead → Proposal → Active → Completed
- 📁 **Project Tracker** — Track progress, deadlines, and budgets per project
- 🧾 **Invoice Builder** — Create, send, and track professional invoices with PDF export
- 💳 **Online Payments** — Clients pay invoices directly via Stripe
- 📅 **Follow-up Reminders** — Never forget to follow up with a lead again

### Intelligence
- 🤖 **AI Follow-up Suggestions** — AI reads your last conversation and writes a follow-up message for you
- 💚 **Client Health Score** — AI scores each client relationship (payment history, communication, activity)
- 📈 **Revenue Forecasting** — See how much you're on track to earn this month

### Analytics
- 💰 **Revenue Dashboard** — MRR, total earned, outstanding invoices, best clients
- 📊 **Charts** — Revenue over time, invoice status breakdown, top clients

### Communication
- 📧 **Automated Emails** — Invoice sent, payment reminder, overdue notice, payment received
- 🔔 **Smart Notifications** — Daily digest of clients who need attention

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + Shadcn/ui |
| **Database** | Neon (PostgreSQL) |
| **ORM** | Drizzle ORM |
| **Auth** | BetterAuth |
| **Payments** | Stripe |
| **AI** | Vercel AI SDK + Groq |
| **Email** | Resend + React Email |
| **PDF** | React PDF |
| **File Upload** | Uploadthing |
| **Charts** | Recharts |
| **Drag & Drop** | @hello-pangea/dnd |
| **Security** | Arcjet |
| **Deployment** | Vercel |

---

## 💰 Pricing Plans

| Plan | Price | Clients | Invoices | AI Features | Analytics |
|---|---|---|---|---|---|
| **Free** | $0/month | 5 | 10 | ❌ | ❌ |
| **Pro** | $9/month | Unlimited | Unlimited | ✅ | ✅ |
| **Annual** | $79/year | Unlimited | Unlimited | ✅ | ✅ |

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech) database
- [Stripe](https://stripe.com) account
- [Groq](https://console.groq.com) API key (free)
- [Resend](https://resend.com) account
- [Uploadthing](https://uploadthing.com) account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/solospace.git

# Navigate into the project
cd solospace

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Database Setup

```bash
# Push schema to Neon
npx drizzle-kit push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
/app
  /(auth)
    /login/page.tsx
    /register/page.tsx
  /(dashboard)
    /layout.tsx                ← sidebar + nav
    /dashboard/page.tsx        ← overview
    /clients/page.tsx          ← clients list
    /clients/[id]/page.tsx     ← client detail
    /pipeline/page.tsx         ← kanban board
    /projects/page.tsx         ← projects list
    /projects/[id]/page.tsx    ← project detail
    /invoices/page.tsx         ← invoices list
    /invoices/new/page.tsx     ← create invoice
    /invoices/[id]/page.tsx    ← invoice detail
    /follow-ups/page.tsx       ← follow-up list
    /revenue/page.tsx          ← analytics
    /settings/page.tsx         ← settings
  /(marketing)
    /page.tsx                  ← landing page
  /onboarding/page.tsx         ← onboarding flow
  /api
    /auth/                     ← BetterAuth routes
    /clients/                  ← client CRUD
    /projects/                 ← project CRUD
    /invoices/                 ← invoice CRUD
    /follow-ups/               ← follow-up CRUD
    /ai/follow-up/             ← AI suggestions
    /ai/health-score/          ← health score
    /payments/                 ← Stripe checkout
    /webhooks/stripe/          ← Stripe webhooks
    /upload/                   ← Uploadthing

/db
  schema.ts                    ← all Drizzle tables
  index.ts                     ← Neon connection

/lib
  auth.ts                      ← BetterAuth config
  stripe.ts                    ← Stripe client
  resend.ts                    ← email client
  uploadthing.ts               ← file upload
  ai.ts                        ← Vercel AI SDK

/components
  /ui                          ← Shadcn components
  /dashboard                   ← dashboard components
  /clients                     ← client components
  /invoices                    ← invoice components
  /pipeline                    ← kanban board
  /charts                      ← revenue charts
  /emails                      ← React Email templates
```

---

## 🔄 Key Flows

### Invoice Flow
```
Create invoice → Generate PDF → Send via email
→ Client pays via Stripe → Mark as paid
→ Activity logged → Revenue updated
```

### AI Follow-up Flow
```
Daily cron job → Find clients not contacted in 5+ days
→ AI reads last conversation → Generates message suggestion
→ Shows on follow-ups page → One click to send
```

### Client Health Score
```
Triggered on every update → Calculates score based on:
payment history + communication + project activity
→ Updates health badge on client card
```

---

## 🗺️ Roadmap

- [x] Project setup & architecture
- [ ] Authentication (BetterAuth)
- [ ] Onboarding flow
- [ ] Client management (CRUD)
- [ ] Pipeline Kanban board
- [ ] Project tracker
- [ ] Invoice builder + PDF
- [ ] Stripe payments
- [ ] Follow-up reminders
- [ ] AI follow-up suggestions
- [ ] Client health score
- [ ] Revenue analytics + charts
- [ ] Email notifications (Resend)
- [ ] Settings + logo upload
- [ ] Stripe subscription (Pro plan)
- [ ] Landing page
- [ ] Mobile responsive
- [ ] Product Hunt launch 🚀

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first.

```bash
# Fork the repo
git checkout -b feature/amazing-feature
git commit -m 'Add amazing feature'
git push origin feature/amazing-feature
# Open a Pull Request
```

---

## 📄 License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## ⭐ Support

If this project helps you, please give it a ⭐ on GitHub!

---

> Built with ❤️ for freelancers, by a freelancer.
