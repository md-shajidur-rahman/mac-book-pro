// find extra memory cost

document.getElementById('add-16gb-memory').addEventListener('click', function(){
    // console.log('clicked');
    let unifiedMemory16Gb = 180;
    let addExtraMemoryItem = document.getElementById('add-16gb-memory');
    addExtraMemoryItem = unifiedMemory16Gb;
    const memoryPrice = parseFloat(unifiedMemory16Gb);
    // console.log(memoryPrice);

    // add extra memory cost
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    const PreviousPrice = parseFloat(extraMemoryCostText);
    extraMemoryCost.innerText = PreviousPrice + memoryPrice;
    // console.log(extraMemoryCost);

    // add total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    totalPrice.innerText = previousTotalPrice + memoryPrice;
    // console.log(totalPrice);

    // add total
    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + memoryPrice;
    console.log(total);
})


