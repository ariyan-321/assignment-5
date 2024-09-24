function getID(id){
    return document.getElementById(id)
}
function addClass(element,addCls){
    element.classList.add(addCls)
}

function removeClass(element,removeCls){
    element.classList.remove(removeCls)
}

const historyBtn=getID("history-btn")
const donationBtn=getID("donation-btn")
const historyBox=getID("history-box")
const mainBoxes=getID("main-boxes")
const mainBalance=getID("main-balance")
const myModal=getID("my_modal_1")

const footer=getID("footer")


historyBtn.addEventListener("click", function () {
    addClass(historyBtn, "bg-[#B4F461]");
    removeClass(donationBtn, "bg-[#B4F461]"); 
    addClass(mainBoxes, "hidden");
    removeClass(historyBox, "hidden");
    addClass(footer,"hidden")
    
});

donationBtn.addEventListener("click", function () {
    addClass(donationBtn, "bg-[#B4F461]"); 
    removeClass(historyBtn, "bg-[#B4F461]");
    removeClass(mainBoxes, "hidden");
    addClass(historyBox, "hidden");
    removeClass(footer,"hidden")
});







// for box 1

const DonateNow1=getID("donate-now")
const collectedMoney1=getID("collected-money")
const inputField1=getID("input-field")
const title1=getID("title")

// for box 2
const DonateNow2=getID("donate-now-2")
const collectedMoney2=getID("collected-money-2")
const inputField2=getID("input-field-2")
const title2=getID("title-2")


// for box 3
const DonateNow3=getID("donate-now-3")
const collectedMoney3=getID("collected-money-3")
const inputField3=getID("input-field-3")
const title3=getID("title-3")


let totalBalance=225000;

// Change total collected money to objects
let totalCollectedMoney1 = { amount: 35000 };
let totalCollectedMoney2 = { amount: 65000 };
let totalCollectedMoney3 = { amount: 95000 };

// Update displayed values
mainBalance.innerText = totalBalance;
collectedMoney1.innerText = totalCollectedMoney1.amount;
collectedMoney2.innerText = totalCollectedMoney2.amount;
collectedMoney3.innerText = totalCollectedMoney3.amount;





function handleDonation(inputField,collectedMoney,title,totalCollectedMoney){
    let totalInput=Number(inputField.value);
    if (isNaN(totalInput) || totalInput<=0 || totalInput>totalBalance ){
        alert("please enter a valid donation amount.")
        inputField.value="";
        return  
    }
    totalCollectedMoney.amount+=totalInput
    collectedMoney.innerText=totalCollectedMoney.amount;

    totalBalance-=totalInput;
    mainBalance.innerHTML=totalBalance

    

    const historyTitle=title.innerText;
    const now=new Date()
    const formattedDate=now.toString();

    const newDiv=document.createElement("div")
    newDiv.classList.add("border-2", "rounded-xl", "py-7", "px-3", "w-full", "space-y-4");
    newDiv.innerHTML = `
        <div>
            <h1 class="text-2xl font-bold">${totalInput} taka is donated for ${historyTitle}</h1>
            <p class="py-4 font-bold">Date:${formattedDate}</p>
        </div>
    `;

    historyBox.appendChild(newDiv);

    inputField.value="";
    myModal.showModal()
}




DonateNow1.addEventListener("click",function(event){
    event.preventDefault()
    handleDonation(inputField1,collectedMoney1,title1,totalCollectedMoney1)
})


DonateNow2.addEventListener("click",function(event){
    event.preventDefault()
    handleDonation(inputField2,collectedMoney2,title2,totalCollectedMoney2)
})


DonateNow3.addEventListener("click",function(event){
    event.preventDefault()
    handleDonation(inputField3,collectedMoney3,title3,totalCollectedMoney3)
})


const blogBtn=getID("blog-btn")
blogBtn.addEventListener("click",function(){
    window.location.href="blog.html";
})


