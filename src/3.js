function addition(n1, n2) {
  return n1 + n2;
}

function demo(fn) {
  console.log("TEST!!!");

  if (typeof fn === "function") {
    fn();
  }
}

demo(() => {});
