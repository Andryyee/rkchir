var count = 1;

function aler(){
    document.getElementById("alertions").innerHTML += "This is alertion number: " + count + '\n';
    count += 1;
}

function delayDecorator(func, delay) {
    return function() {
        setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

function stopMessages() {
    clearInterval(timerId); // Stop the interval
    delayDecorator(aler, 10000); // Call the function with delay
    timerId = setInterval(function() {
        aler(); // Set up the interval again
    }, 3000);
}

let timerId = setInterval(aler, 3000);