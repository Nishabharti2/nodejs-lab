function placeOrderCallback(item, callback) {
    console.log(`Order placed: ${item}`);

    setTimeout(() => {
        callback(`${item} is out for delivery!`);
    }, 2000);
}

function trackOrderCallback(item, callback) {
    console.log(`Tracking order: ${item}`);

    setTimeout(() => {
        callback(`${item} is on the way!`);
    }, 2000);
}

function confirmDeliveryCallback(item, callback) {
    console.log(`Confirming delivery: ${item}`);

    setTimeout(() => {
        callback(`${item} has been delivered!`);
    }, 2000);
}

placeOrderCallback('Pizza', (message) => {
    console.log(message);

    trackOrderCallback('Pizza', (trackingMessage) => {
        console.log(trackingMessage);

        confirmDeliveryCallback('Pizza', (deliveryMessage) => {
            console.log(deliveryMessage);
        });
    });
});