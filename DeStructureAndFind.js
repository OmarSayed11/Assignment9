const array = [
  8,
  "55",
  2,
  "Hello World",
  { a: 2, b: 5 },
  false,
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];

const {
  6: {
    arr: [, , , { 1: thirtyThree }],
    obj: { d: moha },
  },
} = array;

console.log(thirtyThree); // 33
console.log(moha); // "Moha"
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
const arrayy = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

function hasDuplicates(arr) {
  const flattenedArray = arr.map((item) => JSON.stringify(item));
  return new Set(flattenedArray).size !== flattenedArray.length;
}

console.log(hasDuplicates(arrayy));
