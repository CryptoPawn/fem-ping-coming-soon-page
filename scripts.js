const email = "#email-input";
const submit = "#submit";
const errorBorderClass = ".email-input-error";
const errorTextClass = ".email-input-error-text";

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function() {
    console.log("js loaded");

    $(submit).on("click", function() {
        console.log("submit click");
        emailInput = $(email).val();
        if (validateEmail(emailInput)) {
            $(errorTextClass).css("display","none");
            $(email).css("border-color","var(--cN-white)");
        } else {
            $(errorTextClass).css("display","inline");
            $(email).css("border-color","var(--c-red)");
        }
    });
});