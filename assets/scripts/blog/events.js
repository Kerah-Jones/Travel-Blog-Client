const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreatePost = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.createPostIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onGetPost = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.getPostIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.getPostSuccess)
    .catch(ui.getPostFailure)
}

const onUpdatePost = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.updatePostIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}
const onDeletePost = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.deletePostIndex(data)

    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFailure)
}

// button to gain access to the blog
const onAccessBlog = function (event) {
  event.preventDefault()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-post').show()
  $('#update-post').show()
  $('#delete-post').show()
  $('#get-posts').show()
  $('#access-blog').hide()
}
const onShowSignIn = function (event) {
  event.preventDefault()
  $('#have-account-message').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#show-sign-in').hide()
  $('#create-account-message').show()
  $('#create-account-message').text('Need to Create an Account!')
  $('#show-sign-up').show()
}
const onShowSignUp = function (event) {
  event.preventDefault()
  $('#create-account-message').hide()
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#create-account-message').hide()
  $('#show-sign-up').hide()
  $('#show-sign-in').show()
  $('#have-account-message').show()
}

const onReviewPost = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  const blogId = $(event.target).data('id')
  api.reviewPostIndex(data, blogId)

    .then(ui.reviewPostSuccess)
    .catch(ui.reviewPostFailure)
}

module.exports = {
  onCreatePost,
  onGetPost,
  onUpdatePost,
  onDeletePost,
  onAccessBlog,
  onReviewPost,
  onShowSignIn,
  onShowSignUp
}
