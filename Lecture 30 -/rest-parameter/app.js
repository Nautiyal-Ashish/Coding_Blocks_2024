function sam(a, b, c, ...num) {
  //   console.log(a, b, c);
  console.log(arguments);
  console.log(num);
}

sam(10, 20, 30, 40, 50, 60);

// Rest parameter must be last 