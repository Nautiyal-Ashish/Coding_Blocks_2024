// Text content
// get value as text
// console.log($("p").text());
// set value as text
// $("p").text("Vande Bharat");

// ----------
// get value as html tag
// console.log($("p").html());
// set value in the tag
// $("p").html("India is great");

// ----------
// attr (getAttribute , setAttribute)

console.log($("a").attr("href"));
console.log($("input").attr("type"));

$("a").attr("href", "http://instagram.com");
$("input").attr("type", "color");

console.log($("a").attr("href"));
console.log($("input").attr("type"));
