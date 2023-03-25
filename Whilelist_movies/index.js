const searchMovies = document.getElementById("search-movies")
const searchButton = document.getElementById("search-btn")
const movieList = document.getElementById("movie-list")
let movieTitle


const handleSearch = () => {
	movieTitle = searchMovies.value
	fetch(`http://www.omdbapi.com/?apikey=634aecba&s=${movieTitle}`)
	.then(resp => resp.json())
	.then(data => {
		console.log(data)
		let moVies = []
		for(let mov of data.Search) {
			moVies += `
			<h2>${mov.Title}</h2>
			`
		}
		movieList.innerHTML = moVies
	})
}

searchButton.addEventListener("click", handleSearch)


