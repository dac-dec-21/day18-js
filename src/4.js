let id = 100;
let str = "rohit";
let myfn = () => {
  console.log("Hellooo Worldddd");
};

function demo(p1) {
  console.log(p1);

  if (typeof p1 == "function") {
    p1();
  }
}

demo(id);
demo(str);

demo(myfn);
demo(() => {
  console.log("Hellooo Universe");
});
