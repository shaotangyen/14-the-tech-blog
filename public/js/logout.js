const logout = async () => {
  console.log("clicked logout");
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

function test(event) {
  console.log("clicked logout");
}

document.querySelector('#logout').addEventListener('click', test);