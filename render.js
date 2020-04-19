const Renderer = function () {

///tried to seprate comments and content - for cases in which content could be different (just words/img,vid..) - dannys tip - tho seems weird
    const renderComments = function(commentsContainer){
        for (let j in commentsContainer) {
            $('.comments:last').append(`<span class='postComments' data-id='${commentsContainer[j].id}'><i class="fas fa-trash-alt"></i> ${commentsContainer[j].text}<br></span>`)
        }
        $('.comments:last').append('<input class="addCommentInputBar" type="text" placeholder="Got something to say?">')
        $('.comments:last').append('<button class="commentBtn">Comment</button>')
    }
    

    const renderPosts = function (posts) {
        $('#posts').empty()
        for (let i in posts) {
            $('#posts').append(`<div class='post' data-id='${posts[i].id}'>${posts[i].text}</div>`)
            const $post = $('.post:last')
            $post.append(`<div class='comments' data-id='${posts[i].id} comment'></div>`)
            $post.append('<button class="delete">Delete Post</button>')
            renderComments(posts[i].comments)
        }
    }


    return { renderPosts }

}


// CHECK CHECK:

// const tweeter = Tweeter()
// const renderer = Renderer()

// renderer.renderPosts(tweeter.getPosts())