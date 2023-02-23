import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const startTime = Date.now();

    const docsDir = path.resolve(__dirname, '../../ares/docs');
    await fs.rm(docsDir, { recursive: true, force: true });

    const distDir = path.resolve(__dirname, '../dist');
    await fs.rename(distDir, docsDir);
    
} catch (err) {
    if (err instanceof Error) console.error(err);
};