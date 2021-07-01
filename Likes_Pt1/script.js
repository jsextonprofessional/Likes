var count = 3;
var likeP = document.querySelector("#counter");

function like() {
    count++;
    likeP.innerText = count + " like(s)";
}

