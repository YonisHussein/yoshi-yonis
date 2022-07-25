async function logout(){
    const response = await fetch ('/api/users/postRoutes', {
        method: 'POST',
        headers: {'Content-Types': 'application/json'}
    });
    if(response.ok){
        document.location.replace('/');
    } else {
        alert('Error');
    }
};

document.querySelector('logout').addEventListener('click', logout);