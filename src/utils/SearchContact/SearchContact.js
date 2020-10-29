import ListItem from './ListItem';

function FormatList(contactList) {
  const formatedList = [];
  for (const i in contactList) {
    const listItem = new ListItem(contactList[i], true);
    formatedList.push(listItem);
  }
  return formatedList;
}

function SearchContactLocal(contactList, textInput) {
  const searchList = [];
  for (const i in contactList) {
    if (contactList[i].fullName.toUpperCase().includes(textInput) || contactList[i].email.toUpperCase().includes(textInput)) {
      const listItem = new ListItem(contactList[i], true);
      searchList.push(listItem);
    }
  }
  return searchList;
}

function SearchContactRemote(searchList, textInput, contactsList) {
  const newSerachList = searchList;
  for (const i in contactsList) {
    if (contactsList[i].fullName.toUpperCase().includes(textInput) || contactsList[i].email.toUpperCase().includes(textInput)) {
      if (!checkDuplicate(newSerachList, contactsList[i])) {
        const listItem = new ListItem(contactsList[i], false);
        newSerachList.push(listItem);
      }
    }
  }
  return newSerachList;
}

function ItemSelected(selectList, id, checked) {
  const newList = selectList;
  for (const i in newList) {
    if (newList[i].contact.id === id) {
      newList[i].checked = checked;
    }
  }
  return newList;
}

function CheckOneContact(contactList, searchList) {
  let checkedCounter = 0;
  let contactId = '';
  for (const i in searchList) {
    if (searchList[i].checked === true) {
      checkedCounter += 1;
      contactId = searchList[i].contact.id;
    }
  }
  if (checkedCounter === 1 && contactList.length > 1) {
    return false;
  }
  if (checkedCounter === 1 && contactList[0].contact.id === contactId) {
    return contactId;
  }

  return false;
}

function checkDuplicate(contactList, contact) {
  let duplicate = false;
  for (const i in contactList) {
    if (contactList[i].contact._id === contact._id) {
      duplicate = true;
      return duplicate;
    }
  }
  return duplicate;
}

export {
  FormatList, SearchContactLocal, SearchContactRemote, ItemSelected, CheckOneContact,
};
