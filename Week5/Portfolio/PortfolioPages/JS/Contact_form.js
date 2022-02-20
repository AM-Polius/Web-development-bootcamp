$('form').submit(function() {

    // Get the Login Name value and trim it
    var fname = $.trim($('#fname').val());
    var lname = $.trim($('#lname').val());
    var email = $.trim($('#email').val());

    // Check if empty of not
    if (fname === '') {
        alert('First name is empty.');
        return false;
    } else if (lname === '') {
        alert('Last Name is empty.');
        return false;
    } else if (email === '') {
        alert('email is empty.');
        return false;
    }
});