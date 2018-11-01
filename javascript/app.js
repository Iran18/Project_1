//On submit function.
function writeResults () {
var resultsTextJS = document.getElementById("results_text");
    var apiSearchJS = document.getElementById("api_search");
        resultsTextJS.innerHTML = apiSearchJS.value;
    };