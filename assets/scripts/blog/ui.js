const store = require('./../store')
const showBlogsTemplate = require('../templates/blog-post.handlebars')

const createPostSuccess = function (responseCreatePost) {
  // reset when sign in sucessful
  $('#message5').text('Post Successfully Created')
  $('form').trigger('reset')
  $('#message5').css('color', 'green')
}

const createPostFailure = function (responseCreatePost) {
  $('#message5').text('Failed to Create Post')
  $('form').trigger('reset')
  $('#message5').css('color', 'red')
}

const getPostSuccess = function (responseGetPost) {
  // reset when sign in sucessful
  $('#message6').text('Here Are Your Posts!')
  $('form').trigger('reset')
  $('#message5').css('color', 'green')
  console.log(responseGetPost.blogs)
  const showBlogsHtml = showBlogsTemplate({ blogs: responseGetPost.blogs })
  $('.content').html(showBlogsHtml)
}
// loop through array
// select html element and use jquery to add blog title to element
// create an empty string variable
//   let blogHtml = ''
//
//   // Loop over the authors and add html to the string variable
//   responseGetPost.blogs.forEach(blog => {
//     // Create author HTML
//     const allBlogs = (`
//       <h4>Title: ${blog.title}</h4>
//       <p>Date: ${blog.date}</p>
//       <p>Post: ${blog.post}</p>
//       <p>ID: ${blog._id}</p>
//       <br>
//     `)
//
//     // Concatenate it with `authorHtml`
//     blogHtml += allBlogs
//   })
//
//   // Place all the authors on the page:
//   $('#content').html(blogHtml)
// }

const getPostFailure = function (responseCreatePost) {
  $('#message6').text('Failed to Get Post')
  $('form').trigger('reset')
  $('#message5').css('color', 'red')
}

const updatePostSuccess = function (responseCreatePost) {
  // reset when sign in sucessful
  $('#message7').text('Post Successfully Updated!')
  $('form').trigger('reset')
  $('#message5').css('color', 'green')
}

const updatePostFailure = function (responseCreatePost) {
  $('#message7').text('Failed Update Post')
  $('form').trigger('reset')
  $('#message5').css('color', 'red')
}

const deletePostSuccess = function (responseCreatePost) {
  // reset when sign in sucessful
  $('#message8').text('Deleted Post!')
  $('form').trigger('reset')
  $('#message5').css('color', 'green')
}

const deletePostFailure = function (responseCreatePost) {
  $('#message8').text('Failed to Delete Post')
  $('form').trigger('reset')
  $('#message5').css('color', 'red')
}


module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostSuccess,
  getPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure
}
