let targetColor = "";
let swatches = document.querySelectorAll(".swatch");
let header = document.querySelector("#header");
let message = document.querySelector("#message");
let refresh = document.querySelector(".refresh");
let swatchColor = [];
let wrongMessage = ["TRY AGAIN", "WRONG", "LOSER", "YIKES", "CAN'T MISS"];
let wrongCount = 0;
refreshColors();

refresh.addEventListener("click", refreshColors);

for(let i=0; i<swatches.length; i++) {
	swatches[i].addEventListener("click", function() {
		if(swatches[i].style.background === targetColor) {
			winner()
		} else {
		swatches[i].style.background = "rgb(81, 87, 82)";
		message.textContent = wrongMessage[wrongCount];
		wrongCount++;
		}
	});
}

function refreshColors() {
	swatchColor = [];
	wrongCount = 0;
	header.style.background = "rgb(102, 0, 219)";
	message.textContent = ""

	for(let i=0; i<swatches.length;i++) {
		swatchColor.push(randColor());
		swatches[i].style.background = swatchColor[i];
	}

	let i = Math.floor(Math.random() * swatches.length);
	targetColor = swatches[i].style.background;
	document.querySelector("#targetColor").textContent = "Target color: " + targetColor;
}

function randColor() {
	let x = [];
	for(let j=0; j<3; j++) {
		x.push(Math.floor(Math.random() * 256));
	}
	return("rgb("+x.join(", ")+")");
}

function winner() {
	for(let i=0; i<swatches.length; i++) {
		swatches[i].style.background = targetColor;
		header.style.background = targetColor;
		message.textContent = "WINNER!!"
		refresh.classList.add("refreshWin");
	}
}