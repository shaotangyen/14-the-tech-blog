const newCommentHandler = async (event) => {
  event.preventDefault();

  const newComment = document.querySelector('#new-comment').value.trim();
  const articleId = document.querySelector("#articleId").value;

  if (newComment) {
    //if new comment is created, do a POST to create a comment
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ newComment, articleId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //if succeed, reload the page
    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment')
  .addEventListener('submit', newCommentHandler);