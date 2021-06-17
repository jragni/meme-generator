
/*
	Author: Jhensen Ray Agni
	github: jragni
*/

//initialize global variables
let memeGallery = document.getElementById("meme-gallery");  // array of HTML obj for meme gallery
let memeGenId = [];
let memeCount = 0;
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

// Removing Meme

// check if currrent element 
memeGenId.findIndex()

// Functions

function addPhoto(event){
	event.preventDefault();
	let url = document.getElementById("url-input").value
	//prompt user
	// Get value from URL
	if( url!=false || url.length !== 0 ){

		// create nodes
		let memeNode = document.createElement("section");
		let backgroundOverlay = document.createElement("section");
		backgroundOverlay.style.position = "absolute";
		backgroundOverlay.classList.add("background-overlay");
		backgroundOverlay.id = memeCount;
		memeCount++;
		memeGenId.push(backgroundOverlay.id);
		backgroundOverlay.addEventListener("click",removeParentNode)
		memeNode.classList.add("image")
		memeNode.classList.add("meme-image")
		memeNode.style.position = "relative";
		let topTextNode = document.createElement("h3");
		topTextNode.classList.add("top-text");
		let bottomTextNode = document.createElement("h3");
		bottomTextNode.classList.add("bottom-text");

		// add HTML to nodes
		memeNode.style.backgroundImage = document.getElementById("preview-image").style.backgroundImage;
		
		topTextNode.innerHTML = document.getElementById("preview-top").innerHTML;
		
		bottomTextNode.innerHTML = document.getElementById("preview-bot").innerHTML;
		

		// MEME NODE ADD CHILD
		memeNode.appendChild(topTextNode);
		memeNode.appendChild(bottomTextNode);
		memeNode.appendChild(backgroundOverlay);


		// push to memeGallery
		memeGallery.appendChild(memeNode);

	}
}

function removeParentNode(e){
	e.target.parentNode.remove();
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

	bottomText.length > 23 ? previewImageChildren[1].style.fontSize = "2rem": previewImageChildren[1].style.fontSize = "2.5rem";

	previewImageChildren[0].innerHTML = topText;
	previewImageChildren[1].innerHTML = bottomText;


	// 
}