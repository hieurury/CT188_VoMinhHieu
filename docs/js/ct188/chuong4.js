const input = document.querySelector('input');
const button = document.querySelector('button');
console.log(input);


function Factorial(number) {
    if(number == 0 || number == 1) return 1;
    return number * Factorial(number - 1);
}
button.onclick = function(e) {
    let data = input.value;
    data = data.replace(/(\d+)\!/g, (number) => {
        return Factorial(parseFloat(number));
    })

    data = data.replace(/(\d+)\^(\d+)/g, (number, ex) => {
        return Math.pow(parseInt(number), parseInt(ex));
    })
    try {
        const result = eval(data);
        
    } catch (error) {
        alert("lỗi")
    }
    console.log(result);
}