// CHECK CHECK:
//
// const Tweeter= function(){

//     const _posts = [
//     {
//         text: "First post!",
//         id: "p1",
//         comments: [
//             { id: "c1", text: "First comment on first post!" },
//             { id: "c2", text: "Second comment on first post!!" },
//             { id: "c3", text: "Third comment on first post!!!" }
//         ]
//     },
//     {
//         text: "Aw man, I wanted to be first",
//         id: "p2",
//         comments: [
//             { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//             { id: "c5", text: "Yeah, believe in yourself!" },
//             { id: "c6", text: "Haha second place what a joke." }
//         ]
//     }
//     ]

//     let postIdCounter = 2

//     let commentIdCounter = 6

const Tweeter= function(){
    
    const _posts = []
    
    let postIdCounter = 0

    let commentIdCounter = 0


    const getPosts = ()=> _posts

    const addPost = (text) => {
    _posts.push(
        {
            text:text ,
            id:'p' + (postIdCounter+1),
            comments:[],

        }
    )
    postIdCounter++
    }

    const removePost = (postID) => {
    for(let i in _posts){
        if (_posts[i].id === postID){
            _posts.splice(i,1)
        }
    }
    postIdCounter--
    }


    // addPost('third?')
    // console.log(_posts)

    // removePost('p1')
    // console.log(_posts)

    const addComment = (postID,text) => {
    for(let j in _posts){
        if (_posts[j].id === postID){
            _posts[j].comments.push(
                {
                    id:'c' + (commentIdCounter+1),
                    text,
                }
            )
            commentIdCounter++
        }
    }
    }

    const removeComment = (postID,commentID) => {
    for(let x in _posts){
        if (_posts[x].id === postID){
            for(let y in _posts[x].comments){
                if (_posts[x].comments[y].id === commentID){
                    _posts[x].comments.splice(y,1)
                    commentIdCounter--
                }
            }
        }
    }
    }


    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


/*
///////CHECK CHECK:


// console.log(getPosts())
// addPost('practice post')
// console.log(getPosts())
// addComment('p3','added comment?')
// console.log(getPosts())
// removeComment('p3','c7')
// console.log(getPosts())
// removePost('p3')
// console.log(getPosts())

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("p3","Damn straight it is!")
tweeter.addComment("p2","Second the best!")
console.log(tweeter.getPosts())

//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())

//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}

*/