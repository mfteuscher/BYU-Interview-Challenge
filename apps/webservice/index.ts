import express from 'express';

const app = express();

const port = parseInt(process.env.PORT || '4000');

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';

app.get('/movies', async (req, res) => {
	// console.log query params
	const { search } = req.query;

	console.log(search);

	const response = await fetch(
		`${MOVIE_DB_ENDPOINT}?query=${search}&language=en-US`,
		{
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${process.env.MOVIE_DB_API_KEY}`,
			},
		}
	);

	// if (!response.ok) {
	//     res.status(500).send();
	//     return;
	// }

	const movies: any = await response.json();

	const responseBody = movies.results.map((movie: any) => ({
		movie_id: movie.id,
		title: movie.original_title,
		poster_image_url: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
		popularity_summary: `${movie.popularity} out of ${movie.vote_count}`,
	}));

	res.status(200).send(responseBody);
});

app.listen(port, () => {
	console.log(`🚀 Server running on port ${port}`);
});
