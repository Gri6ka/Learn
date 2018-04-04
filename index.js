//document.getElementById('butZero').addEventListener('click', (e)=> {
    // var input1Node = document.getElementById('butZero');
    // var resultNode = document.getElementById('disp');
    // var value1 = parseInt(input1Node.value);
    // resultNode.textContent += value1;
//    document.getElementById('disp').textContent += 0;
//});
document.querySelectorAll('button.num').forEach((elem) => {
    elem.addEventListener('click' , (e) => {
    document.getElementById('disp').textContent += e.currentTarget.value;
    })
})

document.getElementById('butClear').addEventListener('click', (e)=> {
    document.getElementById('disp').textContent = null;
});
document.getElementById('butSum').addEventListener('click', (e)=> {
    document.getElementById('disp').textContent += '+';
});
document.getElementById('butMinus').addEventListener('click', (e)=> {
    document.getElementById('disp').textContent += '-';
});
document.getElementById('butDivide').addEventListener('click', (e)=> {
    document.getElementById('disp').textContent += '/';
});
document.getElementById('butMultiply').addEventListener('click', (e)=> {
    document.getElementById('disp').textContent += '*';
});
document.getElementById('butResult').addEventListener('click', (e)=> {
    var input1Node = document.getElementById('disp');
    document.getElementById('disp').textContent = eval(input1Node.textContent);

});


// document.getElementByClassName
// document.querySelector()