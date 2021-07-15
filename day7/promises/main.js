const phoneBook = [
  {name: 'James', number: '555 555'},
  {name: 'Andrea', number: '444 444'}
];

function getPhoneNumbers() {

  // setTimeout(() => {
    let output = '<ul>';
    for (const phoneNumber of phoneBook) {
      output += `<li>${phoneNumber.name} : ${phoneNumber.number}</li>`;
    }
    output += '</ul>';

    document.body.innerHTML = output;
  // }, 1000);

}

function savePhoneNumber(phoneNumber) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      phoneBook.push(phoneNumber);
      
      const error = false;

      if (!error) {
        resolve(); // success  
      } else {
        reject(new Error('The function Failed'));
      }

    }, 2000);

  });
}

async function startApp() {
  try {

    console.log('start');

    await savePhoneNumber({ name: 'Jacques', number: '111 111' });

    console.log('end');
    
    getPhoneNumbers();
  } catch(err) {
    // Handle errors
    console.log('Failed: ', err);
  }
}

startApp().then(() => console.log('done'));