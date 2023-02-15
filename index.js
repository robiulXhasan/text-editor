// Making text Bold
let boldClick = 0;
document.getElementById("text-bold").addEventListener("click", function () {
  boldClick++;
  if (boldClick % 2 == 0) {
    document.getElementById("text-area").style.fontWeight = "normal";
  } else {
    document.getElementById("text-area").style.fontWeight = "bold";
  }
});

// making text Italic
let italicClick = 0;
document.getElementById("text-italic").addEventListener("click", function () {
  italicClick++;
  if (italicClick % 2 == 0) {
    document.getElementById("text-area").style.fontStyle = "normal";
  } else {
    document.getElementById("text-area").style.fontStyle = "italic";
  }
});

// making text Underline
let underlineClick = 0;
document
  .getElementById("text-underline")
  .addEventListener("click", function () {
    underlineClick++;
    if (underlineClick % 2 == 0) {
      document.getElementById("text-area").style.textDecoration = "none";
    } else {
      document.getElementById("text-area").style.textDecoration = "underline";
    }
  });
//  text align left

document.getElementById("text-left").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "left";
});

//  text align center
document.getElementById("text-center").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "center";
});

//  text align right
document.getElementById("text-right").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "right";
});
//  text align justify
document.getElementById("text-justify").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "justify";
});

// font size modification
document.getElementById("font-size").addEventListener("keyup", function () {
  const fontSize = parseInt(document.getElementById("font-size").value);
  console.log(typeof fontSize);

  document.getElementById("text-area").style.fontSize = `${fontSize}px`;
});

//text uppercase lowercase
let textTransform = 0;
document
  .getElementById("text-transform")
  .addEventListener("click", function () {
    textTransform++;
    if (textTransform % 2 == 0) {
      document.getElementById("text-area").style.textTransform = "lowercase";
    } else {
      document.getElementById("text-area").style.textTransform = "uppercase";
    }
  });

//text capitalize
document
  .getElementById("text-capitalize")
  .addEventListener("click", function () {
    document.getElementById("text-area").style.textTransform = "capitalize";
  });

//text color
document.getElementById("text-color").addEventListener("click", function () {
  console.log("mousemove");
  const textColor = document.getElementById("text-color").value;
  console.log(textColor);
  document.getElementById("text-area").style.color = textColor;
});
