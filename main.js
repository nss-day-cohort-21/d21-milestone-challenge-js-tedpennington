console.log("main.js loaded");

// Define variables
var tree = {};
// var userHeight = 30;
// var userChar = "*";


// Event listeners on build button and Enter keypress that run makeTree function
document.getElementById("build-button").addEventListener("click", function(){
	makeTree(tree);
});

document.getElementById("inputs").addEventListener("keyup", function(e){
	// console.log("you pressed: ", e.keyCode);
	if(e.keyCode === 13){
		makeTree(tree);
	};

});

// Function that makes the tree
function makeTree(tree){

	var userHeight = document.getElementById("user-height").value;
	var userChar = document.getElementById("user=char").value;


	tree.height = userHeight;
	tree.char = userChar;
	var spaces = " ";
	var charRepeat = 1;
	var spacesNum = userHeight;
	for(i = 0; i < tree.height; i++) {
		console.log(spaces.repeat(spacesNum) + "%c" + userChar.repeat(charRepeat), "color: red");
		spacesNum = spacesNum - 1;
		charRepeat = charRepeat + 2;
		// console.log(userHeight);
		// console.log (charRepeat);

	}
};

// makeTree(tree);

// Complete!