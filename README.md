# Portfolio Website

A modern, responsive one-page portfolio website for showcasing my work as a Software Engineer.

## 🚀 Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Update `base` in `vite.config.ts`:
   - For `username.github.io` repo: set `base: '/'`
   - For other repos: set `base: '/repo-name/'`

2. Push to GitHub

3. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: GitHub Actions

4. The workflow will automatically deploy on push to `main`

### Option 2: Manual Deployment

1. Install gh-pages (already in dependencies)

2. Update `base` in `vite.config.ts`

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── Portfolio.tsx           # Main portfolio component
│   ├── App.tsx                 # App wrapper
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

## 🎨 Customization

1. **Personal Info**: Update details in `Portfolio.tsx`
2. **Colors**: Modify Tailwind theme in `tailwind.config.js`
3. **Sections**: Add/remove sections in `Portfolio.tsx`
4. **Profile Photo**: Replace placeholder image URL with your photo

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🌐 Links

- **Live Site**: https://afiaanjumpreety.github.io/portfolio/

