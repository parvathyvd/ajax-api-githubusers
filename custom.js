
document.getElementById('button').addEventListener('click', getUsers);

function getUsers()
{
let xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open('GET','https://api.github.com/users',true );

xhr.onload = function() {
    if(this.status == 200) {
       // console.log(this.responseText);

        let users = JSON.parse(this.responseText);
        let output  = `<ul class="allusers">`;
        users.map(newUser => {
            output += 
            `<li class="box"><p>Name : ${newUser.login}</p> <img class="avatar" src="${newUser.avatar_url}"</li>`
        });
        output+=`</ul>`
        document.getElementById('users').innerHTML = output;
    }
    else{
        console.log('error');
    }
}


xhr.send();

}