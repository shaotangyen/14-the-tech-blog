const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-post-title').value.trim();
  const content = document.querySelector('#new-post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/articles`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create article');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/article/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/article');
    } else {
      alert('Failed to delete article');
    }
  }
};

document
  .querySelector('.new-post')
  .addEventListener('submit', newPostHandler);

// document
//   .querySelector('.article-list')
//   .addEventListener('click', delButtonHandler);
