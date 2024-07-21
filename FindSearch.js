const array = [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"];

function hasDuplicates(arr) {
  const flattenedArray = arr.map((item) => JSON.stringify(item));
  return new Set(flattenedArray).size !== flattenedArray.length;
}

console.log(hasDuplicates(array));
