# Coin Flip Extremes

A unique web application that transforms the classic coin flip into an engaging experience with meaningful outcomes.

https://playful-coin-journey.lovable.app

## Features
- Interactive 3D coin flipping animation
- Dynamic outcomes based on flip results
- Responsive design for all devices
- No tracking or data collection

## Tech Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- ShadcnUI

## Local Development

1. Clone the repository
```bash
git clone <your-repo-url>
cd coin-flip-extremes
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## Deployment

### Vercel
1. Fork this repository
2. Import to Vercel
3. Deploy with default settings

### Netlify
1. Fork this repository
2. Connect to Netlify
3. Deploy with build command: `npm run build`
4. Set publish directory to: `dist`

### AWS/GCP
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your chosen static hosting service:
   - AWS S3 + CloudFront
   - Google Cloud Storage + Cloud CDN

## Testing
Run tests with:
```bash
npm test
```

## Security
- No sensitive data collection
- All computations done client-side
- No external API dependencies
- Content Security Policy implemented

## License
MIT License - Feel free to use and modify for your needs.
