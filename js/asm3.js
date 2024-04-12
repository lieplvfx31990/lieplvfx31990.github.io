"use strict";

// Regex for email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const msg0 = "Hãy nhập email để xác thực";
const msg1 = "Chưa nhập email, vui lòng nhập email hợp lệ.";
const msg2 = "Email không hợp lệ, vui lòng nhập lại.";

/** Declare elements on document */
// email submit button
const btneSubmit = document.querySelector("#btn-email");
// email input field
const inputeField = document.querySelector("#in-email");
// Personal Information element
const persoInfoEl = document.querySelector(".info-content");
// Query Personal Information element
const queryInfoEl = document.querySelector(".query-info");

// Buttons for viewing details of job information
const btnViewJobs = document.querySelectorAll(".btn-jobinfo");
// Elements contain the job information
const viewJobsEls = document.querySelectorAll(".job-details");
// Job Info header
const hJobInfos = document.querySelectorAll(".hjobinfo");

// The array holds the state the each of jobs is showing or not, 1: showing, 0: hidden
const jobsLen = btnViewJobs.length;
let currentViewStates = [];
for (let i = 0; i < jobsLen; i++) currentViewStates.push(0);

/**
 *  This function set height property for all elements, which are specified
 * by an input class name, according to the max height among them.
 * This function helps to set rows in the tables in "project" section seems
 * to be arranged "row by row" :D
 */
function set_equiv_element_height(elCls) {
  let els = document.querySelectorAll("." + `${elCls}`);
  let maxH = 0;
  let inArrLen = els.length;
  for (let i = 0; i < inArrLen; i++)
    if (els[i].clientHeight > maxH) maxH = els[i].clientHeight;
  for (let i = 0; i < inArrLen; i++) els[i].style.height = `${maxH}` + "px";
}

/**
 *  This function set height property for all elements, which are specified
 * by an input class name, to their fit-content.
 */
function resetheight(elCls) {
  let els = document.querySelectorAll("." + `${elCls}`);
  let inArrLen = els.length;
  for (let i = 0; i < inArrLen; i++) {
    els[i].setAttribute("style", "height: fit-content;");
  }
}

/**
 * SET ATTRIBUTE FOR QUERYING PERSONAL INFORMATION BUTTON
 */
// Function to set mouseover state
function qbtnhover() {
  btneSubmit.setAttribute(
    "style",
    "background-color: rgb(35, 35, 184); color: white; border: solid 2px transparent;"
  );
}

// Function to set mouseout state
function qbtnmouseout() {
  btneSubmit.setAttribute(
    "style",
    "background-color: rgb(32, 169, 211); color: white; border: solid 2px transparent;"
  );
}

// Function to set mousedown state
function qbtnmousedown() {
  btneSubmit.setAttribute(
    "style",
    "background-color: rgb(149, 250, 149); color: black; border: solid 2px orange;"
  );
}

// Function to process mouse up
function qbtnmouseup() {
  let emailStr = inputeField.value;
  if (emailStr.length === 0) {
    document.getElementById("lb-email").textContent = msg1;
    qbtnhover();
  } else if (!regex.test(emailStr)) {
    document.getElementById("lb-email").textContent = msg2;
    qbtnhover();
  } else {
    qbtnmouseout();
    queryInfoEl.classList.add("hidden");
    persoInfoEl.classList.remove("hidden");
  }
}

// Mouse moves on Job Info area
function mouseOnJobInfo() {
  for (let i = 0; i < jobsLen; i++) {
    hJobInfos[i].addEventListener("mouseover", function () {
      btnViewJobs[i].setAttribute(
        "style",
        "background-color: blanchedalmond; color: blue;"
      );
    });
    hJobInfos[i].addEventListener("mouseout", function () {
      btnViewJobs[i].setAttribute(
        "style",
        "background-color: transparent; color: transparent;"
      );
    });
  }
}

// View Job Info Button processing
function mouseUpBtnJobInfo() {
  for (let i = 0; i < jobsLen; i++) {
    btnViewJobs[i].addEventListener("mouseup", function () {
      if (currentViewStates[i] === 0) {
        viewJobsEls[i].classList.remove("hidden");
        btnViewJobs[i].textContent = "▲ VIEW LESS";
        currentViewStates[i] = 1;
      } else {
        viewJobsEls[i].classList.add("hidden");
        btnViewJobs[i].textContent = "▼ VIEW MORE";
        currentViewStates[i] = 0;
      }
    });
  }
}

// Arrange Project Items to be vertically justified
function arrangeProjItems() {
  if (window.outerWidth > 480) {
    set_equiv_element_height("proj-desc");
    set_equiv_element_height("proj-role");
    set_equiv_element_height("proj-tech");
    set_equiv_element_height("proj-title");
    set_equiv_element_height("proj_brief");
  } else {
    resetheight("proj-desc");
    resetheight("proj-role");
    resetheight("proj-tech");
    resetheight("proj-title");
    resetheight("proj_brief");
  }
}

arrangeProjItems();

// Attatch listener function for window resizing
window.addEventListener("resize", function () {
  if (window.outerWidth > 480) {
    set_equiv_element_height("proj-desc");
    set_equiv_element_height("proj-role");
    set_equiv_element_height("proj-tech");
    set_equiv_element_height("proj-title");
    set_equiv_element_height("proj_brief");
  } else {
    resetheight("proj-desc");
    resetheight("proj-role");
    resetheight("proj-tech");
    resetheight("proj-title");
    resetheight("proj_brief");
  }
});

mouseOnJobInfo();
mouseUpBtnJobInfo();

btneSubmit.addEventListener("mouseover", qbtnhover);
btneSubmit.addEventListener("mouseout", qbtnmouseout);
btneSubmit.addEventListener("mousedown", qbtnmousedown);
btneSubmit.addEventListener("mouseup", qbtnmouseup);
