//const countValue = document.querySelector('#counter');
const countValue = document.getElementById('counter');

function increment(){
    // get the vlue from UI by converting from string to int using parseint
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the updated value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the updated value onto UI
        countValue.innerText = value;
};