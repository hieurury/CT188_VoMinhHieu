//khai báo các modal của form
const loginChange = document.querySelector(".change-form-btn.login");
const registerChange = document.querySelector(".change-form-btn.register");
const authLogin = document.querySelector('.auth.auth-login');
const authRegister = document.querySelector('.auth.auth-register');
//khai báo nodeList cho các input
const inputList = document.querySelectorAll('.auth-right input');

//hàm giúp chuyển đổi nhanh giữa các modal
function changeDisplay(hiddenElement, showElement) {
    hiddenElement.classList.add('d-none');
    showElement.classList.remove('d-none');
}
loginChange.onclick = function(e) {
    changeDisplay(authLogin, authRegister);
}
registerChange.onclick = function(e) {
    changeDisplay(authRegister, authLogin);
}

//kiểm tra nội dung phần tử để chỉnh sửa UI cho phù hợp
inputList.forEach(input => {
    input.addEventListener('focusout', function(e) {
        const parentInput = input.parentElement;
        const inputDes = parentInput.querySelector('.input-des');
        if(input.value != '') inputDes.classList.add('input-des-forward');
        else inputDes.classList.remove('input-des-forward')
    })
})