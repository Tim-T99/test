
document.getElementById('capitalizeButton').addEventListener('click', function
    //prevent default button behavior
    (event) {event.preventDefault();

    //get input value
    const input = document.getElementById('inputText').value;

    //capitalize first letter of very word
    const result = input.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    //display result
    document.getElementById('output').innerText = result;

});