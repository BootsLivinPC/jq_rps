function getsCompChoice() {
  $('comp').text(compChoice)
  var choices = ['rock', 'paper', 'scissors'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// $('.comp').hide()
// jq function that listens to user click on id choice
 $(document).ready( function() {
  $('.choice').on('click', function() {
    var userChoice = this;
    // var compChoice create random choice
    var computer = getsCompChoice()

    switch(userChoice['id'] + computer) {
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
      $('#verbal').text('You Win!');
      userWins();
      break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
      $('#verbal').text('You Lost!');
      compWins();
      break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
      $('#verbal').text('Draw, Play Again!');
      gameDraw();
      break;
    }
    $('#comp').text(computer);
    $('#user').text(userChoice['id']);

  });
});
//set score board for wins losses draws
//Not sure this is working but I think its the correct logic
function userWins() {
  var usersScore = [];
  $('#userScore').text(usersScore[0]++) ;
  console.log(usersScore)//add win to user score
  
};
  
function compWins() {
  var compsScore = [];
$('#compScore').text(compsScore[0]++);
  console.log(compScore) //add win to comp score
};

function gameDraw() {
  var drawScore = [];
  $('#drawScore').text(drawScore[0]++);
  console.log(drawScore); //add win to draw score
};

  
 
