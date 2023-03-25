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
			<div class = "movie-desc">
				<img src = "${mov.Poster}"/>
				<div class = "movie-txt">
					<h3 class = "title">Title: ${mov.Title}</h3>
					<p>Type: ${mov.Type}</p>
					<p>Year: ${mov.Year}</p>
					<p>Id: ${mov.imdbID}</p>
				</div>
			</div>
			<hr>
			`
		}
		movieList.innerHTML = moVies
	})
}

searchButton.addEventListener("click", handleSearch)


