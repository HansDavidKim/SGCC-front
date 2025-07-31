
import { writable } from 'svelte/store';

export const name: string = 'world';
export const imgsrc: string = 'https://yt3.googleusercontent.com/aBBmBfA_6zGskSPx65DMzPDbOczqRkl_FPj05OiUfsXD3AhE0jevgR0ERIH44J1wNGixAkztmfM=s900-c-k-c0x00ffffff-no-rj';
export const str: string = '안녕하세요! <strong>Svelte와 html</strong> 공부를 하고 있습니다!';

export const num = writable(0);
export const IncreaseNumber = () => num.update(num => num + 1);
export const DecreaseNumber = () => {
    num.update(num => num - 1);
}