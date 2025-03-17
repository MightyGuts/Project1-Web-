let ButtonEventsOnclik = document.getElementById("ButtonEventsOnclik");
    

document.getElementById("ButtonEventsOnclik").onclick = function(ButtonEventsOnclik) {
    ButtonEventsOnclik.textContent = "I'm increased";
}
let ButtonEventsMouseover = document.getElementById("ButtonEventsMouseover");
    ButtonEventsMouseover.addEventListener("mouseover", function () {
    ButtonEventsMouseover.style.transform = "scale(1.3)";
    ButtonEventsMouseover.textContent = "I'm increased";
    ButtonEventsMouseover.style.transition = "transform 0.5s ease"
    
});
let ButtonEventsMouseout = document.getElementById("ButtonEventsMouseover");
ButtonEventsMouseout.addEventListener("mouseout", function () {
    ButtonEventsMouseout.style.transform = "scale(1)";
    ButtonEventsMouseout.textContent = "Mouseover";
});