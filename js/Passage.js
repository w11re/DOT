//http://www.speedtypingonline.com/typing-equations
var tempPassages = genPassages();
var passageLib = genLib();

//tasks to run upon page launch
$(document).ready(function() {
    $(".alert").hide();
    genParagraph();


    $(".resetBtn").click(function() {

        currPassage = 0;
        currIndex = 0;
        numErrors = 0;
        space = 0;
        errorLib = [];
        errorArray = [];
        seconds = 0;
        stopped = 0;

        $('h3').replaceWith("<h3>Reseted</h3>");
        $(".alert").hide();
        $('#userInput').val('');

        tempPassages = genPassages();
        passageLib = [];
        passageLib = genLib();

        genParagraph();
    });

    $(document).click(function(e) {
        if (seconds > 0) {
            $(".alert").show("fast");
        }
    });

});


function genParagraph() {

    document.getElementById("userInput").select();

    $(".passage").empty();

    $(".passage").append("<p>");
    $.each(tempPassages, function(index, value) {
        $(".passage").append(value + " ");
    });
    $(".passage").append("</p>");

}

function genPassages() {
    var passageList = [
        "2 I took a deep breath and listened to the old brag of my heart. I am, I am, I am.",
        "5 Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter. It’s round and wet and crowded. On the outside, babies, you’ve got a hundred years here. There’s only one rule that I know of, babies-\“God damn it, you’ve got to be kind.\"",
        "Pop the trunk. I open up, I sold my soul for a good price. Outta' sight, and my hoe got talent, right? Whole squad ran through that shit yikes.",
        "I remember, I remember when I lost my mind. There was something so pleasant about that place. Even your emotions have an echo in so much space. And when you're out there, without care, yeah I was out of touch. But it wasn't because I didn't know enough. I just knew too much. Does that make me crazy?",
        "Lorem ipsum dolor sit amet, in vix ferri menandri imperdiet, at vim solet accusam verterem. Simul inciderint theophrastus has ex, habeo soleat nostrum cum cu.",
    ];

    

    function passages(options) {
        function passage() {
            return passageList[randInt(passageList.length)];
        }

        function randInt(lessThan) {
            return Math.floor(Math.random() * lessThan);
        }

        if (typeof(options) === 'undefined') {
            return passage();
        }

        if (typeof(options) === 'number') {
            options = {
                exactly: options
            };
        }

        if (options.exactly) {
            options.min = options.exactly;
            options.max = options.exactly;
        }
        var total = options.min + randInt(options.max + 1 - options.min);
        var results = [];
        for (var i = 0;
            (i < total); i++) {
            results.push(passage());
        }
        if (options.join) {
            results = results.join(options.join);
        }
        return results;
    }

    passages.passageList = passageList;
    return passages(1);
}

var timer = 0;
var seconds = 0;
var t;
var stopped = 0;

function Timer(event) {
    $(".resetBtn").click(function() {
        clearInterval(t);
        seconds = 0;
        timer = 0;
    });

    if (timer == 0 && event.which != 13 && stopped == 0) {
        $('h3').replaceWith("<h3>Time elapsed: " + seconds / 10 + " seconds.</h3>");
        timer = 1;
        t = setInterval(function() {
            startTime()
        }, 100);
        timer = 1;
    }

}

function startTime() {
    seconds = seconds + 1;
    $('h3').replaceWith("<h3>Time elapsed: " + seconds / 10 + " seconds.</h3>");
}

function genLib() {
    var charArray = [];
    for (var i = 0; i < 1; i++) { //@ change 5 to #Passages
        charArray[i] = tempPassages[i].split('');
    }
    return charArray;
}

function CallBoth(event) {
    Errors(event);
    Timer(event);
}

var currPassage = 0; //1st index of passageLib to locate a Passage
var currIndex = 0; //2nd idnex of passageLib to locate the character index
var numErrors = 0;
var space = 0; //declares if the spacebar has to be the next keypress
var errorLib = []; //array that stores the errors from each Passage
var errorArray = []; //array that stores the error at the specific index
var atEnd = 0; //increases after the end of the text is reached
var typedEntries = 0; //the number of typed characters (to be used to calculate WPM)


function Errors(event) {
    if (stopped == 1) {
        return;
    }
    if (atEnd > 0) {
        atEnd++;
        return;
    }


    if (space == 1) {
        if (event.which == 32) {
            space = 0;
            return;
        }
    }

    if (String.fromCharCode(event.which) == passageLib[currPassage][currIndex]) {
        errorArray[currIndex] = 0;
        errorLib[currPassage] = errorArray;
        currIndex++;
        typedEntries++;

        if (currPassage == 0 && currIndex == passageLib[currPassage].length) {
            StopTime();
            return;
        }
    } else if (String.fromCharCode(event.which) != passageLib[currPassage][currIndex]) {
        errorArray[currIndex] = 1;
        errorLib[currPassage] = errorArray;
        if (space == 0) {
            currIndex++;
        }
        numErrors++;
        typedEntries++;
    }

    if (currIndex == passageLib[currPassage].length) {
        currPassage++;
        currIndex = 0;
        space = 1;
    }
}

//separate function to handle backspace events
function BackSpace(event) {
    if (event.which == 8) {
        if (currIndex == 0 && currPassage == 0) {
            return;
        }
        if (atEnd > 0) {
            atEnd--;
            return;
        }

        if (space == 1 && currIndex == 0) {
            currPassage--;
            currIndex = passageLib[currPassage].length;
            space = 0;

        } else if (space == 0 && currIndex == 0) {
            space = 1;
            return;
        }

        currIndex--;

        if (errorLib[currPassage][currIndex] == 1) {
            numErrors--;
        }
    }
}

//'stops' the program
function StopTime() {
    stopped = 1;
    clearInterval(t);
    var netWPM = calcNetWPM();
    $('h3').replaceWith("<h3>Your typing speed of " + netWPM + " was taken in " + seconds / 10 + " seconds");
    $('h3').css('color', 'green');
    seconds = 0;
    timer = 0;
}

function calcNetWPM() {
    var grossWPM = (typedEntries / 5) / (seconds / 10 / 60);
    var netWPM = grossWPM - (numErrors / seconds / 10 / 60);
    return Math.round(netWPM * 100) / 100
}
