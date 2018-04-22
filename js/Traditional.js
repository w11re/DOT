//var firebaseRef = firebase.database();
var tempWords = genWords();
var wordLib = genLib();

//tasks to run upon page launch
$(document).ready(function () {
  $(".alert").hide();
  genParagraph();


  $(".resetBtn").click(function () {

    currWord = 0;
    currIndex = 0;
    numErrors = 0;
    space = 0;
    errorLib = [];
    errorArray = [];
    seconds = 0;
    stopped = 0;

    $('h5').replaceWith("<h5>Reseted</h5>");
    $(".alert").hide();
    $('#userInput').val('');

    tempWords = genWords();
    wordLib = [];
    wordLib = genLib();

    genParagraph();
  });

  $(document).click(function (e) {
    if (seconds > 0) {
      $(".alert").show("fast");
    }
  });

});


function genParagraph() {

  document.getElementById("userInput").select();

  $(".passage").empty();

  $(".passage").append("<p>");
  $.each(tempWords, function (index, value) {
    $(".passage").append(value + " ");
  });
  $(".passage").append("</p>");

}

function genWords() {
  var wordList = ["the","of","to","and","a","in","is","it","you","that","he","was",
  "for","on","are","with","as","I","his","they","be","at","one","have","this","from",
  "or","had","by","hot","word","but","what","some","we","can","out","other","were",
  "all","there","when","up","use","your","how","said","an","each","she","which","do",
  "their","time","if","will","way","about","many","then","them","write","would","like",
  "so","these","her","long","make","thing","see","him","two","has","look","more","day",
  "could","go","come","did","number","sound","no","most","people","my","over","know",
  "water","than","call","first","who","may","down","side","been","now","find","any",
  "new","work","part","take","get","place","made","live","where","after","back",
  "little","only","round","man","year","came","show","every","good","me","give",
  "our","under","name","very","through","just","form","sentence","great","think",
  "say","help","low","line","differ","turn","cause","much","mean","before","move",
  "right","boy","old","too","same","tell","does","set","three","want","air","well",
  "also","play","small","end","put","home","read","hand","port","large","spell","add",
  "even","land","here","must","big","high","such","follow","act","why","ask","men",
  "change","went","light","kind","off","need","house","picture","try","us","again",
  "animal","point","mother","world","near","build","self","earth","father","head",
  "stand","own","page","should","country","found","answer","school","grow","study",
  "still","learn","plant","cover","food","sun","four","between","state","keep","eye",
  "never","last","let","thought","city","tree","cross","farm","hard","start","might",
  "story","saw","far","sea","draw","left","late","run","don't","while","press","close",
  "night","real","life","few","north","open","seem","together","next","white","children",
  "begin","got","walk","example","ease","paper","group","always","music","those","both",
  "mark","often","letter","until","mile","river","car","feet","care","second","book",
  "carry","took","science","eat","room","friend","began","idea","fish","mountain",
  "stop","once","base","hear","horse","cut","sure","watch","color","face","wood",
  "main","enough","plain","girl","usual","young","ready","above","ever","red","list",
  "though","feel","talk","bird","soon","body","dog","family","direct","pose","leave",
  "song","measure","door","product","black","short","numeral","class","wind","question",
  "happen","complete","ship","area","half","rock","order","fire","south","problem","piece",
  "told","knew","pass","since","top","whole","king","space","heard","best","hour","better",
  "true","during","hundred","five","remember","step","early","hold","west","ground",
  "interest","reach","fast","verb","sing","listen","six","table","travel","less",
  "morning","ten","simple","several","vowel","toward","war","lay","against","pattern",
  "slow","center","love","person","money","serve","appear","road","map","rain","rule",
  "govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly",
  "fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun",
  "field","rest","correct","able","pound","done","beauty","drive","stood","contain",
  "front","teach","week","final","gave","green","oh","quick","develop","ocean","warm",
  "free","minute","strong","special","mind","behind","clear","tail","produce","fact",
  "street","inch","multiply","nothing","course","stay","wheel","full","force","blue",
  "object","decide","surface","deep","moon","island","foot","system","busy","test",
  "record","boat","common","gold","possible","plane","stead","dry","wonder","laugh",
  "thousand","ago","ran","check","game","shape","equate","hot","miss","brought",
  "heat","snow","tire","bring","yes","distant","fill","east","paint","language",
  "among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance",
  "engine","position","arm","wide","sail","material","size","vary","settle","speak",
  "weight","general","ice","matter","circle","pair","include","divide","syllable",
  "felt","perhaps","pick","sudden","count","square","reason","length","represent",
  "art","subject","region","energy","hunt","probable","bed","brother","egg","ride",
  "cell","believe","fraction","forest","sit","race","window","store","summer","train",
  "sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board",
  "joy","winter","sat","written","wild","instrument","kept","glass","grass","cow",
  "job","edge","sign","visit","past","soft","fun","bright","gas","weather","month",
  "million","bear","finish","happy","hope","flower","clothe","strange","gone","jump",
  "baby","eight","village","meet","root","buy","raise","solve","metal","whether",
  "push","seven","paragraph","third","shall","held","hair","describe","cook","floor",
  "either","result","burn","hill","safe","cat","century","consider","type","law",
  "bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature",
  "finger","industry","value","fight","lie","beat","excite","natural","view","sense",
  "ear","else","quite","broke","case","middle","kill","son","lake","moment","scale",
  "loud","spring","observe","child","straight","consonant","nation","dictionary",
  "milk","speed","method","organ","pay","age","section","dress","cloud","surprise",
  "quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom",
  "key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade",
  "melody","trip","office","receive","row","mouth","exact","symbol","die","least",
  "trouble","shout","except","wrote","seed","tone","join","suggest","clean","break",
  "lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team",
  "wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit",
  "flow","fair","bank","collect","save","control","decimal","gentle","woman","captain",
  "practice","separate","difficult","doctor","please","protect","noon","whose","locate",
  "ring","character","insect","caught","period","indicate","radio","spoke","atom",
  "human","history","effect","electric","expect","crop","modern","element","hit",
  "student","corner","party","supply","bone","rail","imagine","provide","agree",
  "thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process",
  "operate","guess","necessary","sharp","wing","create","neighbor","wash","bat",
  "rather","crowd","corn","compare","poem","string","bell","depend","meat","rub",
  "tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry",
  "chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow",
  "gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue",
  "block","chart","hat","sell","success","company","subtract","event","particular","deal",
  "swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent",
  "cotton","born","determine","quart","nine","truck","noise","level","chance","gather",
  "shop","stretch","throw","shine","property","column","molecule","select","wrong","gray",
  "repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent",
  "oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver",
  "thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel",
  "discuss","forward","similar","guide","experience","score","apple","bought","led","pitch",
  "coat","mass","card","band","rope","slip","win","dream","evening","condition","feed",
  "tool","total","basic","smell","valley","nor","double","seat","arrive","master","track",
  "parent","shore","division","sheet","substance","favor","connect","post","spend","chord",
  "fat","glad","original","share","station","dad","bread","charge","proper","bar","offer",
  "segment","slave","duck","instant","market","degree","populate","chick","dear","enemy",
  "reply","drink","occur","support","speech","nature","range","steam","motion","path",
  "liquid","log","meant","quotient","teeth","shell","neck"];
  
  function words(options) {
    function word() {
      return wordList[randInt(wordList.length)];
    }

    function randInt(lessThan) {
      return Math.floor(Math.random() * lessThan);
    }

    if (typeof (options) === 'undefined') {
      return word();
    }

    if (typeof (options) === 'number') {
      options = { exactly: options };
    }

    if (options.exactly) {
      options.min = options.exactly;
      options.max = options.exactly;
    }
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    for (var i = 0; (i < total); i++) {
      results.push(word());
    }
    if (options.join) {
      results = results.join(options.join);
    }
    return results;
  }

  words.wordList = wordList;
  return words(25);
}

