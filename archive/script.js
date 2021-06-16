/** Meme Generator 
 * Author: Jhensen Ray Agni
 * github: jragni
 * 
 * TODO's
 * 1. function that cycles through the meme images and creates the correctbody in each
 * 2. submit button that adds the meme to the array of meme objects to display
 * 3. 
 */

// initializer
document.addEventListener('DOMContentLoaded', onStart(),false);

function onStart(){

	console.log("DOM ready")

	/* Initialize variables */
	
	// array that stores meme element
	let memeElementsArray = []; 

	// meme gallery location

	let mainBody = document.getElementsByClassName('main-body')[0];

	// top text of the preview image
	let topPreviewText = document.getElementById("preview-img-text-top");

	// bottom text of the preview image
	let bottomPreviewText = document.getElementById("preview-img-text-bottom");
	// clear Button
	let clearButton = document.getElementById("clear"); 

	// submit Button
	let submitButton = document.getElementById("submit");

	//top text in form
	let topTextValue = document.getElementById("user-input__element-form__top-text").value;

	// Functions

	// clear preview
	clearButton.addEventListener("click",()=>{
		topPreviewText.innerHTML = "";
		bottomPreviewText.innerHTML = "";
	});

	// create memes
	submitButton.addEventListener("click",createMeme(topTextValue,topTextValue));

	//display memes
	memeElementsArray.forEach(ele =>{
		mainBody.appendChild(ele);
	})

	// Function Definitions
	function createMeme(top, bottom){
		// initialize nodes
		let memeNode = document.createElement("div");
		let topText = document.createElement("p");
		let bottomText = document.createElement("p");
		let deleteButton = document.createElement('div');
	
	
		// add classes to nodes
		memeNode.classList.add("image-meme");
		topText.classList.add("img-text", "image-text__top");
		bottomText.classList.add("img-text", "image-text__bottom");
		deleteButton.classList.add("image-meme__x");
	
		topText.innerHTML = String(top);
		bottomText.innerHTML = String(bottom);
		memeNode.appendChild(topText);
		memeNode.appendChild(deleteButton);
		memeNode.appendChild(bottomText);
		memeElementsArray.push(memeNode);
	}
};











