const Post = require("../models/Post");

async function addComment(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-body').ariaValueMax;

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if(comment_text) {
        const response = await fetch ('/api/comment',{
            method: Post,
            body: JSON.stringify({post_id, comment_text}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', addComment);