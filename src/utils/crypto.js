import { isValid } from './mine';

export const sha256 = async (inputText) => {
  const msgBuffer = new TextEncoder().encode(inputText);

  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

export const sha256Block = async block => {
  const newBlock = {...block};
  const toHash = newBlock.data.concat(!!newBlock.previous ? newBlock.previous : '').concat(newBlock.nonce);
  const hash = await sha256(toHash);
  newBlock.hash = hash;
  newBlock.valid = isValid(hash);
  return newBlock;
}