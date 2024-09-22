function getId(id) {
    return document.getElementById(id);
}

function addClass(element, addCls) {
    element.classList.add(addCls);
}

function removeClass(element, removeCls) {
    element.classList.remove(removeCls);
}

const historyBtn = getId("history-btn");
const donationBtn = getId("donation-btn"); 
const historyBox = getId("history-box"); 
const mainBoxes = getId("main-boxes");

historyBtn.addEventListener("click", function () {
    addClass(historyBtn, "bg-[#B4F461]");
    removeClass(donationBtn, "bg-[#B4F461]"); 
    addClass(mainBoxes, "hidden");
    removeClass(historyBox, "hidden");
});

donationBtn.addEventListener("click", function () {
    addClass(donationBtn, "bg-[#B4F461]"); 
    removeClass(historyBtn, "bg-[#B4F461]");
    removeClass(mainBoxes, "hidden");
    addClass(historyBox, "hidden");
});






