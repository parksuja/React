var 스크린 = document.querySelector("#screen"); //계속 쓰이기에 변수로 저장합니다
var score = document.querySelector("#score");
var avg = document.querySelector("#avg");
var 끝시간;
var 시작시간;
var 기록 = [];
var 타임아웃;
var 평균값 = 0;

스크린.addEventListener("click", function () {
  if (스크린.classList.contains("waiting")) {
    //만약 스크린 클래스가 waiting이면
    스크린.classList.remove("waiting"); //스크린 클래스 waiting 지우고
    스크린.classList.add("ready"); //스크린 클래스 add를 추가합니다.
    스크린.textContent = "노란색시 클릭하세요";
    타임아웃 = setTimeout(function () {
      시작시간 = new Date(); //스코프 문제 발생 다른 함수에 있으므로 위로 var 올려줍니다.
      console.log("시작");
      스크린.click();
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (스크린.classList.contains("ready")) {
    //준비상태
    if (!시작시간) {
      clearTimeout(타임아웃);
      alert("노란색일때 누르세요!");
      스크린.classList.remove("ready");
      스크린.classList.add("waiting");
      스크린.textContent = "클릭해서 시작하세요.";
    } else {
      스크린.classList.remove("ready");
      스크린.classList.add("now");
      스크린.textContent = "클릭하세요";
    }
  } else if (스크린.classList.contains("now")) {
    //시작 상태
    끝시간 = new Date();
    기록.push(끝시간 - 시작시간);
    score.textContent = "기록:" + 기록;
    for (var i = 0; i < 기록.length; i++) {
      평균값 = 평균값 + 기록[i];
      console.log(평균값);
    }
    avg.textContent = "평균:" + 평균값 / 기록.length;
    평균값 = 0;
    시작시간 = null;
    끝시간 = null;
    스크린.classList.remove("now");
    스크린.classList.add("waiting");
    스크린.textContent = "클릭해서 시작하세요.";
  }
});
