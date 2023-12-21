// import CryptoJS, { AES } from "crypto-js";

// export async function encryptPassword(password) {
//   const secretKeyHex =
//     e68efbcea457dabc76da6d59077e85455bcc3cb0df5ce7f857d14a892815033e;
//   // const secretKey = EncHex.parse(secretKeyHex);
//   const secretKey = CryptoJS.enc.Hex.parse(secretKeyHex);

//   const ciphertext = AES.encrypt(password, secretKey, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   }).toString();

//   return ciphertext;
// }
import CryptoJS, { AES } from "crypto-js";

export async function encryptPassword(password) {
  const secretKeyHex =
    "e68efbcea457dabc76da6d59077e85455bcc3cb0df5ce7f857d14a892815033e";
  const secretKey = CryptoJS.enc.Hex.parse(secretKeyHex);

  const ciphertext = AES.encrypt(password, secretKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  return ciphertext;
}
