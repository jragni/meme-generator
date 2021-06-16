

// Live Update on Top Text and Bottom Text
setInterval(textUpdate,100);

// Clear Button
/* Description:
	Clears the preview image and sets it to a white page
*/
let clearButton = document.getElementById("clear-button").addEventListener('click', (e)=>{
	e.preventDefault();
	//clear top text input
	document.getElementById("top-text-input").innerHTML = "";
	// clear bottom text input
	document.getElementById("bottom-text-input").innerHTML = "";
	// clear image
	document.getElementById("preview-image").sty;
	let previewImageChildren =Array.from(document.getElementById('preview-image').children);

	previewImageChildren.forEach(child => {
		child.innerHTML = "";
	});

})

function textUpdate(){
	let topText = document.getElementById("top-text-input").value;
	let bottomText = document.getElementById("bottom-text-input").value;
	let previewImageChildren =Array.from(document.getElementById('preview-image').children);
	previewImageChildren[0].innerHTML = topText;
	previewImageChildren[1].innerHTML = bottomText;
}