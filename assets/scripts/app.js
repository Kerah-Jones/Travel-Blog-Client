'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const blogEvents = require('./blog/events.js')
// const handleBars = require('./templates/blog-post.handlebars')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#show-sign-in').on('submit', blogEvents.onShowSignIn)
  $('#show-sign-up').on('submit', blogEvents.onShowSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-post').on('submit', blogEvents.onCreatePost)
  $('#get-posts').on('submit', blogEvents.onGetPost)
  $('#update-post').on('submit', blogEvents.onUpdatePost)
  $('#delete-post').on('submit', blogEvents.onDeletePost)
  $('#access-blog').on('submit', blogEvents.onAccessBlog)
  $('.content').on('submit', '.review-post', blogEvents.onReviewPost)
  //    function () { console.log('we submitted the `.review-post` inside of the `.review-post`') })
  $('#sign-out').hide()
  $('#have-account-message').text('Already Have an Account!')
  $('#create-post').hide()
  $('#update-post').hide()
  $('#delete-post').hide()
  $('#get-posts').hide()
  $('#change-password').hide()
  $('#access-blog').hide()
  $('#sign-in').hide()
  $('#show-sign-up').hide()
})
