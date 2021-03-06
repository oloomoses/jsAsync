// const { setInterval } = require("timers")

// const { stringify } = require("querystring");

// const posts = [
//   { title: 'post one', body: 'post one body'},
//   { title: 'post two', body: 'post two body'},
//   { title: 'post three', body: 'post three'}
// ]

// function getPosts(){
//   setTimeout(() => {
//     let output = '';

//     posts.forEach((post) => {
//       output += `<li>${ post.title }</li>`
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }


// function createPost(post, callback){
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }


// createPost({title: 'another post', body: 'this post is created after data is pulled from the db'}, getPosts);


function calculateSquare(num, callback){
  setTimeout(() => {

    if (typeof num !== 'number'){
      callback(new Error('this is not a number'));
      return
    }

    const res = num * num;
    callback(null, res)

  }, 1000);
}

calculateSquare('str',  (error, res) => {

  if(error !== null){
    console.log('Error: ' + String(error));
    return
  }
  console.log(res)
})