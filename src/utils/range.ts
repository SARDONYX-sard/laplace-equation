export const range = function ({ start = 0, stop = 0, step = 0 }) {
  // Math.max() は引数の中で最大の値をとる。
  const length = Math.max(Math.ceil((stop - start) / step), 0);
  const range = Array<number>(length);

  // step 毎の値を length 分格納するforループ。
  for (let idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};

// test
// console.log( range({ start: 1, stop: 10, step: 2 })); // [1, 3, 5, 7, 9]
