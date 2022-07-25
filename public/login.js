async function login(event){
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if(username && password){
        const response = await fetch ('api/postroute.js', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.replace('/dash');
        } else {
            alert('Error');
        }
    }
};

document.querySelector('.login').addEventListener('click', login);