const 가로 = 4;
const 세로 = 3;
const 카드색 = [
  "red",
  "yellow",
  "orange",
  "pink",
  "black",
  "green",
  "red",
  "yellow",
  "orange",
  "pink",
  "black",
  "green",
];
let 색깔후보 = 카드색.slice();
let 색 = [];
let 클릭플래그 = true;
let 클릭카드 = [];
let 완성카드 = [];
var 시작시간;
function 셔플() {
  for (let i = 0; 카드색.length > 0; i++) {
    색 = 색.concat(카드색.splice(Math.floor(Math.random() * 카드색.length), 1));
  }
}
console.log(색);

function 카드세팅(가로, 세로) {
  클릭플래그 = false;
  console.log(클릭플래그);
  for (let i = 0; i < 가로 * 세로; i++) {
    const card = document.createElement("div");
    card.className = "card";
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.style.backgroundColor = 색[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    // eslint-disable-next-line no-loop-func
    card.addEventListener("click", function () {
      if (클릭플래그 && !완성카드.includes(card)) {
        card.classList.toggle("flipped");
        console.log(클릭카드);
        클릭카드.push(card);
        console.log(클릭카드);

        if (클릭카드.length === 2) {
          if (
            (클릭카드[0].querySelector(",card-back"),
            클릭카드[0].style.backgroundColor ===
              클릭카드[1].querySelector("card-back"),
            클릭카드[1].style.backgroundColor)
          )
            완성카드.push(클릭카드[0]);
          완성카드.push(클릭카드[1]);
          클릭카드 = [];
          if (완성카드.length === 12) {
            var 끝시간 = new Date();
            alert("성공" + (끝시간 - 시작시간) / 1000 + " 초");
            document.querySelector("#wrapper").innerHTML = "";
            색깔후보 = 색.slice;
            색 = [];
            완성카드 = [];
            시작시간;
            셔플();
            카드세팅(가로, 세로);
          }
        } else {
          클릭플래그 = false;
          setTimeout(function () {
            // 클릭카드[0].classList.remove("flipped");
            // 클릭카드[1].classList.remove("flipped");
            클릭플래그 = true;
            클릭카드 = [];
          }, 1000);
        }
        // flipped라는 클래스가 없으면 넣고 있으면 뺀다.
      }
    });
    document.querySelector("#wrapper").appendChild(card);
  }
  document.querySelectorAll(".card").forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("flipped");
    }, 1000 + index * 100);
  });
  setTimeout(function () {
    document.querySelectorAll(".card").forEach(function (card, index) {
      card.classList.remove("flipped");
    });
    클릭플래그 = true;
  }, 5000);
}
셔플();
카드세팅(가로, 세로);