var timer = 0;
var seconds = 0;
var t;
var stopped = 0;

function Timer(event) {
  $(".resetBtn").click(function () {
    clearInterval(t);
    seconds = 0;
    timer = 0;
  });

  if (timer == 0 && event.which != 13 && stopped == 0) {
    $('h5').replaceWith("<h5>Time elapsed: " + seconds / 10 + " seconds.</h5>");
    timer = 1;
    t = setInterval(function () { startTime() }, 100);
    timer = 1;
  }

}

function startTime() {
  seconds = seconds + 1;
  $('h5').replaceWith("<h5>Time elapsed: " + seconds / 10 + " seconds.</h5>");
}

function genLib() {
  var charArray = [];
  for (var i = 0; i < 25; i++) { //@ change 5 to #words
    charArray[i] = tempWords[i].split('');
  }
  return charArray;
}

function CallBoth(event) {
  Errors(event);
  Timer(event);
}

var currWord = 0; //1st index of wordLib to locate a word
var currIndex = 0; //2nd idnex of wordLib to locate the character index
var numErrors = 0;
var space = 0; //declares if the spacebar has to be the next keypress
var errorLib = []; //array that stores the errors from each word
var errorArray = []; //array that stores the error at the specific index
var atEnd = 0; //increases after the end of the text is reached
var typedEntries = 0;//the number of typed characters (to be used to calculate WPM)


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

  if (String.fromCharCode(event.which) == wordLib[currWord][currIndex]) {
    errorArray[currIndex] = 0;
    errorLib[currWord] = errorArray;
    currIndex++;
    typedEntries++;

    if (currWord == 24 && currIndex == wordLib[currWord].length) {
      StopTime();
      return;
    }
  } else if (String.fromCharCode(event.which) != wordLib[currWord][currIndex]) {
    errorArray[currIndex] = 1;
    errorLib[currWord] = errorArray;
    if (space == 0) {
      currIndex++;
    }
    numErrors++;
    typedEntries++;
  }

  if (currIndex == wordLib[currWord].length) {
    currWord++;
    currIndex = 0;
    space = 1;
  }
}

