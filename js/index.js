const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Task 1: Create selectors to point your data into elements
//  Create selectors by using any of the DOM element's methods
//  Note that IDs have been used on all images. Use the IDs to update src path content

//  Task 2: Update the HTML with the JSON data
//  Remember, NO direct updating of the HTML source is allowed.
//  Using your selectors, update the content to match the example file.
//  Remember to update the src attributes on images

//? ----------------
//? ----- NAV ------
//? ----------------
const navLinks = document.querySelectorAll("nav a");
const navImg = document.getElementById("logo-img");

navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];
navImg.setAttribute("src", siteContent["nav"]["img-src"]);

//? ----------------
//? ----- CTA ------
//? ----------------
var ctaH1 = document.querySelector(".cta-text h1");
var ctaBtn = document.querySelector(".cta-text button");
let ctaImg = document.getElementById("cta-img");

ctaH1.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//? -------------------------
//? ----- Main Content ------
//? -------------------------
var featH4 = document.querySelector(".top-content div:nth-child(1) h4");
var featTxt = document.querySelector(".top-content div:nth-child(1) p");
var aboutH4 = document.querySelector(".top-content div:nth-child(2) h4");
var aboutTxt = document.querySelector(".top-content div:nth-child(2) p");
var middleImg = document.getElementById("middle-img");
var servicesH4 = document.querySelector(".bottom-content div:nth-child(1) h4");
var servicesTxt = document.querySelector(".bottom-content div:nth-child(1) p");
var productH4 = document.querySelector(".bottom-content div:nth-child(2) h4"); //!   product-h4
var productTxt = document.querySelector(".bottom-content div:nth-child(2) p"); //!   product-content
var visionH4 = document.querySelector(".bottom-content div:nth-child(3) h4"); //?    vision-h4
var visionTxt = document.querySelector(".bottom-content div:nth-child(3) p"); //?    vision-content

featH4.textContent = siteContent["main-content"]["features-h4"];
featTxt.textContent = siteContent["main-content"]["features-content"];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutTxt.textContent = siteContent["main-content"]["about-content"];
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesTxt.textContent = siteContent["main-content"]["services-content"];
productH4.textContent = siteContent["main-content"]["product-h4"];
productTxt.textContent = siteContent["main-content"]["product-content"];
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionTxt.textContent = siteContent["main-content"]["vision-content"];

//? -------------------------
//? ------- Contact ---------
//? -------------------------
var contactH4 = document.querySelector(".contact h4");
var contactAdd = document.querySelectorAll(".contact p");

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactAdd[0].textContent = siteContent["contact"]["address"];
contactAdd[1].textContent = siteContent["contact"]["phone"];
contactAdd[2].textContent = siteContent["contact"]["email"];

//? -------------------------
//? -------- Footer ---------
//? -------------------------
var footerP = document.querySelector("footer p");

footerP.textContent = siteContent["footer"]["copyright"];

//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -

// let navkid =
//   document.body.firstElementChild.firstElementChild.firstElementChild.children;

// const navKidArr = Array.from(navkid);

// navKidArr.forEach((link) => (link.style.color = "green"));
// Task 3: Add new content
//  Change the color of the navigation text to be green.
//  Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
//? Change Color
navLinks.forEach((link) => (link.style.color = "green"));

//? Append
var appendEle = document.querySelector(".contact");
var childApp = document.createElement("DIV");
childApp.innerHTML = "joey@lycos.com";
appendEle.appendChild(childApp);

//? Prepend

var childPrep = document.createElement("DIV");
childPrep.innerHTML = "Updated Phone Number";
contactAdd[2].appendChild(childPrep);

//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
//! - - - - - - -- - - - - - -- - -- - - - - - - -- - - - - - -
