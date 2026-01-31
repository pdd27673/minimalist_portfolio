# Minimalist Portfolio

A clean, minimalist portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 Minimalist design with dark/light mode support
- 📱 Fully responsive
- ⚡ Built with Next.js 16 App Router
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS v4 for styling
- 🔄 Auto-scrolling GitHub commits carousel
- 📝 Dynamic content management via `lib/data.ts`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Railway

This project is configured for Railway deployment. Railway will automatically detect Next.js and use the configuration in `railway.json`.

1. Connect your GitHub repository to Railway
2. Railway will automatically detect Next.js and start building
3. The app will be deployed and you'll get a URL

### Environment Variables

No environment variables are required for basic functionality. If you need to add any, set them in Railway's dashboard under your project settings.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Feature components
├── lib/                   # Utilities and data
│   ├── data.ts            # Portfolio content data
│   ├── tech-icons.tsx     # Technology icon mappings
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Customization

All portfolio content is managed in `lib/data.ts`. Update this file to change:
- Personal information
- Experience
- Projects
- Skills
- Writings

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React, React Icons
- **Theme:** next-themes

## License

Private - All rights reserved
