let endpoint = `https://api.yelp.com/search?q=${}apiKey=${apiKey}`;

fetch(endpoint)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})