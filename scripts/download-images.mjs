import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { id: '1552519507-da3b142c6e3d', name: 'hero.jpg', query: 'w=2000&q=80' },
  { id: '1542282088-fe8426682b8f', name: 'philosophy.jpg', query: 'w=1200&q=80' },
  { id: '1614200179396-2bdb77ebf81b', name: 'engine.jpg', query: 'w=1200&q=80' },
  { id: '1502877338535-766e1452684a', name: 'metalwork.jpg', query: 'w=1200&q=80' },
  { id: '1580274455191-1c62238fa333', name: 'finish.jpg', query: 'w=1200&q=80' },
  { id: '1503376711582-43f1bd8591bf', name: 'inspection.jpg', query: 'w=1200&q=80' },
  { id: '1562916853-ebbd1bb39bf9', name: 'welding.jpg', query: 'w=1200&q=80' },
  { id: '1520627581179-880a221f7596', name: 'assembly.jpg', query: 'w=1200&q=80' },
  { id: '1553440569-bea659a16f56', name: 'interior.jpg', query: 'w=1600&q=80' },
  { id: '1492144534655-ae79c964c9d7', name: 'classic.jpg', query: 'w=1600&q=80' },
  { id: '1583121274602-5ea083b014f3', name: 'gauges.jpg', query: 'w=1200&q=80' },
  { id: '1579222416047-920f2b34a663', name: 'macro.jpg', query: 'w=1200&q=80' },
  { id: '1598460677119-940f90e96ce0', name: 'grille.jpg', query: 'w=1200&q=80' },
  { id: '1536643242095-2c8c7f99988b', name: 'blur.jpg', query: 'w=1200&q=80' }
];

const targetDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${url} to ${dest}...`);
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function run() {
  for (const img of images) {
    const url = `https://images.unsplash.com/photo-${img.id}?ixlib=rb-4.0.3&auto=format&fit=crop&${img.query}`;
    const dest = path.join(targetDir, img.name);
    try {
      await download(url, dest);
      console.log(`Successfully downloaded ${img.name}`);
      await delay(1000);
    } catch (e) {
      console.error(`Failed to download ${img.name}:`, e);
    }
  }
  console.log('All images downloaded successfully.');
}

run();
