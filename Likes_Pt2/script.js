console.log("page loading...");

var likes = [9, 12, 9]
var please = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];

function like(id) {
    likes[id]++;
    please[id].innerHTML = likes[id] + " Like(s)";
}