const store = require('./../store')

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
  // loop through array
  // select html element and use jquery to add blog title to element
  // create an empty string variable
  let authorHtml = ''

  // Loop over the authors and add html to the string variable
  responseData.authors.forEach(author => {
    // Create author HTML
    const oneAuthor = (`
      <h4>First Name: ${author.first_name}</h4>
      <p>Last Name: ${author.last_name}</p>
      <p>ID: ${author._id}</p>
      <br>
    `)

    // Concatenate it with `authorHtml`
    authorHtml += oneAuthor
  })

  // Place all the authors on the page:
  $('#content').html(authorHtml)
}

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
