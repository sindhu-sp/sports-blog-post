async function updateFormHandler(event) {
    event.preventDefault();

    const sports_title = document.querySelector('input[name="post-sports_title"]').value.trim();
    const post_comments = document.querySelector('input[name="post-comments"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body:JSON.stringify({
            sports_title,
            post_comments
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
  
  }
  
  var cf=document.querySelector('.update-post-form');
 if (cf){
  cf.addEventListener('submit', updateFormHandler);
 }