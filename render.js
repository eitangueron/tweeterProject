const Renderer = function () {

    const renderPosts = function (posts) {
        $('#posts').text('')
        for (post in posts) {
            $('#posts').append(`<div class='post' data-id='${posts[post].id}'>${posts[post].text}</div>`)
            $('.post:last').append(`<div class='comments' data-id='${posts[post].id} comment'></div>`)
            for (comment in posts[post].comments) {
                $('.comments:last').append(`<span class='postComments' data-id='${posts[post].comments[comment].id}'><i class="fas fa-trash-alt"></i> ${posts[post].comments[comment].text}<br></span>`)
            }
            $('.post:last').append('<input class="addCommentInputBar" type="text" placeholder="Got something to say?">')
            $('.post:last').append('<button class="commentBtn">Comment</button>')
            $('.post:last').append('<button class="delete">Delete Post</button>')
        }
    }


    return { renderPosts }

}


// CHECK CHECK:

// const tweeter = Tweeter()
// const renderer = Renderer()

// renderer.renderPosts(tweeter.getPosts())