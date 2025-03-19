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