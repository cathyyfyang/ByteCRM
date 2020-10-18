import ListItem from './ListItem';

function FormatList(userList){
    let formatedList = []
    for(let i in userList){
        const listItem = new ListItem(userList[i],true);
        formatedList.push(listItem);   
    }
    return formatedList;
}

function SearchContactLocal(userList,textInput){
    let searchList = [];
    for(let i in userList){
        if (userList[i].fullName.toUpperCase().includes(textInput)||userList[i].email.toUpperCase().includes(textInput) ){
                const listItem = new ListItem(userList[i],true)
                searchList.push(listItem);
        }
    }
    return searchList;
}

function SearchContactRemote(searchList,textInput,contactsList){
    let newSerachList = searchList;
    for(let i in contactsList){
        if (contactsList[i].fullName.toUpperCase().includes(textInput) ||contactsList[i].email.toUpperCase().includes(textInput)){  
                if(!checkDuplicate(newSerachList,contactsList[i])){
                    const listItem = new ListItem(contactsList[i],false)
                    newSerachList.push(listItem);
                }
        }
    }
    return newSerachList;
}

function ItemSelected(selectList,id,checked){
    let newList = selectList;
    for (let i in newList){
        if(newList[i].contact.id === id){
            newList[i].checked = checked
        }
    }
    return newList
}

function CheckOneContact(userList,searchList){
    let checkedCounter = 0;
    let contactId = "";
    for (let i in searchList){
        if(searchList[i].checked === true ){
            checkedCounter +=1;
            contactId = searchList[i].contact.id
        }
    }
    if(checkedCounter === 1 && userList.length > 1){
        return false
    }
    else if(checkedCounter === 1 && userList[0].contact.id === contactId){
        return contactId;
    }
    else{
        return false
    }
}

function checkDuplicate(userList,contact){
    let duplicate = false;
    for (let i in userList){
        if(userList[i].contact._id === contact._id){
            duplicate = true;
            return duplicate
        }
    }
    return duplicate;
}

export {FormatList,SearchContactLocal,SearchContactRemote,ItemSelected,CheckOneContact};