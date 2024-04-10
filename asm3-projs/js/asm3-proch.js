"use strict";

// Set hovered state for element specified by input parameter
function hoveredobject(hovobj) {
  hovobj.setAttribute("style", "color: rgb(0, 233, 155);");
}

// Set mouse-out state for element specified by input parameter
function mouseoutobject(moutobj) {
  moutobj.setAttribute("style", "color: grey;");
}

// Set mouse-down state for element specified by input parameter
function mousedownobject(mdownobj) {
  mdownobj.setAttribute("style", "color: olivedrab;");
}

// Display an object that is input parameter
function dispobject(refobj) {
  refobj.classList.remove("hidden");
}

// Hide an object that is input parameter
function hideobject(refobj) {
  refobj.classList.add("hidden");
}
