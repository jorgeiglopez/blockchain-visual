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

export const sha256Blockchain = async blockchain => {
  let prevHash = '';
  for (let index = 0; index < blockchain.length; index++) {
    blockchain[index].previous = prevHash; 
    blockchain[index] = await sha256Block(blockchain[index]);
    prevHash = blockchain[index].hash;
  }
  return blockchain;
}

export const hashShortener = hash => {
  return hash.substring(0, 12).concat(' [ ... ] ').concat(hash.substring(hash.length - 12, hash.length - 1));
};