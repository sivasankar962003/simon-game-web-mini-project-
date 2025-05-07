var arr = ["green", "blue", "red", "yellow"];
var arr2 = [];``
var i = 0,
 j = 0;
 
$(document).keypress(function (event) {
  var keyName = event.key;
  if (keyName ==="a"|| keyName === "A") {
    gameStart();
    click();
  }
});
$(".mobile-button").on("click",function(){
  gameStart();
  click();
   
})



function gameStart() {
  $(document).unbind("keypress");
  $(".mobile-button").unbind("click");
  $(".mobile-button").css("display","none");
  $("#level-title").text(`Level ${i+1 }`);
   
  if (i === 20) {
    win();
  
  }
     else{

  var randomButton = arr[Math.floor(Math.random() * 4)];
  checkButton(randomButton);
  arr2[i] = randomButton;

  $("#" + randomButton).addClass("pressed");

  setTimeout(function () {
    $("#" + randomButton).removeClass("pressed");
  }, 150);
}
  j=0;
  i++;

}



function click(){
  $(".btn").on("click", function () {
   
  var buttonName = this.getAttribute("id");

  if (arr2[j] == buttonName && j < arr2.length) {
    checkButton(buttonName);
    this.classList.add("pressed");
    var temp = this;
    setTimeout(function () {
      temp.classList.remove("pressed");
    }, 100);
    if (j === arr2.length - 1) {
      setTimeout(function () {
        gameStart();
      }, 1000);
    }
    j++;
  }
  
  
  else {
  
    arr2 = [];
    i = 0;
    var sound = new Audio("wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    $(".btn").unbind("click");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 300);
    $("#level-title").text("Game Over,Press any key to Restart");
    $(".mobile-button").css("display","inline-block")
    $(".mobile-button").text("Replay");
    $(".mobile-button").on("click",function(){
      gameStart();
      click();
    });
   
      $(document).keypress(function (event) {
        gameStart();
        click();
      });
    
  }
});

}


function checkButton(buttonName) {
  if (buttonName === "green") {
    var sound = new Audio("green.mp3");

    sound.play();
  } else if (buttonName === "blue") {
    var sound = new Audio("blue.mp3");
    sound.play();
  } else if (buttonName === "red") {
    var sound = new Audio("red.mp3");
    sound.play();
  }
  if (buttonName === "yellow") {
    var sound = new Audio("yellow.mp3");
    sound.play();
  }
}


function win(){
  $("#level-title").text(" Win! , Press any key restart the game");
  arr2 = [];
  i = -1;

  var sound = new Audio("win.mp3");
  sound.play();
  $("body").addClass("game-win");
  setTimeout(function () {
    $("body").removeClass("game-win");
  }, 300);
  $(".btn").unbind("click");
  $(document).keypress(function (event) {
   gameStart();
   click();
  });
  
  $(".mobile-button").css("display","inline-block")
  $(".mobile-button").text("Restart")
  $(".mobile-button").on("click",function(){
   
    gameStart();
    click();
    $(".mobile-button").text("Start")
  });

}