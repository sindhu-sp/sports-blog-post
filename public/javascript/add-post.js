async function newFormHandler(event) {
    event.preventDefault();
  
    const sports_title = document.querySelector('input[name="post-sports_title"]').value;
    const post_comments = document.querySelector('input[name="post-comments"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        sports_title,
        post_comments,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  