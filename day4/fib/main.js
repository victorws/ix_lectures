

let countString = localStorage.getItem('count');

console.log(countString);

let count = countString ? parseInt(countString) : 0;

const button = document.getElementById('button');
const countElement = document.getElementById('count');

button.addEventListener('click', (event) => {
  count++;
  countElement.innerHTML = 'Count: ' + count;
  localStorage.setItem('count', count);
});

countElement.innerHTML = 'Count: ' + count;