let friends = [];
const inputName = document.getElementById('amigo');

function addFriend() {
    
    if (inputName.value == '') {
        console.log(inputName.value);
        alert('Insira um nome!');
    
    } else {
        friends.push(inputName.value)
        console.log(friends)
    }
    
    inputName.value = '';
}

