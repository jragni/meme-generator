
/*
	Author: Jhensen Ray Agni
	github: jragni
*/

//initialize global variables

let memeGallery = document.getElementById("meme-gallery");  // array of HTML obj for meme gallery

// Live Update on Top Text and Bottom Text and Image for preview
setInterval(livePreviewUpdate,100);

// Live update on gallery


// Submit Button
/* Description:
	Adds photo image to the page
	sets image to default image 
	clears userUIArea
*/
let submitButton = document.getElementById('submit-button').addEventListener('click',addPhoto)



// Clear Button
/* Description:
	Clears the preview image and sets it to a white page
*/
let clearButton = document.getElementById("clear-button").addEventListener('click', clearUserUIArea);


// Functions

function addPhoto(event){
	event.preventDefault();
	//prompt user
	let userPrompt = confirm("Are you sure you want to add this meme to the collection?")
	// Get value from URL
	if(userPrompt===true){

		// create nodes
		let memeNode = document.createElement("section");
		memeNode.classList.add("image")
		let topTextNode = document.createElement("h3");
		let bottomTextNode = document.createElement("h3");

		// add HTML to nodes
		memeNode.style.backgroundImage = document.getElementById("preview-image").style.backgroundImage;
		
		topTextNode.innerHTML = document.getElementById("preview-top").innerHTML;
		
		bottomTextNode.innerHTML = document.getElementById("preview-bot").innerHTML;

		// MEME NODE ADD CHILD
		memeNode.appendChild(topTextNode);
		memeNode.appendChild(bottomTextNode);

		// push to memeGallery
		memeGallery.appendChild(memeNode);

	}
}


function clearUserUIArea(event){
	event.preventDefault();
	
	document.getElementById("url-input").value = ""
	//clear top text input
	document.getElementById("top-text-input").value = "";
	// clear bottom text input
	document.getElementById("bottom-text-input").value = "";
	// clear image
	document.getElementById("preview-image").style.backgroundImage= "url('/images/blankphoto.png')";
	let previewImageChildren =Array.from(document.getElementById('preview-image').children);

	previewImageChildren.forEach(child => {
		child.innerHTML = "";
	});
}

function livePreviewUpdate(){
	
	let url = document.getElementById("url-input").value;
	if(url !== "" || url.length>0 || requests.get(url)){
		document.getElementById("preview-image").style.backgroundImage = "url('" + url + "')";
	}

	let topText = document.getElementById("top-text-input").value;
	let bottomText = document.getElementById("bottom-text-input").value;
	let previewImageChildren =Array.from(document.getElementById('preview-image').children);
	// if text is longer than 23 go smaller
	topText.length > 23 ? previewImageChildren[0].style.fontSize = "2rem": previewImageChildren[0].style.fontSize = "2.5rem";

	bottomText.length > 23 ? previewImageChildren[1].style.fontSize = "4rem": previewImageChildren[1].style.fontSize = "2.5rem";

	previewImageChildren[0].innerHTML = topText;
	previewImageChildren[1].innerHTML = bottomText;


	// 
}