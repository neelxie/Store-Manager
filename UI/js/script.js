//function to check username, if user name is 'admin' it redirects 
// to admin-dash else it redirects to attendant dash.

function checkUsername(){

    let response = document.getElementById("username").value;
    if (response == "admin"){
        location = 'admin.html';
    }
    else{
        location = 'attendash.html'
    }
    return false;
}