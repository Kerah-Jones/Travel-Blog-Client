const config = require('./../config')
const store = require('./../store')

// Create blog post

const createPostIndex = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/blogs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      blog: {
        title: data.blog.title,
        date: data.blog.date,
        post: data.blog.post
      }
    }
  })
}

const getPostIndex = function (data) {
  console.log(data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/blogs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updatePostIndex = function (data) {
//   console.log(data)
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/blogs',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       blog: {
//         title: data.blog.title,
//         date: data.blog.date,
//         post: data.blog.post
//       }
//     }
//   })
// }
//
// const deletePostIndex = function (data) {
//   console.log(data)
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/blogs',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createPostIndex,
  getPostIndex
  // updatePostIndex,
  // deletePostIndex
}
