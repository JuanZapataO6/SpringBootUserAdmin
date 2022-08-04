// Call the dataTables jQuery plugin
$(document).ready(function() {
   //On ready
});


async function usersRegister() {
let data ={};
data.name = document.getElementById('txtName').value;
data.lastname = document.getElementById('txtLastname').value;
data.email = document.getElementById('txtEmail').value;
data.password= document.getElementById('txtPassword').value;

let passwordRepeat = document.getElementById('txtRepeatPassword').value;
if(passwordRepeat!=data.password){
    alert('The password dont match');
    return;
}
    //Fetch Function
    const request = await fetch ('api/usuarios', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });
}
