'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const blogEvents = require('./blog/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-post').on('submit', blogEvents.onCreatePost)
  $('#get-posts').on('submit', blogEvents.onGetPost)
  $('#update-post').on('submit', blogEvents.onUpdatePost)
  $('#delete-post').on('submit', blogEvents.onDeletePost)
  $('#access-blog').on('submit', blogEvents.onAccessBlog)
  $('#sign-out').hide()
  $('#create-post').hide()
  $('#update-post').hide()
  $('#delete-post').hide()
  $('#get-posts').hide()
  $('#change-password').hide()
  $('#access-blog').hide()

})
