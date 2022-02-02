// Event listener added to first button "w"
//document.querySelector("button").addEventListener("click", handleClick);

var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked");
    });
    // what to do when click detected

}