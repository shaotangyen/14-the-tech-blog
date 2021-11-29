const newPostHandler = async (event) => {
    event.preventDefault();

    const editedTitle = document.querySelector('#edit-post-title').value.trim();
    const editedContent = document.querySelector('#edit-post-content').value.trim();
    const id = document.querySelector('#id').getAttribute("data-id");

    if (event.target.value == "update") {
        // if update button is clicked, use PUT to update the article 
        const response = await fetch(`/api/article/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, editedTitle, editedContent }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        //if success, redirect to dashboard
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Failed to update article');
        }
    } else if (event.target.value == "cancel") {
        // if cancel button is clicked, redirect to dashboard
        document.location.replace(`/dashboard`);
    }

};


document
    .querySelector('.edit-post')
    .addEventListener('click', newPostHandler);
