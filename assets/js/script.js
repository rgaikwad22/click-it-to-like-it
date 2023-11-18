var doubleClick = document.querySelector(".section-image");
var countClick = document.querySelector(".click-counter");

var likeCount = 0;

function showHeart(e) {
    var heart = document.createElement('i');
    heart.innerHTML = "heart";
    heart.classList.add("click-heart");
    doubleClick.appendChild(heart);
    const x = e.clientX;
    const y = e.clientY;
    const leftOffset = doubleClick.offsetLeft;
    const topOffset = doubleClick.offsetTop;
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    setTimeout(() => {
        heart.remove();
    }, 1000)
}

doubleClick.addEventListener("dblclick", (e) => {
    countClick.innerHTML = ++likeCount;
    showHeart(e);
})

