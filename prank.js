// Prank Plugin by DigitDorian

console.log("Prank is Loading");

const PossibleLinkIds = ["video-title-link", "thumbnail", "content"];
const allLinks = document.getElementsByTagName("a");
const PrankVideo = "/watch?v=QDia3e12czc";

var links = new Array();

for (let i=0; i < allLinks.length; i++) {
	for (let o=0; o < PossibleLinkIds.length; o++) {
		if (allLinks[i].id == PossibleLinkIds[o]) {
			allLinks[i].href = PrankVideo;
		}
	};
};

function RickRoll() {
	window.location.replace("http://youtube.com" + PrankVideo);
}

document.getElementById("content").addEventListener("click", RickRoll);
document.addEventListener("keydown", RickRoll);

console.log("Prank has Initialized");
