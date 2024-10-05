const QRCode = require('qrcode');
const fs = require('fs');

function generateCartId() {
  // Generate a random cart ID
  return Math.floor(100000 + Math.random() * 900000);
}

async function generateQRCode(cartId) {
  const data = JSON.stringify({ cartId: cartId }); // Create JSON data
  const filePath = `qr_codes/qr_code_${cartId}.png`;

  try {
    await QRCode.toFile(filePath, data, {
      color: {
        dark: '#000000',  // Black dots
        light: '#FFFFFF'  // White background
      }
    });
    console.log(`Generated QR code for cart ID: ${cartId}`);
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  const cartId = generateCartId();
  await generateQRCode(cartId);
}

main();
