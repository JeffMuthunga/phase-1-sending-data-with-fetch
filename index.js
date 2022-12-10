const body =document.querySelector('body')
function submitData(string1, string2) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: string1,
            email: string2
            })
        
            })
        .then(response => response.json())
        .then(data => {
            
            const h1 = document.createElement('h1')
            h1.textContent = data.id
            body.appendChild(h1)
            })
        .catch(error => {
            alert('Haha didnt go through')
            const hh1 = document.createElement('h1')
            hh1.textContent = error.message
            body.appendChild(hh1)
        })
}
