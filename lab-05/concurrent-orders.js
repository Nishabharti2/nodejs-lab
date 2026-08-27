function placeOrder(item) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        console.log(`Order placed: ${item}`);

        setTimeout(() => {
            console.log(`${item} is ready!`);
            resolve(`${item} completed`);
        }, delay);
    });
}

async function orderMultiple() {
    console.log('Placing 3 orders at once...');

    console.time('Total Time');

    const results = await Promise.all([
        placeOrder('Pizza'),
        placeOrder('Burger'),
        placeOrder('Coffee')
    ]);

    console.timeEnd('Total Time');

    console.log(results);
}

orderMultiple();