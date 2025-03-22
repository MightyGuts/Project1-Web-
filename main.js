//More Button
const more = document.getElementById("more");
    more.addEventListener("mouseover", function () {
    more.style.transform = "scale(1.1)";
    more.style.transition = "transform 0.5s ease";
});
const more2 = document.getElementById("more");
    more2.addEventListener("mouseout", function () {
    more2.style.transform = "scale(1)";
});
//More Button/
//SignUp Button 
const SignUp = document.getElementById("SignUp");
    SignUp.addEventListener("mouseover", function () {
    SignUp.style.border = "1px solid white";
    SignUp.style.transform = "scale(1.1)";
    SignUp.style.transition = "transform 0.5 ease";

});
const SignUp2 = document.getElementById("SignUp");
SignUp2.addEventListener("mouseout", function () {
    SignUp2.style.border = "none";
    SignUp.style.transform = "scale(1)";
});
//SignUp Button/ 
//LogIn Button
const LogIn = document.getElementById("LogIn");
    LogIn.addEventListener("mouseover", function () {
    LogIn.style.border = "1px solid white";
    LogIn.style.transform = "scale(1.1)";
    LogIn.style.transition = "transform 0.5 ease";
    LogIn2.style.backgroundColor = "background-color: rgba(101, 97, 97, 0.7);"
});
const LogIn2 = document.getElementById("LogIn");
    LogIn2.addEventListener("mouseout", function () {
    LogIn2.style.transform = "scale(1)";
    LogIn2.style.backgroundColor = "background-color: rgba(101, 97, 97, 0.5);";
    LogIn.style.border = "none";
});
//LogIn Button/
