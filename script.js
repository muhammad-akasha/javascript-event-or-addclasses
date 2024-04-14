var img = document.querySelector("img");
var btn = document.querySelector(".btn");
var btn2 = document.querySelector(".btn2");
var images = ["./2.jpg", "./1.jpg", "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg"];
var indexOfImg = 0;

// Add the "large" class and set transition properties in CSS
img.classList.add("large");
img.style.transition = "transform ease-in-out 1s";

function next() {
  indexOfImg++;
  if (indexOfImg >= images.length) {
    indexOfImg = 0;
  }
  setTimeout(function() {
    img.src = images[indexOfImg];
  }, 1000);
}

function prev() {
  indexOfImg--;
  if (indexOfImg < 0) {
    indexOfImg = images.length - 1;
  }
  setTimeout(function() {
    img.src = images[indexOfImg];
  }, 1000);
}

btn.addEventListener("click", next);
btn2.addEventListener("click", prev);

// Auto slide every 3 seconds
var autoSlide = setInterval(next, 3000);

// Stop auto sliding when mouse is over the image
img.addEventListener("mouseover", function() {
  clearInterval(autoSlide);
});

// Resume auto sliding when mouse leaves the image
img.addEventListener("mouseout", function() {
  autoSlide = setInterval(next, 3000);
});

let changeColor;

function change() {
  if (!changeColor) {
    changeColor = setInterval(flashText, 1000);
  }
}

function flashText() {
  let teXt = document.getElementById("hello"); // Fixed variable declaration
  // teXt.className = teXt.className === "go" ? "stop" : "go";
  if (teXt.className === "go") {
    teXt.className = "stop";
  } else if (teXt.className === "stop") {
    teXt.className = "go-to";
  } else if (teXt.className === "go-to") {
    teXt.className = "to-go";
  } else {
    teXt.className = "go";
  }
}

function stop() {
  clearInterval(changeColor);
  changeColor = null;
}

// document.getElementById("start").addEventListener("click", change);
// document.getElementById("stop").addEventListener("click", stop);

setInterval(myTimer, 1000);
function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString({
    hour12: true,
  });
}
