// document.getElementById('btn-Post').addEventListener('click', function(){
//     const commentBox = document.getElementById('new-comment');
//     const newComment = commentBox.value;
//     const commentContainer = document.getElementById('comment-container');
//     const p = document.createElement('p');
//      p.innerText = newComment;
//      commentContainer.appendChild(p);
//     commentBox.value='';
// });

function postButton(){
    newCommentBox('new-comment','comment-container');

}
 function newCommentBox(id,event){
    const commentBox = document.getElementById(id);
    const newComment = commentBox.value;

    const commentContainer = document.getElementById(event);
    const p = document.createElement('p');
     p.innerText = newComment;
     commentContainer.appendChild(p);
    commentBox.value='';
}



