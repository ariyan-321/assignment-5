// function getId(id) {
//     return document.getElementById(id);
// }

// function addClass(element, addCls) {
//     element.classList.add(addCls);
// }

// function removeClass(element, removeCls) {
//     element.classList.remove(removeCls);
// }

// const historyBtn = getId("history-btn");
// const donationBtn = getId("donation-btn"); 
// const historyBox = getId("history-box"); 
// const mainBoxes = getId("main-boxes");

// // Box 1 elements
// const DonateNow1 = getId("donate-now");
// const MainBalance = getId("main-balance");
// const collectedMoney1 = getId("collected-money");
// const inputField1 = getId("input-field");
// const title1 = getId("title");

// // Box 2 elements
// const DonateNow2 = getId("donate-now-2");
// const collectedMoney2 = getId("collected-money-2");
// const inputField2 = getId("input-field-2");
// const title2 = getId("title-2");

// // Box 3 elements
// const DonateNow3 = getId("donate-now-3");
// const collectedMoney3 = getId("collected-money-3");
// const inputField3 = getId("input-field-3");
// const title3 = getId("title-3");

// let totalBalance = 120000;
// let totalCollectedMoney1 = 500000;
// let totalCollectedMoney2 = 600;  // Assume initial value for Box 2
// let totalCollectedMoney3 = 2400; // Assume initial value for Box 3

// MainBalance.innerText = totalBalance;
// collectedMoney1.innerText = totalCollectedMoney1;
// collectedMoney2.innerText = totalCollectedMoney2;
// collectedMoney3.innerText = totalCollectedMoney3;



// historyBtn.addEventListener("click", function () {
//     addClass(historyBtn, "bg-[#B4F461]");
//     removeClass(donationBtn, "bg-[#B4F461]"); 
//     addClass(mainBoxes, "hidden");
//     removeClass(historyBox, "hidden");
// });

// donationBtn.addEventListener("click", function () {
//     addClass(donationBtn, "bg-[#B4F461]"); 
//     removeClass(historyBtn, "bg-[#B4F461]");
//     removeClass(mainBoxes, "hidden");
//     addClass(historyBox, "hidden");
// });

// // Function to handle donations for any box
// function handleDonation(inputField, collectedMoney, title) {
//     let totalInput = Number(inputField.value);
//     if (isNaN(totalInput) || totalInput <= 0) {
//         alert("Please enter a valid donation amount.");
//         inputField.value = "";
//         return
//     }

//     // Update the balance and collected money
//     totalCollectedMoney += totalInput; // Updating the main collected money
//     collectedMoney1.innerText = totalCollectedMoney1;

//     totalCollectedMoney2 += totalInput; // Updating the main collected money
//     collectedMoney2.innerText = totalCollectedMoney2;

//     totalCollectedMoney3 += totalInput; // Updating the main collected money
//     collectedMoney3.innerText = totalCollectedMoney3;

//     totalBalance -= totalInput;
//     MainBalance.innerText = totalBalance;

//     // History section
//     const historyTitle = title.innerText;
//     const now = new Date();
//     const formattedDate = now.toString();

//     // Create new div for the history log
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("border-2", "rounded-xl", "py-7", "px-3", "w-full", "space-y-4");
//     newDiv.innerHTML = `
//         <div>
//             <h1 class="text-2xl font-bold">${totalInput} taka is donated for ${historyTitle}</h1>
//             <p class="py-4">${formattedDate}</p>
//         </div>
//     `;

//     // Append the new history log
//     historyBox.appendChild(newDiv);

//     // Clear input field
//     inputField.value = "";

    
// }

// // Handle Box 1 donation
// DonateNow1.addEventListener("click", function(event) {
//     event.preventDefault();
//     handleDonation(inputField1, collectedMoney1, title1);
// });

// // Handle Box 2 donation
// DonateNow2.addEventListener("click", function(event) {
//     event.preventDefault();
//     handleDonation(inputField2, collectedMoney2, title2);
// });

// // Handle Box 3 donation
// DonateNow3.addEventListener("click", function(event) {
//     event.preventDefault();
//     handleDonation(inputField3, collectedMoney3, title3);
// });

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

// Box 1 elements
const DonateNow1 = getId("donate-now");
const MainBalance = getId("main-balance");
const collectedMoney1 = getId("collected-money");
const inputField1 = getId("input-field");
const title1 = getId("title");

// Box 2 elements
const DonateNow2 = getId("donate-now-2");
const collectedMoney2 = getId("collected-money-2");
const inputField2 = getId("input-field-2");
const title2 = getId("title-2");

// Box 3 elements
const DonateNow3 = getId("donate-now-3");
const collectedMoney3 = getId("collected-money-3");
const inputField3 = getId("input-field-3");
const title3 = getId("title-3");

let totalBalance = 120000;
let totalCollectedMoney1 = 500000;
let totalCollectedMoney2 = 600;  // Assume initial value for Box 2
let totalCollectedMoney3 = 2400; // Assume initial value for Box 3

MainBalance.innerText = totalBalance;
collectedMoney1.innerText = totalCollectedMoney1;
collectedMoney2.innerText = totalCollectedMoney2;
collectedMoney3.innerText = totalCollectedMoney3;

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


const myModal=document.getElementById("my_modal_1")


// Function to handle donations for any box
function handleDonation(inputField, collectedMoney, title, totalCollectedMoney) {
    let totalInput = Number(inputField.value);
    if (isNaN(totalInput) || totalInput <= 0) {
        alert("Please enter a valid donation amount.");
        inputField.value = "";
        return;
    }

    // Update the balance and collected money
    totalCollectedMoney += totalInput;
    collectedMoney.innerText = totalCollectedMoney;

    totalBalance -= totalInput;
    MainBalance.innerText = totalBalance;

    // History section
    const historyTitle = title.innerText;
    const now = new Date();
    const formattedDate = now.toString();

    // Create new div for the history log
    const newDiv = document.createElement("div");
    newDiv.classList.add("border-2", "rounded-xl", "py-7", "px-3", "w-full", "space-y-4");
    newDiv.innerHTML = `
        <div>
            <h1 class="text-2xl font-bold">${totalInput} taka is donated for ${historyTitle}</h1>
            <p class="py-4">${formattedDate}</p>
        </div>
    `;

    // Append the new history log
    historyBox.appendChild(newDiv);

    // Clear input field
    inputField.value = "";
    myModal.showModal()
}

// Handle Box 1 donation
DonateNow1.addEventListener("click", function(event) {
    event.preventDefault();
    handleDonation(inputField1, collectedMoney1, title1, totalCollectedMoney1);
});

// Handle Box 2 donation
DonateNow2.addEventListener("click", function(event) {
    event.preventDefault();
    handleDonation(inputField2, collectedMoney2, title2, totalCollectedMoney2);
});

// Handle Box 3 donation
DonateNow3.addEventListener("click", function(event) {
    event.preventDefault();
    handleDonation(inputField3, collectedMoney3, title3, totalCollectedMoney3);
});

const blogBtn = getId("blog-btn");
blogBtn.addEventListener("click",function(){
    window.location.href="blog.html"
})


