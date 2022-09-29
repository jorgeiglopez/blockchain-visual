import { sha256 } from './crypto';

const blockSignature = '0000';

export const mine = async data => {
  for (let index = 0; index < 1000000; index++) {
    const hash = await sha256(data.concat(index.toString()));
    if(hash.startsWith(blockSignature)){
      return index;
    }
  }
  return null;
}

export const mineBlock = async block => {
  for (let index = 0; index < 1000000; index++) {
    const toHash = block.data.concat(!!block.previous ? block.previous : '').concat(index);
    const hash = await sha256(toHash);
    if(hash.startsWith(blockSignature)){
      block.hash = hash;
      block.nonce = index;
      block.valid = isValid(hash)
      return block;
    }
  }
  console.warn("Couldn't find nonce for the block!")
  return null;
}

export const isValid = (val) => {
  if (!!val && typeof val === 'string') {
    return val.startsWith(blockSignature);
  }
  return false;
};