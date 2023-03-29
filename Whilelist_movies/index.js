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
		document.getElementById("i").style.display = "none"
		let moVies = []
		for(let mov of data.Search) {
			moVies += `
			<div class = "movie-desc">
				<img src = "${mov.Poster}"/>
				<div class = "movie-txt">
					<h3 class = "title">Title: ${mov.Title}</h3>
					<p>Type: ${mov.Type}</p>
					<p>Year: ${mov.Year}</p>
					<div class = "add">
						<p>Id: ${mov.imdbID}</p>
						<i class="fa-solid fa-circle-plus" id = "plus-btn"></i><p class = "bt">Watchlist</p>
					</div>
				</div>
			</div>
			<hr>
			`
		}
		movieList.innerHTML = moVies
	})
	.catch(err => {
		movieList.innerHTML = `
		<p class = "no-data">Unable to find what you’re looking for. Please try another search.</p>
		`
	})
}

searchButton.addEventListener("click", handleSearch)

// Add a movie to the list
const plusButton = document.getElementById("plus-btn")
const data = {
	title: movieTitle,
	body: movieList
}

const options = {
	method: "POST",
	body: JSON.stringify(data),
	header: {
		"Content-Type": "application/json"
	}
}

const handleAddMovies = () => {
	movieTitle = searchMovies.value
	fetch(`http://www.omdbapi.com/?apikey=634aecba&s=${movieTitle}`, options)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
}


plusButton.addEventListener("click", handleAddMovies)