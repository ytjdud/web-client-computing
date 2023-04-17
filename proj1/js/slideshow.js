var slides = document.querySelectorAll("#slideContainer > img");
var slideContainer = document.querySelector("#slideContainer");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

// showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

no1.onclick = no1Slide;
no2.onclick = no2Slide;
no3.onclick = no3Slide;
no4.onclick = no4Slide;
no5.onclick = no5Slide;

function no1Slide(){
  slideContainer.style.transform = `translateX(0px)`;
  current=0;
}
function no2Slide(){
  slideContainer.style.transform = `translateX(-1200px)`;
  current=1;
}
function no3Slide(){
  slideContainer.style.transform = "translateX(-2400px)";
  current = 2;
}
function no4Slide(){
  slideContainer.style.transform = "translateX(-3600px)";
  current = 3;
}
function no5Slide(){
  slideContainer.style.transform = "translateX(-4800px)";
  current = 4;
}

// function showSlides(n) {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[n].style.display = "block";
// }

function prevSlide() {
  if (current > 0) current -= 1;
  else
    current = slides.length - 1;
    showSlides(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else
    current = 0;
    showSlides(current);  
}

function newRegister() {
  var newItem = document.createElement("li");  // 요소 노드 추가
  var subject = document.querySelector("#subject");  // 폼의 텍스트 필드
  var newText = document.createTextNode(subject.value);  // 텍스트 필드의 값을 텍스트 노드로 만들기
  newItem.appendChild(newText);   // 텍스트 노드를 요소 노드의 자식 노드로 추가

  var itemList = document.querySelector("#itemList");  // 웹 문서에서 부모 노드 가져오기 
  itemList.appendChild(newItem);  // 새로 만든 요소 노드를 부모 노드에 추가
  newItem.onclick = function (newItem) {
    const parentDiv = document.querySelector("#itemList");

    parentDiv.addEventListener("click", (e) => {
      e.target.remove();
    });
  }

  subject.value = "";
}
function hvr(){
  const ball = document.getElementById("ball");
  const span = document.querySelector(".box > span");

  const duration = 900; // change this value to change the animation duration
  const delay1 = -1 * duration;
  const delay2 = duration;
  const delay3 = duration + (2 * duration) / 2;
  const delay4 = duration * 2 + (2 * duration) / 3;
  const delay5 = duration * 2 + (2 * duration) / 3 + (2 * duration) / 4;

  ball.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-160px)" }
    ],
    {
      duration: duration,
      easing: "cubic-bezier(.17,.76,.58,1)",
      delay: delay1,
      iterations: 2,
      direction: "alternate"
    }
  );

  ball.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-110px)" }
    ],
    {
      duration: duration / 2,
      easing: "cubic-bezier(.17,.76,.58,1)",
      delay: delay2,
      iterations: 2,
      direction: "alternate"
    }
  );

  ball.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-60px)" }
    ],
    {
      duration: duration / 3,
      easing: "cubic-bezier(.17,.76,.58,1)",
      delay: delay3,
      iterations: 2,
      direction: "alternate"
    }
  );

  ball.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-30px)" }
    ],
    {
      duration: duration / 4,
      easing: "cubic-bezier(.17,.76,.58,1)",
      delay: delay4,
      iterations: 2,
      direction: "alternate"
    }
  );

  ball.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-10px)" }
    ],
    {
      duration: duration / 5,
      easing: "cubic-bezier(.17,.76,.58,1)",
      delay: delay5,
      iterations: 2,
      direction: "alternate"
    }
  );

  span.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(470px)" }],
    {
      duration: duration * 2 + (2 * duration) / 3 + (2 * duration) / 4 + (2 * duration) / 5,
      easing: "linear",
      fill: "forwards"
    }
  );
}

images.onmouseover = function() {
  var images = document.querySelector('.images');
  images.style.transform="translateX(-1840px)";
}  
images.onmouseout = function() {
  var images = document.querySelector('.images');
  images.style.transform="translateX(-920px)";
}  


