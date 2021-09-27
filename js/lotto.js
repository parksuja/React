var 로또 = Array(45)
  .fill()
  .map(function (요소, 인덱스) {
    return 인덱스 + 1;
  });
console.log(로또);

var 로또추첨 = [];
while (로또.length > 0) {
  var 이동 = 로또.splice(Math.floor(Math.random() * 로또.length), 1)[0];
  로또추첨.push(이동);
}
console.log(로또추첨);
var 당첨숫자 = 로또추첨.slice(0, 6);
var 보너스 = 로또추첨[로또추첨.length - 1];
console.log("보너스 :" + 보너스);
console.log(
  "당첨숫자 :" +
    당첨숫자.sort(function (p, c) {
      return p - c;
    })
);

var 결과창 = document.getElementById("결과창");

function 공색칠하기(숫자, 결과창) {
  var 공 = document.createElement("div");
  공.textContent = 숫자;
  공.style.display = "inline-block";
  공.style.border = "1px solid black";
  공.style.borderRadius = "10px";
  공.style.width = "20px";
  공.style.height = "20px";
  공.style.textAlign = "center";
  공.style.fontSize = "15gopx";
  공.style.marginRight = "10px";
  var 배경색;
  if (숫자 <= 10) {
    배경색 = "red";
  } else if (숫자 <= 20) {
    배경색 = "orange";
  } else if (숫자 <= 30) {
    배경색 = "yellow";
  } else if (숫자 <= 40) {
    배경색 = "blue";
  } else {
    배경색 = "green";
  }
  공.style.background = 배경색;
  결과창.appendChild(공);
}

setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자[0], 결과창);
}, 1000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자[1], 결과창);
}, 2000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자[2], 결과창);
}, 3000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자[3], 결과창);
}, 4000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자[4], 결과창);
}, 5000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자[5], 결과창);
}, 6000);

setTimeout(function 비동기콜백함수() {
  var 보너스칸 = document.getElementsByClassName("보너스")[0]; //클래스는 여러개올수있어서 뒤에 몇번째인지 인덱스 붙여줍니다.
  공색칠하기(보너스, 보너스칸);
}, 7000);
