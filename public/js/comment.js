const newCommentHandler = async (event) => {
  event.preventDefault();

  const newComment = document.querySelector('#new-comment').value.trim();
  const articleId = document.querySelector("#articleId").value;

  if (newComment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ newComment, articleId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/article/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete article');
//     }
//   }
// };

document
  .querySelector('.new-comment')
  .addEventListener('submit', newCommentHandler);

// document
//   .querySelector('.article-list')
//   .addEventListener('click', delButtonHandler);
