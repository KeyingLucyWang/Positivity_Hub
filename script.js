{/* <button onclick="one()">1</button>
<button onclick="two()">2</button>
<button onclick="four()">4</button> */}

<scripts>

var elements = document.getElementsByClassName("image-column");

var i;

for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }

// function one() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.flex = "100%";
//   }
// }

// Two images side by side
// function two() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.flex = "50%";
//   }
// }

// Four images side by side
// function four() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.flex = "25%";
//   }
// }
</scripts>