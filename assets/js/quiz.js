// identify start button and assign to variable
var startQuizEl = document.querySelector("#start");
var problemEl = document.querySelector("#questions");
var buttonEl = document.querySelector("button");


var questionOne = {
    question : "Arrays in JavaScript can be used to store:",
    answerone : "1. numbers & strings",
    answertwo : "2. other arrays",
    answerthree : "3. Booleans",
    answerfour : "4. All of the above"
}

var questionTwo = {
    question : "Commonly used Data types do NOT include: ",
    answerone : "1. Strings",
    answertwo : "2. Booleans",
    answerthree : "3. Alerts",
    answerfour : "4. Numbers"
}

var questionThree = {
    question : "String values must be enclosed within _____ : when being assigned to variables",
    answerone : "Commas",
    answertwo : "Curly brackets",
    answerthree : "Quotes",
    answerfour : "Parenthesis"
}

var questionFour = {
    question : "A very useful tool during development and debugging for printing content to the debugger is:",
    answerone : "JavaScript",
    answertwo : "terminal/bash",
    answerthree : "for loops",
    answerfour : "console.log"
}

var questionFive = {
    question : "The condition in an if/else statement is enclosed within: ",
    answerone : "1. quotes",
    answertwo : "2. Curly brackets",
    answerthree : "Parenthesis",
    answerfour : "square brackets"
}

// Array of Question objects
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var quest = Object.values(questions);
//console.log(questions);
console.log(quest);
//console.log(quest[0]);

// extracts the values from the question one object
var questOne = Object.values(questionOne);
console.log(questOne);
//extracts the values form the question two object
var questTwo = Object.values(questionTwo);
console.log(questTwo);

//extracts the values from the question three object
var questThree = Object.values(questionThree);
console.log(questThree);

//extracts the values from the question four object
var questFour = Object.values(questionFour);
console.log(questFour);

//extracts the values from the question five object
var questFive = Object.values(questionFive);
console.log(questFive);


// function to create question one
var createQuestionOne = function () {
    window.alert("Begin Quiz");
    var divEl = document.createElement("div");
    divEl.className = "quest-choice";

    
      // create list element for question one  
    var questionEl = document.createElement("li");

    //provide HTML for question one
    questionEl.innerHTML = "<h3>" + questions[0].question + "</h3>";

    //append question one to the div element created
    divEl.appendChild(questionEl);

    //append the div to the overall section
    problemEl.appendChild(divEl);

        
    
    //create for loop to loop through questOne array to create the buttons for the answer choices
    for (i = 1; i < questOne.length; i++) {
        var questOneEl = document.createElement("li");
        questOneEl.className = "quest-choice";
        //questOneEl.innerHTML = "<button>" + questOne[i] + "</button>";
        if(questOne[i] === "4. All of the above") {
            questOneEl.innerHTML = "<button class='questOneCorrect'>" + questOne[i] + "</button>";
            //questOneEl[i].setAttribute("data-answer", "correct");
        }
        else{
            questOneEl.innerHTML = "<button class='questOne'>" + questOne[i] + "</button>";
        }
        // append the buttons for the answer choices to the question list element 
        questionEl.appendChild(questOneEl);
        console.log(questOneEl);
        
    }
   


}

var buttonOneEl = document.querySelector(".questOne");

var optionBu = document.querySelector(".quest-option");
//console.log(optionBu);
var answerSelect = function () {
    console.log(questOne[4]);
    
}

//answerSelect();
//var 



// add Event Listener to begin quiz once the start button is selected

startQuizEl.addEventListener("click", createQuestionOne);
buttonEl.addEventListener("click", answerSelect);