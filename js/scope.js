var x = "global";

function ex() {
  x = "local";
  x = "change";
}

ex();
window.alert(x);

var name = "sujin";

function outer() {
  console.log("외부", name);
  function inner() {
    var enemy = "susu";
    console.log("내부", name);
  }
  inner();
}

outer();

var name = "sujin";
function log() {
  console.log(name);
}

function wrapper() {
  var name = "susu";
  log();
}
wrapper();

for (var i = 0; i < 100; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

function factory_movie(title) {
  return {
    get_title: function () {
      return title;
    },
    set_title: function (_title) {
      title = _title;
    },
  };
}
var ghost = factory_movie("Ghost in the shell");
var matrix = factory_movie("Matrix");

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title("공각기동대");

alert(ghost.get_title());
alert(matrix.get_title());

var obj = {
  q: 1,

  w: 2,

  e: 3,

  r: 4,
};

for (var lol in obj) {
  console.log(lol);

  console.log(obj[lol]);
}
