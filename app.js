let friends = [];
const inputName = document.getElementById('amigo');

function addFriend() {
    const friendInput = inputName.value.trim();

    if (friendInput === '') {
        alert('Insira um nome!');
    
    } else {
        friends.push(friendInput);
    }
    inputName.value = '';
    showFriend();
}


function showFriend() {
    const friendsList = document.getElementById('friendsList');
    const itemList = document.createElement('li');

    for (let i = 0; i < friends.length; i++) {
        itemList.textContent = `${friends[i]}`;
        friendsList.appendChild(itemList);
    }
}