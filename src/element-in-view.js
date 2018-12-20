/*----------------------
Element In View
----------------------*/

export default function elementInView(element, elementPart = 'top') {

    // Window Measurements

    let windowHeight = window.innerHeight;
    
    // Element Measurements

    const elementTop = element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;
    const elementMiddle = elementTop + (elementHeight / 2);
    const elementBottom = elementTop + elementHeight;

    // Capture the position of the part of the element we are tracking.

    let elementPosition;

    if (elementPart.toLowerCase() === 'top') {
        elementPosition = elementTop;
    }
    else if(elementPart.toLowerCase() === 'middle') {
        elementPosition = elementMiddle;
    }
    else if(elementPart.toLowerCase() === 'bottom') {
        elementPosition = elementBottom;
    }
    else {
        elementPosition = elementTop;
    }

    const elementInView = (elementPosition <= windowHeight) && (elementBottom >= 0);

    if (elementInView) {
        return true;
    }
    else {
        return false;
    }

}