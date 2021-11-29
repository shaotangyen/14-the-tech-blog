const newPostHandler = async (event) => {
    event.preventDefault();

    const editedTitle = document.querySelector('#edit-post-title').value.trim();
    const editedContent = document.querySelector('#edit-post-content').value.trim();
    const id = document.querySelector('#id').getAttribute("data-id");

    if (event.target.value =="update") {
        const response = await fetch(`/api/article/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, editedTitle, editedContent }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            console.log(response);
            alert('Failed to update article');
        }
    } else if (event.target.value =="cancel"){
        document.location.replace(`/dashboard`);
    }

};

document
    .querySelector('.edit-post')
    .addEventListener('click', newPostHandler);
