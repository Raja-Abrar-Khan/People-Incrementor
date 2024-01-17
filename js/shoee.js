// when the user clicks the purchase button, render out 
// "something went wront please try again" in the paragraph
// that was id="error"
let errorParagraph=document.getElementById("error")
console.log(errorParagraph)
function purchase(){
    console.log("button clicked")
    errorParagraph.textContent="something went wrong,please try again"
}