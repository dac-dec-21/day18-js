let list = ["delhi", "calcutta", "mumbai"];

// Iterate :: 1
for (let i = 0; i < list.length; i++) {
  let str = list[i];
  console.log(str);
}

console.log();
// Iterate :: 2
for (let item of list) {
  console.log(item);
}

console.log();
// iterate :: 3 :: Lamda and Stream
list.forEach((item, index) => {
  console.log(item, index);
});
