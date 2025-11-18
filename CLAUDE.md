# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BiznagaFest is a technology conference/festival event website built with Astro 5, deployed to Vercel with serverless functions. The site features speaker profiles, sponsor showcases, event schedules, ticket sales, raffles, and team member profiles. The architecture supports both local data mode and CMS integration for flexible content management.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Sync Astro types
npm run sync
```

## Architecture

### Data Layer Strategy

The application uses a dual-data architecture controlled by the `USE_CMS` environment variable:

- **Local Mode** (`USE_CMS=false`): Data sourced from `src/data/local-data.ts`
- **CMS Mode** (`USE_CMS=true`): Data fetched from external CMS via `src/data/cms-data.ts`

Data selection happens in `src/data/data.ts`, which exports the `DATA` constant used throughout the application. All data conforms to types defined in `src/data/data.type.ts`.

### Framework Configuration

- **Output Mode**: Server-side rendering (SSR) with Vercel serverless adapter
- **Integrations**: Tailwind CSS, Preact (for interactive components), astro-page-insight
- **Prefetch**: Viewport-based prefetching enabled
- **Dark Mode**: Class-based dark mode managed via localStorage (see `src/layouts/Layout.astro`)

### Environment Variables

Required environment variables are defined in `astro.config.mjs`:

- `USE_CMS` (boolean, optional, default: false): Toggle between local and CMS data
- `CMS_URL` (string, optional): CMS endpoint URL
- `RESEND_API_KEY` (string, required): API key for Resend email service

### Routing Structure

- `/` - Main landing page (`src/pages/index.astro`)
- `/code` - Code of conduct
- `/schedule` - Event schedule
- `/raffles` - Raffle information
- `/speaker/[speaker]` - Speaker detail pages (dynamic)
- `/sponsor/[sponsor]` - Sponsor detail pages (dynamic)
- `/host/[host]` - Host detail pages (dynamic)
- `/organizer/[organizer]` - Organizer detail pages (dynamic)
- `/staff/[staff]` - Staff detail pages (dynamic)
- `/api/sponsor-contact` - API endpoint for sponsor contact form (Resend integration)

### Component Organization

Components are organized in `src/components/`:

- **Presentation Components**: `Speaker.astro`, `Sponsor.astro`, `TeamMember.astro`, `Host.astro`, `EventCard.astro`, `TicketItem.astro`
- **Layout Components**: `Navigation.astro`, `Footer.astro`, `CommonHead.astro`
- **Interactive Components**: `Accordion.astro`, `Carousel.astro`, `Schedule.astro`, `DarkModeToggleButton.astro`, `ButtonUp.astro`
- **Utility Components**: `AnimatedOnViewportEnter.astro` (viewport-based animations), `RichText.astro`, `Socials.astro`
- **Preact Components**: Located in `src/components/integrations/preact/components/` for client-side interactivity (forms with state management)

**Important**: Most components are server-rendered Astro components. Only use Preact (`client:*` directives) when client-side state or interactivity is required (e.g., forms, dynamic UI state).

### Email Integration

Two email systems exist (legacy nodemailer/Gmail OAuth2 and current Resend):

- **Current**: Resend API via `src/pages/api/sponsor-contact.ts` (actively used)
- **Legacy**: Gmail OAuth2 transporter in `src/services/mail-transporter.factory.ts` (may not be in active use)

### Styling

- **Framework**: Tailwind CSS with custom color palette configured in `tailwind.config.cjs`
- **Custom Colors**: BiznagaFest brand colors (blue, green, yellow, red variants) plus dark/light background colors
- **Font**: Manrope sans-serif (imported via Google Fonts in `CommonHead.astro`)
- **Dark Mode**: Implemented via Tailwind's class-based dark mode, toggled with localStorage
- **Icons**: Phosphor Icons (`ph` classes)
- **Animations**: animate.css library for CSS animations

### TypeScript Configuration

- Extends Astro strict TypeScript config
- JSX configured for Preact (`jsxImportSource: "preact"`)

## Key Technical Details

### Animation System

Viewport-based animations use the `AnimatedOnViewportEnter.astro` component with `IntersectionObserver`. Elements with class `animate` and `data-animation` attributes are automatically observed and animated on viewport entry (see `src/layouts/Layout.astro:42-61`).

### Data Types

The central `Data` type in `src/data/data.type.ts` defines the complete site structure including:

- Event metadata (title, date, description, venue)
- Content arrays (speakers, hosts, sponsors, team members, events, tickets, raffles, FAQ)
- Configuration objects (welcomeBanner, callForPapers, sponsorsDossier, lastEdition)

### Sponsor Tiers

Sponsors are categorized by tier: `gold`, `silver`, `bronze`, `communitySponsor`, `media`, `food`, `community`, `supporter`. The homepage groups sponsors by tier for display.

### Analytics Tracking

Umami analytics is configured in `CommonHead.astro` with comprehensive event tracking:

- **Script**: `https://analytics.davidrojom.com/script.js`
- **Website ID**: `02caee5f-9848-44b2-839b-0da159342204`
- **Event Tracking**: `data-umami-event` attributes are used throughout the site to track:
  - **Conversion Events**: Ticket purchases, sponsor form submissions, dossier downloads
  - **Navigation**: Menu clicks, logo clicks, scroll-to-top, footer links
  - **Content Engagement**: Speaker/sponsor/host profile clicks, FAQ toggles, ticket perk toggles
  - **Social Links**: Individual tracking for all social media platforms
  - **UI Interactions**: Dark mode toggle, menu toggle, carousel navigation

**When adding new interactive elements**, add `data-umami-event="descriptive_event_name"` to track user engagement.

## Deployment

- **Platform**: Vercel
- **Adapter**: `@astrojs/vercel/serverless`
- **Analytics**: Vercel Web Analytics + Umami (self-hosted)
- **Build Output**: `.vercel/output/`
