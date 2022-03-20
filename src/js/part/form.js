(function () {

    const maskPhoneInputs = document.querySelectorAll(".js-mask-phone");
    maskPhoneInputs.forEach(maskPhoneInput => {
        intlTelInput(maskPhoneInput, {
            initialCountry: 'ru',
        });
    });

})();