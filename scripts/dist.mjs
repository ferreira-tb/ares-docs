import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const startTime = Date.now();

    console.log('Movendo arquivos...');

    const distDir = path.resolve(__dirname, '../dist');
    const docsDir = path.resolve(__dirname, '../../ares/docs');
    await fs.rm(docsDir, { recursive: true, force: true });
    await fs.rename(distDir, docsDir);

    console.log(`Fim dos trabalhos. Tempo total: ${Date.now() - startTime}ms.`);
    
} catch (err) {
    if (err instanceof Error) console.error(err);
};