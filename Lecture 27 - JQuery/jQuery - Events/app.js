// $("button").click(function () {
//   console.log("Hi dosto ");
// });

// $("input").keydown(function () {
//   console.log("Key Pressed ");
// });

// -------------
// function sam1() {
//   console.log("Hi Sam 1 ");
// }

// function sam2() {
//   console.log("Hi Sam 2 ");
// }

// function sam3() {
//   console.log("Hi Sam 3");
// }

// $("button").click(sam1);
// $("button").click(sam2);
// $("button").click(sam3);

// $("button").keydown(sam1);
// $("button").keydown(sam2);
// $("button").keydown(sam3);

// ---- add event listner -------
// addeventlistener -> on
// $("button").on("click", function () {
//   console.log("Bhai hai ");
// });

// -------------
// this keyword -> Ye jquery ka this hai na ki js ka

$("li").click(function () {
  //   $("li").css("color", "red");❌
  $(this).css("color", "red");
});

$("input").keydown(function () {
  console.log($(this).val());
});
