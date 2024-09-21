const menuBtn = document.getElementById('menu-btn');
const mobileMenuElem = document.getElementById('mobileMenu');
const selectedSeatElem = document.getElementById("selected-seat");
const totalBookedElem = document.getElementById('total-booked');
const availaibleSeatElem = document.getElementById('available-seat');
const totalPriceElem = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-feild');
const couponBtnEl = document.getElementById('coupon-btn');
const defaultTextElem = document.getElementById('default-text');
const grandTotalElem = document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn')



// next-btn phone-number
//menu Icons

menuBtn.addEventListener('click', function(){
    menuBtn.children[0].classList.toggle("hidden");
    const menuCloseBtn = document.getElementById('close-icon');
    mobileMenuElem.classList.toggle("hidden")
    mobileMenuElem.classList.toggle("flex")

})

//array te rakhi jate array te count hiobe add hoi
let selectedSeat = [] ; 
let totatlPrice = 0;
function handleSelectSeat(event){
    const value = event.innerText ;
     if(selectedSeat.includes(value)){
        return alert('seat already booked!');
     } else if(selectedSeat.length < 4){
        
    event.classList.add('bg-primary');
    event.classList.add('text-white');
    //click hole name ta store hoi 
    selectedSeat.push(event.innerText);
    totalBookedElem.innerText = selectedSeat.length ; 

    //descrease availaibleseat 
    const availableSeatValue = parseFloat(availaibleSeatElem.innerText) ; 
    const newAvailableSeatValue =  availableSeatValue - 1
    availaibleSeatElem.innerText = newAvailableSeatValue;
    //remove default Text
    defaultTextElem.classList.add("hidden")

    selectedSeatElem.innerHTML += `<li class="text-base font-normal flex justify-between">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
    </li>`
    //update total price 
    totatlPrice += 550;
    totalPriceElem.innerText = totatlPrice.toFixed(2);
    //active coupon button
    if(selectedSeat.length > 3){
        couponInputEl.removeAttribute('disabled')
        couponBtnEl.removeAttribute('disabled')
    }


     }
     else{
        return alert("Maximum seat booked")
     }
}


//coupon button function
document.getElementById('coupon-btn').addEventListener("click", function(){
    const couponInputValue = couponInputEl.value;
    let couponSave = 0 ; 


    if(couponInputValue !== 'NEW50' && couponInputValue !== 'Couple 20'){
        alert("Your provided coupon is not valid");
        return
    }
    if(couponInputValue == "NEW50"){
            couponSave = totatlPrice * 0.15;
    }else  if(couponInputValue == "Couple 20"){
        couponSave = totatlPrice * 0.20;
    }
    couponInputEl.classList.add("hidden");
    couponBtnEl.classList.add("hidden");

    const showCouponPriceEl = document.getElementById('show-coupon-price');
    showCouponPriceEl.innerHTML  = `
        <p>Discount</p>
        <p>
         <span>-BDT: </span>
         <span>${couponSave.toFixed(2)}</span>
        </p>
    `

    const grandTotalvalue = totatlPrice - couponSave ; 
    grandTotalElem.innerText = grandTotalvalue.toFixed(2) ; 

})

phoneNumberEl.addEventListener('input', function(e){
        const inputValue = e.target.value ; 
        console.log(inputValue)
        if(inputValue.length >= 11){
            nextBtnEl.removeAttribute("disabled")
        }
})


document.getElementById('btn-continue').addEventListener('click', function(){
    window.location.reload();
})
