// Memory

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
    // console.log(total);
});

// Storage 512GB

// find extra storage cost
document.getElementById('add-512gb-storage').addEventListener('click', function(){
    // console.log('clicked');
    let storage512GB = 100;
    let addExtraStorageItem = document.getElementById('add-512gb-storage');
    addExtraStorageItem = storage512GB;
    const storagePrice = parseFloat(storage512GB);
    // console.log(storagePrice);

    // add extra storage cost
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraStorageCostText = extraStorageCost.innerText;
    const PreviousPrice = parseFloat(extraStorageCostText);
    extraStorageCost.innerText = PreviousPrice + storagePrice;
    // console.log(extraStorageCost);

    // add total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    totalPrice.innerText = previousTotalPrice + storagePrice;
    // console.log(totalPrice);

    // add total
    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + storagePrice;
    // console.log(total);
});

// Storage 1TB

// find extra 1TB storage cost
document.getElementById('add-1tb-storage').addEventListener('click', function(){
    // console.log('clicked');
    let storage1Tb = 180;
    let addExtra1TbStorageItem = document.getElementById('add-1tb-storage');
    addExtra1TbStorageItem = storage1Tb;
    const storage1TbPrice = parseFloat(storage1Tb);
    // console.log(storage1TbPrice);

    // add extra 1TB storage cost
    const extra1TbStorageCost = document.getElementById('storage-cost-1tb');
    const extra1TbStorageCostText = extra1TbStorageCost.innerText;
    const PreviousPrice = parseFloat(extra1TbStorageCostText);
    extra1TbStorageCost.innerText = PreviousPrice + storage1TbPrice;
    // console.log(extra1TbStorageCost);

    // add total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    totalPrice.innerText = previousTotalPrice + storage1TbPrice;
    // console.log(totalPrice);

    // add total
    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + storage1TbPrice;
    // console.log(total);
});

// Prime Delivery Cost

// find delivery cost cost
document.getElementById('prime-delivery-cost').addEventListener('click', function(){
    // console.log('clicked');
    let deliveryCost = 20;
    let choosePrimeDeliveryOption = document.getElementById('prime-delivery-cost');
    choosePrimeDeliveryOption = deliveryCost;
    const deliveryCostPrice = parseFloat(deliveryCost);
    // console.log(deliveryCostPrice);

    // add delivery cost 
    const primeDeliveryCost = document.getElementById('delivery-charge');
    const primeDeliveryCostText = primeDeliveryCost.innerText;
    const PreviousPrice = parseFloat(primeDeliveryCostText);
    primeDeliveryCost.innerText = PreviousPrice + deliveryCostPrice;
    // console.log(primeDeliveryCost);

    // add total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    totalPrice.innerText = previousTotalPrice + deliveryCostPrice;
    // console.log(totalPrice);

    // add total
    const total =  document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + deliveryCostPrice;
    // console.log(total);
});

// Validate Promo Code

function validate() {
    let promoCode = 'stevekaku';
    let input = document.getElementById('promo-code').value;
    if(input.toLowerCase() == promoCode.toLowerCase()) {
        document.getElementById('apply-promo').addEventListener('click', function(){
            return true; 
        });  
    } 
    else {
        return false;
    }
};


