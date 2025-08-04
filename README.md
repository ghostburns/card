# Dessert Shop - Product List with Cart

A modern e-commerce dessert shop built with Next.js, featuring a beautiful product catalog and shopping cart functionality.

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ghostburns1s-projects/v0-react-product-list)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/HOT9RKmaTaa)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Features

- **Product Catalog**: Browse through a curated selection of premium desserts
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Order Management**: Complete order flow with confirmation
- **Modern UI**: Clean, intuitive interface with smooth interactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd dessert-shop
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── components/          # React components
│   │   ├── Cart.tsx        # Shopping cart component
│   │   ├── ProductCard.tsx # Individual product display
│   │   ├── ProductList.tsx # Product grid layout
│   │   └── OrderConfirmation.tsx # Order success modal
│   ├── context/            # React context providers
│   │   └── CartContext.tsx # Cart state management
│   ├── data/              # Static data
│   │   └── products.ts    # Product catalog
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/ui/         # Reusable UI components
└── lib/                  # Utility functions
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Products

Edit `app/data/products.ts` to add new desserts to the catalog:

\`\`\`typescript
{
  id: 9,
  name: "Your Dessert Name",
  category: "Category",
  price: 0.00,
  image: {
    desktop: "image-url-here",
    // ... other image sizes
  }
}
\`\`\`

### Styling

The project uses Tailwind CSS for styling. Customize the design by:
- Modifying `app/globals.css` for global styles
- Updating component classes in individual files
- Adjusting the color scheme in the CSS variables

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Your project is live at:

**[https://vercel.com/ghostburns1s-projects/v0-react-product-list](https://vercel.com/ghostburns1s-projects/v0-react-product-list)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/HOT9RKmaTaa](https://v0.dev/chat/projects/HOT9RKmaTaa)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.
