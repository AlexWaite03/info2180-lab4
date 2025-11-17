document.getElementById('searchButton').addEventListener('click', function() {
    // This function will be called when the button is clicked 
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        // Check if the request is complete and was successful
        if (this.readyState == 4 && this.status == 200) {
            let Avengers = this.responseText.trim().split('\n').join('\n ');
            // Display the result in an alert box
            alert(Avengers);
        }
    };
    // This sends an asynchronous GET request to the server 
    ajax.open("GET", "superheroes.php", true);
    // Send the request
    ajax.send();
});
