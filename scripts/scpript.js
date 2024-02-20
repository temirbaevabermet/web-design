const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

let myVariable = 'mmm';

alert(myVariable);
const imgElement = document.querySelector("img");
const img1URL = "images\Ala-Too_International_University_Seal.png";
const img2URL = "images\nature-scenery.jpg";
function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else{
        imgElement.setAttribute("src",img1URL);
    }
}
imgElement.onclick = changePhoto;