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

async function orderFood() {
    try {
        const item1 = await placeOrder('Pasta');
        const item2 = await trackOrder(item1);
        await confirmDelivery(item2);

        console.log('Order completed successfully!');
    } catch (error) {
        console.log(error);
    }
}

orderFood();