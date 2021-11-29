const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-post-title').value.trim();
  const content = document.querySelector('#new-post-content').value.trim();

  if (title && content) {
    //if there's something in the title/content, do a POST to create a new article
    const response = await fetch(`/api/article`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if success, redirect to dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create article');
    }
  }
};

const buttonHandler = async (event) => {
  
  if (event.target.hasAttribute('data-id') && event.target.value == "delete") {
    //if delete button is clicked, do a DELETE to delete the post
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/article/${id}`, {
      method: 'DELETE',
    });

    //if success, redirect to dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete article');
    }

  } else if (event.target.hasAttribute('data-id') && event.target.value == "edit") {
    //if edit is clicked, go to the edit page
    const id = event.target.getAttribute('data-id');

    document.location.replace(`/article/${id}/edit`);
  }

};

//to hide the new post button and show the post form
const newPostBtnHandler = (event) => {
  document.querySelector(".new-post-form").style.display = "block";
  document.querySelector(".new-post-button").style.display = "none";
}

const init = () => {
  document.querySelector(".new-post-form").style.display = "none";
}

init();

document
  .querySelector('.new-post')
  .addEventListener('submit', newPostHandler);

document
  .querySelector('.article-list')
  .addEventListener('click', buttonHandler);

document
  .querySelector('.new-post-button')
  .addEventListener('click', newPostBtnHandler);
