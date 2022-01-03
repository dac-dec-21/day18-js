let id = 1;
let price = 99.99;
let str = "hellooo";
let active = true;
let obj = {};
let list = [];
const fn = () => {};

// Focus Should be Here...
function demoV1(p1) {
  console.log(p1);
}

demoV1();
demoV1(1);
demoV1(99.99);
demoV1("rohit");
demoV1(true);
demoV1({});
demoV1([]);

//
demoV1(() => {});
