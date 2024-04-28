// Callback Hell

//image select


function step1(fn) {
  console.log("Please wait ! I am searching...");
  setTimeout(function () {
    console.log("Image found");
    fn("selected image"); //step2
  }, 4000);
}

// filter apply
function step2(image, fn) {
  console.log(`Applying Filter on ${image}`);
  setTimeout(function () {
    console.log("Filter Applied");
    fn("Filter Applied"); //step3
  }, 2000);
}

// caption add

function step3(filter, fn) {
  console.log(`Adding Caption to the applied ${filter}`);
  setTimeout(function () {
    console.log("caption added on filter image");
    fn("Captioned image"); //step4
  }, 5000);
}

// uploading
function step4(caption) {
  console.log(`Please wait uplaoding your ${caption}`);
  setTimeout(function () {
    console.log("Image Uploaded Succesfully");
  }, 3000);
}

// Callback Hell
// asnychronus code - advantage
step1(function (image) {
  step2(image, function (filter) {
    step3(filter, function (caption) {
      step4(caption);
    });
  });
});

// step1(step2(step3(step4)))

