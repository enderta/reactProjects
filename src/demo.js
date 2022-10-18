fetch(`https://api.tvmaze.com/shows`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })