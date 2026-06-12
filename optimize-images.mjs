import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'fs';
import { join } from 'path';

const SRC = './images';
const DST = './images_optimized';

mkdirSync(DST, { recursive: true });

const files = readdirSync(SRC).filter(f => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = join(SRC, file);
  const dst = join(DST, file.replace(/\.\w+$/, '.jpg'));
  const before = statSync(src).size;
  totalBefore += before;

  await sharp(src)
    .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(dst);

  const after = statSync(dst).size;
  totalAfter += after;
  console.log(`${file}: ${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB -> ${(totalAfter/1024/1024).toFixed(1)}MB`);
console.log(`Redução: ${((1 - totalAfter/totalBefore) * 100).toFixed(0)}%`);
