const input = document.querySelector('input.computer-input');
const button = document.querySelector('button.submit-btn');
const output = document.querySelector('span.computer-output');
console.log(output);

input.focus();

function Factorial(number) {
    if(number == 0 || number == 1) return 1;
    return number * Factorial(number - 1);
}
button.onclick = function(e) {
    let data = input.value;
    data = data.replace(/(\d+)\!/g, (number) => {
        return Factorial(parseFloat(number));
    })

    data = data.replace(/(\d+)\^(\d+)/g, (operater, number, ex) => {
        console.log(operater, number, ex);
        return Math.pow(parseInt(number), parseInt(ex));
    })
    try {
        const result = eval(data);
        output.innerText = result;

        
    } catch (error) {
        alert("lỗi")
    }
}