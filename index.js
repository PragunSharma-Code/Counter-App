const counterInitialValue = document.querySelector('#counter');

function increment() {
    //Getting value from the UI
    let value = parseInt(counterInitialValue.textContent);
    // console.log(value);
    //Updating the value of the UI
    value+=1;
    //Setting the value of the UI
    // counterInitialValue.innerHTML = `<b>${value}</b>`;
    counterInitialValue.textContent = value;
};

function decrement() {
    //Getting value from the UI
    let value = parseInt(counterInitialValue.textContent);
    // console.log(value);
    //Updating the value of the UI
    value-=1;
    //Setting the value of the UI
    counterInitialValue.textContent = value;
};