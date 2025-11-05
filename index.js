$(document).ready(function() {
    // Handler for when the DOM is fully loaded
    console.log('Document is ready');
    
    // Basic message handler function
    function showMessage(message) {
        $('.message').text(message);
    }

    // Example usage:
    // showMessage('Hello World!');
});