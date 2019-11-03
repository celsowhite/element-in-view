/*----------------------
Element In View
----------------------*/

export default function elementInView(
	element,
	elementPart = 'top',
	offsetPercentage = 0
) {
	// Window Measurements

	let windowHeight = window.innerHeight;

	// Element Measurements

	const elementTop = element.getBoundingClientRect().top;
	const elementHeight = element.offsetHeight;
	const elementMiddle = elementTop + elementHeight / 2;
	const elementBottom = elementTop + elementHeight;

	// Capture the position of the part of the element we are tracking.

	let elementPosition;

	if (elementPart.toLowerCase() === 'top') {
		elementPosition = elementTop;
	} else if (elementPart.toLowerCase() === 'middle') {
		elementPosition = elementMiddle;
	} else if (elementPart.toLowerCase() === 'bottom') {
		elementPosition = elementBottom;
	} else {
		elementPosition = elementTop;
	}

	// Calculate the offset pixel distance

	const offsetPixels = windowHeight * (offsetPercentage / 100);

	// Check if the element is in view.

	const elementInView =
		elementPosition + offsetPixels <= windowHeight && elementBottom >= 0;

	if (elementInView) {
		return true;
	} else {
		return false;
	}
}
