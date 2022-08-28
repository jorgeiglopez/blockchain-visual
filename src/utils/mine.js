import { sha256 } from './crypto';

export const mine = async data => {
  for (let index = 0; index < 1000000; index++) {
    const hash = await sha256(data.concat(index.toString()));
    if(hash.startsWith('0000')){
      return index;
    }
  }
  return null;
} 