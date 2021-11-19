export const clone = (arr: number[], duplicate = 10) => {
  let arrays = [];
  const copy = [...arr];

  for (let i = 0; i < duplicate; i++) {
    arrays.push(copy);
  }
  return arrays;
};

// test
console.log(clone([1, 2], 10));

// [
//   [ 1, 2 ], [ 1, 2 ],
//   [ 1, 2 ], [ 1, 2 ],
//   [ 1, 2 ], [ 1, 2 ],
//   [ 1, 2 ], [ 1, 2 ],
//   [ 1, 2 ], [ 1, 2 ]
// ]
