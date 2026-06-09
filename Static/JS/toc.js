// ----------------------
// Background Image
// ----------------------
// 1. Wrap your old logic in a function

function pick_bg_image() {
let backgrounds = [];
const page = document.body.dataset.page;
if (page === "bikes") {
  backgrounds = [
    '../Images/roman1.jpg',
    '../Images/ren6.jpg'
  ]
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
} else if (page === "welcome") {
  backgrounds = [
    "../Images/ren2.jpg",
    "../Images/ren5.jpg"
  ]
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
} else if (page === "salesforce") {
  backgrounds = [
    "../Images/ren3.jpg",
    "../Images/ren1.jpg"
  ]
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
} else if (page === "aipowered") {
  backgrounds = [
    "../Images/ren7.jpg",
    "../Images/Granada.jpg"
  ]
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
} else if (page === "howitworks") {
  backgrounds = [
    "../Images/greek1.jpg",
    "../Images/ren4.jpg"
  ]
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  } else {
    return null;
}
}

// 2. Call the function to get the chosen image
const bgImage = pick_bg_image();

if (bgImage) {
//JavaScript filepath for both local testing and web (format: Static/Images/filename.jpg)
const bgImage_js_step1=bgImage.slice(2)
const bgImage_js_final='Static'+bgImage_js_step1

// 3. Preload the image (this starts downloading immediately)
const preload = new Image();
preload.src = bgImage_js_final;
// 4. When the image finishes downloading, apply it to CSS
preload.onload = () => {
  document.body.style.setProperty('--bg-image', `url(${bgImage})`);
  document.body.classList.add('bg-loaded');
};
} else {
  document.body.classList.add('bg-loaded');
}

// ----------------------
// TOC Smooth Scroll - Bikes
// ----------------------
document.querySelectorAll('.bike-toc a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        const contentBox = document.querySelector('.bike-content');

        if (target && contentBox) {
            const targetTop =
                target.getBoundingClientRect().top -
                contentBox.getBoundingClientRect().top +
                contentBox.scrollTop;

            contentBox.scrollTo({
                top: targetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// ----------------------
// TOC Smooth Scroll - Salesforce
// ----------------------
document.querySelectorAll('.Salesforce-toc a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        const contentBox = document.querySelector('.salesforce-content');

        if (target && contentBox) {
            const targetTop =
                target.getBoundingClientRect().top -
                contentBox.getBoundingClientRect().top +
                contentBox.scrollTop;

            contentBox.scrollTo({
                top: targetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// ----------------------
// Hamburger Menu
// ----------------------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
// ----------------------
// Content Height (below toolbar)
// ----------------------
const navHeight = document.querySelector('nav').offsetHeight;
const root = document.documentElement;
const space = parseFloat(
  getComputedStyle(root).getPropertyValue('--space')
);
document.querySelector('.page-content').style.height =
  `calc(100vh - ${navHeight}px - ${space}px)`;

// ----------------------
// Background Image
// ----------------------
/*
const page = document.body.dataset.page;
let backgrounds = [];
if (page === "bikes") {
  backgrounds = [
    '../Images/roman1.jpg',
    '../Images/ren6.jpg'
  ]
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.documentElement.style.setProperty("--bg-bikes", `url(${chosen})`);
} else if (page === "welcome") {
  backgrounds = [
    "../Images/ren2.jpg",
    "../Images/ren5.jpg"
  ]
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.documentElement.style.setProperty("--bg-welcome", `url(${chosen})`);
} else if (page === "salesforce") {
  backgrounds = [
    "../Images/ren3.jpg",
    "../Images/ren1.jpg"
  ]
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.documentElement.style.setProperty("--bg-salesforce", `url(${chosen})`);
} else if (page === "aipowered") {
  backgrounds = [
    "../Images/ren7.jpg",
    "../Images/ren3.jpg"
  ]
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.documentElement.style.setProperty("--bg-aipowered", `url(${chosen})`);
} else if (page === "howitworks") {
  backgrounds = [
    "../Images/greek1.jpg",
    "../Images/ren4.jpg"
  ]
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.documentElement.style.setProperty("--bg-howitworks", `url(${chosen})`);
}*/