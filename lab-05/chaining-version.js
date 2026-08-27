function placeOrder(item) {
    return new Promise((resolve, reject) => {
        console.log(`Order Placed: ${item}`);

        setTimeout(() => {
            resolve(item);
        }, 1000);
    });
}

function trackOrder(item) {
    return new Promise((resolve, reject) => {
        console.log(`Preparing: ${item}`);

        setTimeout(() => {
            console.log(`Out for Delivery: ${item}`);
            resolve(item);
        }, 1000);
    });
}

function confirmDelivery(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Delivered: ${item}`);
            resolve(item);
        }, 1000);
    });
}

placeOrder('Pasta')
    .then((item) => trackOrder(item))
    .then((item) => confirmDelivery(item))
    .then(() => console.log('Order completed successfully!'))
    .catch((error) => console.log(error));