import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const startTime = Date.now();

    const distDir = path.resolve(__dirname, '../dist');

    const indexFile = path.join(distDir, 'index.html');
    let indexContent = await fs.readFile(indexFile, { encoding: 'utf-8' });
    indexContent = indexContent.replace(/"\/assets\//g, '\"assets\/');
    await fs.writeFile(indexFile, indexContent, { encoding: 'utf-8' });

    const docsDir = path.resolve(__dirname, '../../ares/docs');
    await fs.rm(docsDir, { recursive: true, force: true });
    await fs.rename(distDir, docsDir);

    console.log(`Fim dos trabalhos. Tempo total: ${Date.now() - startTime}ms.`);
    
} catch (err) {
    if (err instanceof Error) console.error(err);
};