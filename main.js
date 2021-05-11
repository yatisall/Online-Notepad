
//CHANGE FONT TYPE FUNCTION
function changeFont(){
      let myFont = document.getElementById("select-font").value;
      document.execCommand('fontName', false, myFont);
    }

//CHANGE FONT SIZE FUNCTION
function changeSize(){
      let mysize = document.getElementById("select-size").value;
      document.execCommand('fontSize', false, mysize);
    }

//COLOUR CHANGE FUNCTIOM
function selectColour(){
      let mycolor = document.getElementById("colour-picker").value;
      document.execCommand('foreColor', false, mycolor);
    }

//WORD COUNTER
let textField = document.getElementById("textInput");
let wordCount = document.getElementById("wordCount");

function countWord(){
	let text = textField.textContent; //Get item from the content
	text = text.trim(); //Removes the spaces in the beginning and at the end. Removes 
	let words = text.split(new RegExp("\\s+")); //Regular expression for removing multiple white spaces.

	if(words[0] === ""){
		wordCount.textContent = 0; //Returns the text content
	}else{
		wordCount.textContent = words.length;
	}
	console.log(words);
}

//SAVE DATA - BUTTON [SAVE TO LOCAL STORAGE]
let savebtn = document.getElementById("save_btn");
let loadbtn = document.getElementById("load_btn");
let resetbtn = document.getElementById("reset_btn");

var localStore = {
	saveLocalStorage: function(){
		localStorage.setItem("item",
			textField.innerHTML);
	},
	loadLocalStorage: function(){
		let contentStored =
		localStorage.getItem("item");
		if(contentStored){
			textField.innerHTML = contentStored;
		}
	}
};

savebtn.addEventListener("click", function(){
	localStore.saveLocalStorage();
	textField.innerHTML = "SAVED! You can LOAD or RESET the page."; //Shows in textInput
	wordCount.innerHTML = "0"; //Counter reset to 0
}, false);

//LOAD DATA - BUTTON [LOAD BACK SAVED CONTENT TO TEXT AREA]
loadbtn.addEventListener("click", function(){
	localStore.loadLocalStorage();

	text = textField.textContent; //Get item from the content.
	text = text.trim(); //Removes the spaces in the beginning and at the end.
	words = text.split(" ");//Removes the space.
	if(words[0] === ""){
		wordCount.textContent = 0; //Returns the text content.
	}else{
		wordCount.textContent = words.length;
	}
}, false);

//RESET DATA -BUTTON [RESETS THE WHOLE TEXT AREA]
resetbtn.addEventListener("click", function(){
	textField.innerHTML = "You have reset your content. Try to load now.";
	wordCount.innerHTML = "0";
}, false);