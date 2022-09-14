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

export const isValid = (val) => {
  if (!!val && typeof val === 'string') {
    return val.startsWith(blockSignature);
  }
  return false;
};