//separate function to handle backspace events
function BackSpace(event) {
  if (event.which == 8) {
    if (currIndex == 0 && currWord == 0) {
      return;
    }
    if (atEnd > 0) {
      atEnd--;
      return;
    }

    if (space == 1 && currIndex == 0) {
      currWord--;
      currIndex = wordLib[currWord].length;
      space = 0;

    } else if (space == 0 && currIndex == 0) {
      space = 1;
      return;
    }

    currIndex--;

    if (errorLib[currWord][currIndex] == 1) {
      numErrors--;
    }
  }
}

//'stops' the program
function StopTime() {
  stopped = 1;
  clearInterval(t);
  var netWPM = calcNetWPM();
  $('h5').replaceWith("<h5>Your typing speed of " + netWPM + " WPM was taken in " + seconds / 10 + " seconds");
  $('h5').css('color', 'green');
  seconds = 0;
  timer = 0;
}


function calcNetWPM() {
  var grossWPM = (typedEntries / 5) / (seconds / 10 / 60);
  var netWPM = grossWPM - (numErrors / seconds / 10 / 60);

  firebaseRef.ref('typetests/').push({ typetest: "Traditional", user: localStorage.getItem("user"), wpm: Math.round(netWPM * 100) / 100 });

  var a = usersRef.orderByChild("username").equalTo(localStorage.getItem("user")).once('value').then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      var tempNumberOfTests = childData.numberOfTests + 1;
      var tempAvgWPM = (((childData.avgWPM * childData.numberOfTests) + (Math.round(netWPM * 100) / 100)) / (tempNumberOfTests));

      firebaseRef.ref('users/' + key).set({
        username: childData.username,
        password: childData.password,
        email: childData.email,
        avgWPM: tempAvgWPM,
        numberOfTests: tempNumberOfTests
      });
    });
  });
  firebaseRef.value = '';

  return Math.round(netWPM * 100) / 100
}



















