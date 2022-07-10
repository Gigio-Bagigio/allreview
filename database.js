const _v = {
    hasError : false,
    isValidPassword : false,


}

function formValidation(form) {
    _v.form = document.querySelector('${form}');
    _notificationItem = document.querySelector('${notification}');
}

function submitForm() {
    _v.form.addEventListern('submit', (e) => {
        e.stopPropagation();
        e.preventDefault();
        alert(1);
    }, true);

}


export default formValidation;