const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -xsmall.jpg
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-xsmall.jpg`,
      ),
    );

  // mengubah ukuran gambar dengan lebar min 576px, dengan prefix -xsmall.jpg
  sharp(`${target}/${image}`)
    .resize(576)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ),
    );

  // mengubah ukuran gambar dengan lebar min 992px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(992)
    .toFile(
      path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
    );
});
