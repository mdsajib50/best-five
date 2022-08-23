let playerList;
function player(elementId, playerId, playerListId){
    const playerName = document.getElementById(playerId);

        const playerValue = playerName.innerText;
    
        playerList = document.getElementById(playerListId);
    
        if(playerList.children.length < 5){

        let li = document.createElement('li');
    
        li.setAttribute('id', 'list-item');

        li.appendChild(document.createTextNode(playerValue));

        playerList.appendChild(li);

         document.getElementById(elementId).disabled = true;

         document.getElementById(elementId).setAttribute('class', 'bg-gray-500 text-xl text-white py-2 px-8 text-center mx-20 mt-6');
        
        }else{
            alert('Not more player add')
        }
}

