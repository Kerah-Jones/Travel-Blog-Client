const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreatePost = function (event) {
  event.preventDefault()
  console.log('create post ran')

  const form = event.target
  const data = getFormFields(form)
  api.createPostIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onGetPost = function (event) {
  event.preventDefault()
  console.log('get post ran')

  const form = event.target
  const data = getFormFields(form)
  api.getPostIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.getPostSuccess)
    .catch(ui.getPostFailure)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  console.log('update post ran')

  const form = event.target
  const data = getFormFields(form)
  api.updatePostIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}
const onDeletePost = function (event) {
  event.preventDefault()
  console.log('delete post ran')

  const blogId = $(event.target).closest('section').data('id')
  const form = event.target
  const data = getFormFields(form)
  api.deletePostIndex(data)
  api.deleteBook(blogId)
  // connect events funtions to ui messages for change password
    .then(() => onGetPost(event))
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFailure)
}

module.exports = {
  onCreatePost,
  onGetPost,
  onUpdatePost,
  onDeletePost
}
