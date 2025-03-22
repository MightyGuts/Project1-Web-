const ButtonEventsOnclik = document.getElementById("ButtonEventsOnclik");
    ButtonEventsOnclik.addEventListener("click", function() {
            ButtonEventsOnclik.style.backgroundColor = ButtonEventsOnclik.style.backgroundColor === "red" ? "white" : "red";
});
ButtonEventsOnclik.addEventListener("click", function() {
    ButtonEventsOnclik.style.fontSize = ButtonEventsOnclik.style.fontSize === "40px" ? "30px" : "40px";
});






        const ButtonEventsDblclock = document.getElementById("ButtonEventsDblclick");
    ButtonEventsDblclick.addEventListener("dblclick", () => {
        ButtonEventsDblclick.style.backgroundColor = "yellow";
});

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
//Back Button/