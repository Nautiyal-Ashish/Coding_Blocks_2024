let divv = document.querySelector("div");

let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
h3.innerText = "main hun ashish";
h4.innerText = "i am h4";
// ------------------------
// appendChild  -> One element at a time
// divv.appendChild(h3);
// divv.appendChild(h4);
// -------------------------

// divv.appendChild(h3 , h4); //❌

// ---------------------------

// append() -> for multiple elements -> at the last
// divv.append(h3)
// divv.append(h4)

divv.append(h3, h4);

// ---------------------------
//prepend -> for multiple elements -> at the top

divv.prepend(h3, h4);

// ------------------
// before , after

h3.before(h4);
h3.after(h4);

// ------------------