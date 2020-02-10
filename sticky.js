//Get the button and header
const myButton = document.getElementById("myBtn");
const containerSticky = document.getElementById("container-sticky");
// When the user scrolls down 20px from the top of the document, show the button and header
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    	myButton.style.display = "block";
		containerSticky.style.display = "block";
  	} else {
    	myButton.style.display = "none";
		containerSticky.style.display = "none";
  	}
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};