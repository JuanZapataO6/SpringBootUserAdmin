// Call the dataTables jQuery plugin
$(document).ready(function() {
    usersLoad();
  $('#users').DataTable();
});
async function usersLoad () {
//Fetch Function
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const users = await request.json();
  
  let userList = '';
  for (let user of users){
    let finishTelephone= user.telephone == null ? '-': user.telephone;
    let deleteButton = '<a href="#" onclick= "deleteUser('+ user.id +')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let userHtml = '<tr><td>'+ user.id 
                    + '</td><td>'+ user.name + ' ' + user.lastname 
                    + '</td><td>'+ user.email 
                    + '</td><td>'+ finishTelephone 
                    + '</td><td>'+ deleteButton +'</td></tr>';
  userList += userHtml;
  }
  document.querySelector('#users tbody').outerHTML = userList;
}
async function deleteUser(id){
  if(!confirm("Are you sure, this user")){
    return;
  }
  const request = await fetch('api/usuarios/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  location.reload();
}