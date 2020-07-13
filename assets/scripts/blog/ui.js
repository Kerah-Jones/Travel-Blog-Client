
const showBlogsTemplate = require('../templates/blog-post.handlebars')

const createPostSuccess = function (responseCreatePost) {
  // reset when sign in sucessful
  $('#message5').text('Post Successfully Created')
  $('form').trigger('reset')
  $('#message5').css('color', 'green')
  $('#message5').show('Post Successfully Created')
  $('#message5').css('background-color', 'white')
}

const createPostFailure = function (responseCreatePost) {
  $('#message5').text('Failed to Create Post')
  $('form').trigger('reset')
  $('#message5').css('color', 'red')
  $('#message5').show('Failed to Create Post')
  $('#message5').css('background-color', 'white')
}

const getPostSuccess = function (responseGetPost) {
  // reset when sign in sucessful
  $('#message6').text('Here Are All Posts!')
  $('form').trigger('reset')
  $('#message6').css('color', 'green')
  const showBlogsHtml = showBlogsTemplate({ blogs: responseGetPost.blogs })
  $('.content').html(showBlogsHtml)
  $('#message5').hide('Post Successfully Created')
  $('#message7').hide('Post Successfully Updated!')
  $('#message8').hide('Deleted Post!')
  $('#message6').css('background-color', 'white')
}

const getPostFailure = function (responseGetPost) {
  $('#message6').text('Failed to Get Post')
  $('form').trigger('reset')
  $('#message6').css('color', 'red')
  $('#message6').css('background-color', 'white')
}

const updatePostSuccess = function (responseUpdatePost) {
  // reset when sign in sucessful
  $('#message7').text('Post Successfully Updated!')
  $('form').trigger('reset')
  $('#message7').css('color', 'green')
  $('#message7').show('Post Successfully Updated!')
  $('#message7').css('background-color', 'white')
}

const updatePostFailure = function (responseUpdatePost) {
  $('#message7').text('Failed to Update: You are not the author of this post, please check BlogId')
  $('form').trigger('reset')
  $('#message7').css('color', 'red')
  $('#message7').show('Failed to Update: You are not the author of this post, please check BlogId')
  $('#message7').css('background-color', 'white')
}

const deletePostSuccess = function (responseDeletePost) {
  // reset when sign in sucessful
  $('#message8').text('Deleted Post!')
  $('form').trigger('reset')
  $('#message8').css('color', 'green')
  $('#message8').show('Deleted Post!')
  $('#message8').css('background-color', 'white')
}

const deletePostFailure = function (responseDeletePost) {
  $('#message8').text('Failed to Delete: You are not the author of this post, please check BlogId')
  $('form').trigger('reset')
  $('#message8').css('color', 'red')
  $('#message8').show('Failed to Delete: You are not the author of this post, please check BlogId')
  $('#message8').css('background-color', 'white')
}

const reviewPostSuccess = function (responseDReviewPost) {
  // reset when sign in sucessful
  $('.message10').text('Review Posted!')
  $('form').trigger('reset')
  $('.message8').css('color', 'green')
}

const reviewPostFailure = function (responseDeletePost) {
  $('.message10').text('Failed to Review')
  $('form').trigger('reset')
  $('.message8').css('color', 'red')
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostSuccess,
  getPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
  reviewPostFailure,
  reviewPostSuccess
}
