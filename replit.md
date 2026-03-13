# NaijaConnect

A modern premium dating directory website listing verified adult women, allowing visitors to browse profiles and contact them directly via WhatsApp.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Deployment**: Vercel / Replit

## Architecture

- **Static data**: Profiles are stored in `src/data/profiles.ts` — add/edit profiles directly in this file.
- **No database**: Fully static — lightweight and Telegram Mini App compatible.
- **Dark mode**: System preference detected + manual toggle via localStorage.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section and featured profiles |
| `/profiles` | Full directory grid of all active profiles |
| `/profiles/[id]` | Individual profile page with WhatsApp contact |
| `/admin` | Admin panel to show/hide profiles (session-only) |

## Adding Profiles

Edit `src/data/profiles.ts` and add a new entry to the `profiles` array:

```typescript
{
  id: "9",           // Unique string ID
  name: "Name",
  age: 25,
  location: "City, Nigeria",
  bio: "Short bio here.",
  interests: ["Music", "Travel"],
  whatsapp: "+2348100000009",  // Full international format
  photo: "https://...",        // Direct image URL
  verified: true,
  active: true,
}
```

## Running Locally

```bash
npm run dev     # Development (port 5000)
npm run build   # Production build
npm run start   # Production server
```

## Vercel Deployment

- No environment variables required for basic operation.
- Push to GitHub and connect to Vercel — it deploys automatically.
