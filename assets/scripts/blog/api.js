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
const reviewPostIndex = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      review: {
        title: data.review.title,
        content: data.review.content
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

const updatePostIndex = function (data) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/blogs/' + data.blog.id,
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

const deletePostIndex = function (blogId) {
  console.log(blogId)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/blogs/' + blogId.blog.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      blog: {
        _id: blogId.blog.id
      }
    }
  })
}

module.exports = {
  createPostIndex,
  getPostIndex,
  updatePostIndex,
  deletePostIndex,
  reviewPostIndex
}
