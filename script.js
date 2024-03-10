const button = document.querySelector('button')
const quoteBody = document.querySelector('article')

button.addEventListener('click', () => {
    quoteBody.innerHTML =  `<p>Please wait..</p>`

    fetch('https://api.api-ninjas.com/v1/quotes?category=', {
        method: 'GET',
        headers: {
            'X-Api-Key': 'fEh6WNlW9o4zxyP31UpsVA==pjDPX2CoEIBFQynp'
        },
        contentType: 'application/json'
    }).then(res => res.json())
    .then(res => {
        quoteBody.innerHTML = `
        <h2 style="color: lightgreen">Your quote is:</h2>\n
        \n

        <h2>
            ${res[0].quote}
        </h2>
        <h3>
            - ${res[0].author}
        </h3>
    `
    })
    .catch(() => quoteBody.innerHTML = `<h2 style="color: red">Something has gone wrong...</h2>`)


})
