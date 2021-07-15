

// async function fetchTodos() {
//   const url = 'http://localhost:3000';
//   const response = await fetch(url, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   return await response.json();
// };

// fetchTodos().then((todos) => {

//   let output = "<div class='container mt-3'>";

//   for (const todo of todos) {
//     output += `<div  class="alert alert-primary">
//       ${todo.title}: ${todo.completed}
//     </div>`;
//   }

//   output += '</div>';
  
//   document.body.innerHTML = output;
// }).catch((err) => {
//   console.log(err);
// });

console.log(firebase);