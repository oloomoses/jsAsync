// const posts = [
//   { title: 'post one', body: 'post one body'},
//   { title: 'post two', body: 'post two body'},
//   { title: 'post three', body: 'post three'}
// ]

// const { promises } = require("fs");
// const { resolve } = require("path")

// function getPosts(){
//   setTimeout(() => {
//     let output = '';

//     posts.forEach((post) => {
//       output += `<li>${ post.title }</li>`
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }


// function createPost(post){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = false;

//       if(!error) {
//         resolve();
//       } else {
//         reject('Error: Something went Wrong!');
//       }
//     }, 2000);
//   });
// }


// createPost({title: 'another post', body: 'this post is created after data is pulled from the db'})
//   .then(getPosts)
//   .catch(error => console.log(error))

// const calculateSquare = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(typeof number !== 'number'){
//         return reject(new Error('Argument is not of type number'));
//       }

//       result = number * number;
//       resolve(result)

//     }, 2000);
//   });
// }

// calculateSquare(10)
//   .then(value => { 
//     console.log('Success: ' + value);
//     return calculateSquare(4)
//   },
//     reason => { console.log(reason);
//   })
//   .then(value => {
//     console.log(value)
//   })

// const logToConsole = (somePromise) => {
//   somePromise.then(value => console.log(value));
// }

// const somePromise = new Promise((resolve, reject) => {
//   const word = 'Hello world';

//   resolve(word)
// });

// logToConsole(somePromise);
// logToConsole(Promise.resolve(8))

const aksJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I have a extra pen for you')
    }, 3000);
  })
}

const askEugene = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Sorry, No extra pen')
    }, 1000);

  });
}

const askSusy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Yeah, there is an extra pen in my bag'), 8000);
  });
}


Promise.race([askEugene(), aksJohn(), askSusy()])
  .then(answer => console.log(answer))
  .catch(error => console.log(error))












