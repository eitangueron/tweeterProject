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
    if($(this).closest('div').find('.addCommentInputBar').val() !== ''){
        tweeter.addComment($(this).closest('.post').data().id,$(this).closest('div').find('.addCommentInputBar').val())
        refreshDisplay()
    }
})

$('#posts').on('click','i',function(){
    tweeter.removeComment($(this).closest('.post').data().id,$(this).closest('.postComments').data().id)
    refreshDisplay()
})