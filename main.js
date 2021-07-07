const tweeter = Tweeter()
const renderer = Renderer()

const refreshDisplay = function(){
    renderer.renderPosts(tweeter.getPosts())
}

refreshDisplay()

const post = function(){   
    if($('#input').val() !== ''){
        tweeter.addPost($('#input').val())
        $('#input').val('')
        refreshDisplay()
    }
}

$('#posts').on('click','.delete',function(){
    tweeter.removePost($(this).closest('.post').data().id)
    refreshDisplay()
})

$('#posts').on('click','.commentBtn',function(){
    let commentInputBar = $(this).closest('div').find('.addCommentInputBar')
    let post = $(this).closest('.post').data().id
    let commentContent = $(this).closest('div').find('.addCommentInputBar').val()
    if(commentInputBar.val() !== ''){
        tweeter.addComment(post,commentContent)
        refreshDisplay()
    }
})

$('#posts').on('click','i',function(){
    let post = $(this).closest('.post').data().id
    let comment = $(this).closest('.postComments').data().id
    tweeter.removeComment(post,comment)
    refreshDisplay()
})