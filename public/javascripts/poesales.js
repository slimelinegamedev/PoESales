/**
 * Created by meirellu on 2/28/16.
 */

$(document).ready(function(){
    $('#regButton').on('click', addUser)
    //$('#regButton').on('click', testing)
    $('#unregButton').on('click', deleteUser)
})

function testing(event){
  event.preventDefault();
  $.ajax({
    type:'GET',
    url: '/emails'
  }).done(function(response){
    console.log(response)
  })
}

function addUser(event){
  event.preventDefault();

  var newEntry = {
    'email' : $('input#regemail').val()
  }

  $.ajax({
    type: 'POST',
    data: newEntry,
    url: '/emails/addemail',
    dataType: 'JSON'
  }).done(function(response){
    if (response.msg === ''){
      alert('Data Added Successfuly!')
    }else{
      alert('Error' + response.msg);
    }

  })
}

function deleteUser(event){
    event.preventDefault();

    var confirmation = confirm('Are you sure you wanto to delete this user?');

    if (confirmation === true){
        var email = {
            'email' : $('input#unregemail').val()
        }
        console.log(email)
        $.ajax({
            type:'POST',
            data : email,
            url : '/emails/rememail'
        }).done(function(response){
            if (response.msg === ''){
                alert('Email sucessfully removed!')
            }else{
                alert('Error: ' + response.msg);
            }
        })
    }else{
        return false;
    }
};
