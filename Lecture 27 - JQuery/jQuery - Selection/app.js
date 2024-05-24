$("li").first().css("color", "red");
$("li").last().css("color", "blue");

// get value from input
console.log($("input").val());

// set value in input
console.log($("input").val("Adam"));

// -----class--------
// $("h1").addClass("heading");
// $("h1").addClass("para");

// addClass - Adding multiple classes
$("h1").addClass("heading para smart");

// removeClass - removing classes
$("h1").removeClass("heading smart");

// toggleClass - toggle classes
$("h1").toggleClass("heading para smart");

// hasClass - Check whether class is present (true/false)
console.log($("h1").hasClass("heading"));
console.log($("h1").hasClass("para"));
