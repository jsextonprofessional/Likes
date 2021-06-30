console.log("page loading...");

var likes = [9, 12, 9];
var spans = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];

function likes(id) {
    likes[id]++;
    spans[id].innerText = likes[id] + "like(s)";
}