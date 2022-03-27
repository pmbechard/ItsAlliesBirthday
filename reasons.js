/********************  Reason Module  **********************/

const reasonsList = [
    "you make our house a home",
    "everything you do is for us",
    "your butt",
    "all the crazy nicknames",
    "that you're willing to move anywhere for us",
    "the beauty mark on your lip", 
    "how much you care about the animals", 
    "your creativity", 
    "your silly side and your serious side", 
    "your cooking", 
    "how you motivate me to be better", 
    "your sassiness", 
    "us time", 
    "how you always remind me of my accomplishments", 
    "your motivation to always improve", 
    "your vision of our future", 
    "how you always want to help", 
    "your crazy laugh", 
    "that you always like to have music on", 
    "that you always have new ideas for projects", 
    "you can always find a deal", 
    "you make sure that I always have snacks", 
    "that you're weird", 
    "your family", 
    "that you'll love me forever", 
    "your weird noises (Na na!)", 
    "the advice you give me",
    "your fashion", 
    "your management skills",
    "your momma instincts",
    "how much fun we have together",
]

const day = new Date().getDate();
const reasonsText = document.querySelector("#reasons-text");
reasonsText.textContent = reasonsList[day-1];




