function getsCompChoice() {
  $('comp').text(compChoice)
  var choices = ['rock', 'paper', 'scissors'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
$('.comp').hide()
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
      $('#verbal').append('You Win!');
      scoreBoard();
      break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
      $('#verbal').append('You Lost!');
      break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
      $('#verbal').append('Draw, Play Again!');
      break;
    }
    $('#compChoice').text(computer);
    $('#userChoice').append(userChoice);

  });
});
//set score board for wins losses draws
//Not sure this is working but I think its the correct logic
function scoreBoard() {
  var userScore = [];
$('#userScore').map(userScore, function( n ) {
  return n + 1; //add win to board
});
}