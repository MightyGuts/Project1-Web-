//More Button
const more = document.getElementById("more");
    if (more) {
    more.addEventListener("mouseover", function () {
    more.style.transform = "scale(1.1)";
    more.style.transition = "transform 0.5s ease";
});
    const more2 = document.getElementById("more");
    more2.addEventListener("mouseout", function () {
    more2.style.transform = "scale(1)";
});
};
//More Button/
//SignUp Button 
const signUp = document.getElementById("signUp");
    if (signUp) {
    signUp.addEventListener("mouseover", function () {
    signUp.style.border = "1px solid white";
    signUp.style.transform = "scale(1.1)";
    signUp.style.transition = "transform 0.5 ease";

});
const SignUp2 = document.getElementById("signUp");
    SignUp2.addEventListener("mouseout", function () {
    SignUp2.style.border = "none";
    SignUp2.style.transform = "scale(1)";
});
};
//SignUp Button/ 
//LogIn Button
const LogIn = document.getElementById("LogIn");
if (LogIn) {
    LogIn.addEventListener("mouseover", function () {
    LogIn.style.border = "1px solid white";
    LogIn.style.transform = "scale(1.1)";
    LogIn.style.transition = "transform 0.5 ease";
    LogIn.style.backgroundColor = "background-color: rgba(101, 97, 97, 0.7);"
});
const LogIn2 = document.getElementById("LogIn");
    LogIn2.addEventListener("mouseout", function () {
    LogIn2.style.transform = "scale(1)";
    LogIn2.style.backgroundColor = "background-color: rgba(101, 97, 97, 0.5);";
    LogIn2.style.border = "none";
});
};
//LogIn Button/
// Mouseover Button
const backSignUp = document.getElementById("back");
if (backSignUp) {
    backSignUp.addEventListener("mouseover", function () {
    backSignUp.style.border = "1px solid white";
    backSignUp.style.transform = "scale(1.1)";
    backSignUp.style.transition = "transform 0.5 ease";
});
const back2 = document.getElementById("back");
    back2.addEventListener("mouseout", function () {
    back2.style.border = "none";
    back2.style.transform = "scale(1)";
});
};
// Mouseover Button/
//SignUp Button Submit 
const SignUp = document.getElementById("SignUpButton");
SignUpButton.addEventListener("mouseover", function () {
SignUpButton.style.border = "1px solid white";
SignUpButton.style.transform = "scale(1.1)";
SignUpButton.style.transition = "transform 0.5 ease";

});
const SignUpButton2 = document.getElementById("SignUpButton");
SignUpButton2.addEventListener("mouseout", function () {
SignUpButton2.style.border = "none";
SignUpButton2.style.transform = "scale(1)";
});
//SignUp Button Submit/ 
// Events Button Click
const ButtonEventsOnclik = document.getElementById("ButtonEventsOnclik");
    ButtonEventsOnclik.addEventListener("click", function() {
            ButtonEventsOnclik.style.backgroundColor = ButtonEventsOnclik.style.backgroundColor === "red" ? "white" : "red";
});
ButtonEventsOnclik.addEventListener("click", function() {
    ButtonEventsOnclik.style.fontSize = ButtonEventsOnclik.style.fontSize === "40px" ? "30px" : "40px";
});
// Events Button Click.




// Events Button DblClick
        const ButtonEventsDblclock = document.getElementById("ButtonEventsDblclick");
    ButtonEventsDblclick.addEventListener("dblclick", () => {
        ButtonEventsDblclick.style.backgroundColor = "yellow";
});
// Events Button DblClick.
// Events Button Mouseover/Mouseout
const ButtonEventsMouseover = document.getElementById("ButtonEventsMouseover");
    ButtonEventsMouseover.addEventListener("mouseover", function () {
    ButtonEventsMouseover.style.transform = "scale(1.3)";
    ButtonEventsMouseover.textContent = "I'm increased";
    ButtonEventsMouseover.style.transition = "transform 0.5s ease"
    
});
const ButtonEventsMouseout = document.getElementById("ButtonEventsMouseover");
ButtonEventsMouseout.addEventListener("mouseout", function () {
    ButtonEventsMouseout.style.transform = "scale(1)";
    ButtonEventsMouseout.textContent = "Mouseover";
});
// Events Button Mouseover/Mouseout.
//Back Button
const back = document.getElementById("back");
    back.addEventListener("mouseover", function () {
    back.style.border = "1px solid white";
    back.style.transform = "scale(1.1)";
    back.style.transition = "transform 0.5 ease";
});
const back2 = document.getElementById("back");
    back2.addEventListener("mouseout", function () {
    back2.style.border = "none";
    back2.style.transform = "scale(1)";
});
//Back Button.
// Cache clearing

// Cache clearing/



