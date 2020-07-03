
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
  $('#message6').css('color', 'green')
  const showBlogsHtml = showBlogsTemplate({ blogs: responseGetPost.blogs })
  $('.content').html(showBlogsHtml)
  $('#message5').hide('Post Successfully Created')
  $('#message7').hide('Post Successfully Updated!')
  $('#message8').text('Deleted Post!')
}

const getPostFailure = function (responseGetPost) {
  $('#message6').text('Failed to Get Post')
  $('form').trigger('reset')
  $('#message6').css('color', 'red')
}

const updatePostSuccess = function (responseUpdatePost) {
  // reset when sign in sucessful
  $('#message7').text('Post Successfully Updated!')
  $('form').trigger('reset')
  $('#message7').css('color', 'green')
}

const updatePostFailure = function (responseUpdatePost) {
  $('#message7').text('Failed Update Post')
  $('form').trigger('reset')
  $('#message7').css('color', 'red')
}

const deletePostSuccess = function (responseDeletePost) {
  // reset when sign in sucessful
  $('#message8').text('Deleted Post!')
  $('form').trigger('reset')
  $('#message8').css('color', 'green')
}

const deletePostFailure = function (responseDeletePost) {
  $('#message8').text('Failed to Delete Post')
  $('form').trigger('reset')
  $('#message8').css('color', 'red')
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
