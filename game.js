$(document).ready(function(){
    var level = 0;
    var started = false;
    var userCLickedPattern = [];

    var buttonColours = ["red", "blue", "green", "yellow"];

    var gamePattern = [];

    //Starting the game
    $(document).keypress(function(keyPressed){
        let key_pressed = keyPressed.key.toLowerCase();
        //checks that theres values inside the key_pressed variable.   console.log(key_pressed);
        if (key_pressed === "a" && level === 0)
        {
            started = true;
            $("#level-title").html("Level 0");
            nextSequence();
        };

    })


    function nextSequence()
    {
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        //1. Use jQuery to select the button with the same id as the randomChosenColour
        //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

        play_sound(randomChosenColour);

        level++;

        $("#level-title").html("Level " + level);
    }  

    //detect when any of the buttons have been clicked.
    $(".btn").click(function()
    {
        userChosenColour = this.id; 
        
        //Just to check that the id is being selected         console.log(userChosenColour);
        userCLickedPattern.push(userChosenColour);
        //checks what's inside the array console.log(userCLickedPattern);
        play_sound(userChosenColour);

        animate_press(userChosenColour);
    });

    function play_sound(name)
    {
        //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animate_press(currentColour)//takes in a string parameter
    {
        $("#" + currentColour).addClass("pressed");

        setTimeout(() => {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
    }

    checkAnswer(currentLevel)
    {
        
    }
});


