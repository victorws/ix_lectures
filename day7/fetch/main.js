

// async function fetchPosts() {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const response = await fetch(url, {
//     headers: {
//       method: 'GET',
//       'Content-Type': 'application/json',
//     }
//   });

//   const json = await response.json();
//   return json;
// }

// console.log('Start');

// fetchPosts().then((json) => {
//   console.log(json);
// }).catch(err => {
//   console.log(err);
// });



// async function fetchComments() {
//   const url = 'https://jsonplaceholder.typicode.com/comments';
//   const response = await fetch(url, {
//     headers: {
//       method: 'GET',
//       'Content-Type': 'application/json',
//     }
//   });

//   const json = await response.json();
//   return json;
// }

// console.log('Start');

// fetchComments().then((comments) => {

//   let output = '<ol>';

//   for (const comment of comments) {
//     output += `<li>
//       <div>${comment.name}</div>
//       <div>${comment.email}</div>
//       <div>${comment.body}</div>
//     </li>`;
//   }

//   output += '</ol>';
//   document.body.innerHTML = output;
// }).catch(err => {
//   console.log(err);
// });


async function createPost(post) {
  const url = 'https://jsonplaceholder.typicode.com/posts/test';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const json = await response.json();
  console.log(response);
  console.log(json);

  return json;
}


const post = {
  unexpected: 'test'
  // body: "this is a fancy test",
  // title: "Fancy Test",
  // userId: 2,
}

createPost(post).then((json) => {
  // handle data here
}).catch(err => {
  console.log(err);
});