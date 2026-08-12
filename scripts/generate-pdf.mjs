import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePdf() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a typical desktop size
  await page.setViewport({ width: 1200, height: 800 });

  console.log('Navigating to dossier template...');
  // We assume the Next.js dev server is running on port 3000
  await page.goto('http://localhost:3000/dossier-template', { waitUntil: 'networkidle0' });

  // Add a small delay to ensure fonts and images are fully painted
  await new Promise(r => setTimeout(r, 2000));

  const outputPath = path.join(__dirname, '../public/dossier/commission-014.pdf');
  console.log(`Generating PDF at ${outputPath}...`);

  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  console.log('PDF generation complete!');
  await browser.close();
}

generatePdf().catch(console.error);
