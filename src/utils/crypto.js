import { isValid } from './mine';

const concatTransactions = transactions => transactions
  .map(t => t.from.concat("::").concat(t.to).concat("::").concat(t.amount));

export const getContentToHash = (block, index) => block.data
  .concat(!!block.tx ? concatTransactions(block.tx) : '')
  .concat(!!block.previous ? block.previous : '')
  .concat(index ? index : block.nonce);

export const sha256 = async (inputText) => {
  const msgBuffer = new TextEncoder().encode(inputText);

  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

export const sha256Block = async block => {
  const newBlock = { ...block };
  const hash = await sha256(getContentToHash(newBlock));
  newBlock.hash = hash;
  newBlock.valid = isValid(hash);
  return newBlock;
};

export const sha256Blockchain = async blockchain => {
  let prevHash = '';
  for (let index = 0; index < blockchain.length; index++) {
    blockchain[index].previous = prevHash;
    blockchain[index] = await sha256Block(blockchain[index]);
    prevHash = blockchain[index].hash;
  }
  return blockchain;
};

export const hashShortener = hash => {
  return hash.substring(0, 12).concat(' [ ... ] ').concat(hash.substring(hash.length - 12, hash.length - 1));
};