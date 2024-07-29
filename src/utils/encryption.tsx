import * as CryptoJS from 'crypto-js';

export const encrypt = (txt: string) => {
  return CryptoJS.AES.encrypt(txt, 'nsdcc-encryption-events-portal').toString();
};

export const decrypt = (txtToDecrypt: string) => {
  return CryptoJS.AES.decrypt(txtToDecrypt, 'nsdcc-encryption-events-portal').toString(CryptoJS.enc.Utf8);
};
