const phoneBook = [
  {name: 'James', number: '555 555'},
  {name: 'Andrea', number: '444 444'}
];

function getPhoneNumbers() {

  setTimeout(() => {
    let output = '<ul>';
    for (const phoneNumber of phoneBook) {
      output += `<li>${phoneNumber.name} : ${phoneNumber.number}</li>`;
    }
    output += '</ul>';

    document.body.innerHTML = output;
  }, 1000);

}

function savePhoneNumber(phoneNumber, callback) {
  setTimeout(() => {
    phoneBook.push(phoneNumber);
    callback();
  }, 2000);
}

savePhoneNumber({ name: 'Jacques', number: '111 111' }, getPhoneNumbers);