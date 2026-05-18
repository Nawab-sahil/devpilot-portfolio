# DevPortfolio - Modern Developer Portfolio

A modern, responsive, and fully-featured developer portfolio website built with cutting-edge technologies.

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism and cyberpunk aesthetics
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations and transitions throughout
- **Dark/Light Mode**: Theme toggle with system preference detection
- **SEO Optimized**: Metadata configuration and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Production Ready**: Clean architecture and best practices

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful SVG icons
- **shadcn/ui** - Reusable UI components

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── projects/            # Projects section
│   ├── skills/page.tsx      # Skills showcase
│   ├── blog/                # Blog section
│   ├── contact/page.tsx     # Contact form
│   ├── resume/page.tsx      # Resume page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── sections/            # Page sections
│   └── layout/              # Layout components
├── data/                    # Static data files
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── types/                   # TypeScript types
└── styles/                  # Additional styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

### Update Portfolio Content

1. **Personal Information** - Edit `/src/data/content.ts`
2. **Projects** - Edit `/src/data/projects.ts`
3. **Skills** - Edit `/src/data/skills.ts`
4. **Blog Posts** - Edit `/src/data/blog.ts`

### Modify Styling

- **Colors**: Edit Tailwind config in `tailwind.config.ts`
- **Animations**: Modify Framer Motion variants in `/src/lib/animations.ts`
- **Global Styles**: Edit `/src/app/globals.css`

## 📄 Pages

- **Home** (`/`) - Hero, featured projects, stats, timeline
- **About** (`/about`) - Personal introduction and values
- **Projects** (`/projects`) - All projects with filtering
- **Skills** (`/skills`) - Grouped skills with progress bars
- **Blog** (`/blog`) - Blog posts with categories
- **Contact** (`/contact`) - Contact form and social links
- **Resume** (`/resume`) - Professional resume

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Build & Start
```bash
npm run build
npm start
```

## 📊 Key Features Implemented

✅ Fully responsive design
✅ Sticky animated navbar with mobile menu
✅ Dark/light mode toggle
✅ Smooth scroll behavior
✅ SEO optimized with metadata
✅ Reusable components
✅ Clean folder structure
✅ Professional typography
✅ Gradient backgrounds
✅ Animated hero section
✅ Project cards with hover effects
✅ Loading animations
✅ Page transitions
✅ Accessibility friendly

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️

