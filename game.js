

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=0;

$("body").keydown(function(event){
    if(started===0){
    $("h1").text("Level "+level);
     nextSequence();
     started=1;
    }
    

 });
 
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("level "+level);


    var randomNumber=Math.floor(Math.random()*3);
    //console.log(randomNumber);
     var randomChosenColour=buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);

     
     $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     
    playsound(randomChosenColour);
    
}


$(".btn").click(function(){

    var userChosenColour=this.id;
   
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel)
{
   if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
     {
        if(gamePattern.length===userClickedPattern.length)
        {
            
            setTimeout( nextSequence(), 1000);
        
        
          
        }
     }
     else{
        playsound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
     }

}
    

function playsound(e)
{
    var audio=new Audio("sounds/"+e+".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    

    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);

   
}

function startOver(){
    level=0;
    gamePattern=[];
    started=0;


}


 

    
        
        
  

  


