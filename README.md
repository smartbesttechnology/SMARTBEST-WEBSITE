# SmartBest Technology Website

This is a modern website for SmartBest Technology built with Next.js, React, and Tailwind CSS. The website features smooth animations, responsive design, and a clean UI.

## Features

- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Fully responsive design
- TypeScript for type safety
- Next.js 13+ with App Router
- Optimized images with Next.js Image component
- Intersection Observer for scroll-based animations

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd smartbest-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: React components
- `/src/styles`: Global styles and Tailwind CSS configuration
- `/public`: Static assets (images, videos, etc.)

## Required Assets

Place the following assets in the `/public` directory:

- `/logo.png`: Company logo
- `/hero-video.mp4`: Background video for hero section
- `/about-image.jpg`: Image for about section
- `/products/*.jpg`: Product images
- `/team/*.jpg`: Team member images

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Customization

- Colors and theme: Edit the `tailwind.config.js` file
- Global styles: Edit the `/src/styles/globals.css` file
- Content: Update the text and images in the respective component files

## License

This project is licensed under the MIT License.
