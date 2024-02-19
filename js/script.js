const seatList = document.querySelectorAll(".seat");
let totalPrice = 0;

for (const seat of seatList) {
  seat.addEventListener("click", function () {
    const seatCounter = document.getElementById("seatCount");
    const seatCounterText = seatCounter.innerText;
    if(seatCounterText<4){
        const currentSeat = parseInt(seatCounterText);
        const newSeat = currentSeat + 1;
        seat.disabled = true;
        seatCounter.innerText = newSeat;
    }
    else{
        alert('Wait..Take a Rest!!');
        seatList.setAttribute('disabled', true);
        const btn = document.querySelectorAll('#seats');
        btn.addEventListener('click', function(){
            btn.setAttribute('disabled', true);
        })
    }
    

    

    const seatLeft = document.getElementById("seatLeft");
    const seatLeftText = seatLeft.innerText;
    const availableSeat = parseInt(seatLeftText);
    const nowAvailableSeat = availableSeat - 1;
    seatLeft.innerText = nowAvailableSeat;

    seat.classList.add("bg-[#1DD100]");
    const title = seat.querySelector("h2").innerText;
    const price = parseFloat(document.getElementById("tprice").innerText);

    const titleContainer = document.getElementById("title-container");
    const tTitle = document.createElement("p");
    tTitle.innerText = title;
    titleContainer.appendChild(tTitle);

    const classTitle = document.getElementById("tClass");
    const tClass = document.createElement("p");
    tClass.innerText = "AC B";
    classTitle.appendChild(tClass);

    const priceTitle = document.getElementById("tPrice");
    const tPrice = document.createElement("p");
    tPrice.innerText = price;
    priceTitle.appendChild(tPrice);

    //calculate price
    totalPrice += price;
    const finalPrice = document.getElementById("totalPrice");
    const finalPriceText = finalPrice.innerText;
    const lastPrice = parseInt(finalPriceText);
    finalPrice.innerText = totalPrice;

  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;

  if (couponElement === "NEW15") {
    const discountText = document.getElementById("discountPrice");
    const discountTextElement = document.createElement("p");
    discountTextElement.innerText = "Discount Price";
    discountText.appendChild(discountTextElement);

    const discountPrices = document.getElementById("discountAmount");
    const discountAmount = totalPrice * 0.15;
    const discountElement = document.createElement("p");
    discountElement.innerText = discountAmount;
    discountPrices.appendChild(discountElement);
  } else if (couponElement === "Couple 20") {
    const discountText = document.getElementById("discountPrice");
    const discountTextElement = document.createElement("p");
    discountTextElement.innerText = "Discount Price";
    discountText.appendChild(discountTextElement);

    const discountPrices = document.getElementById("discountAmount");
    const discountAmount = totalPrice * 0.2;
    const discountElement = document.createElement("p");
    discountElement.innerText = discountAmount;
    discountPrices.appendChild(discountElement);
  } else {
    alert("Invalid Coupon Code");
  }

  const grandTotalPrices = document.getElementById("grandTotalPrice");
  const totally = parseInt(grandTotalPrice.innerText);
  const discountAmountTotal = parseInt(discountAmount.innerText);
  const grandTotally = totalPrice - discountAmountTotal;
  grandTotalPrices.innerText = grandTotally;

  const couponFieldOption = document.getElementById("couponField");
  couponFieldOption.classList.add("hidden");
});

const phoneNumberField = document.getElementById("phone-field");
const nextButton = document.getElementById("nextBtn");
phoneNumberField.addEventListener("keyup", function (event) {
  const number = event.target.value;
  console.log(number);

  if (typeof number === "string") {
    nextButton.removeAttribute("disabled");
  }
});
