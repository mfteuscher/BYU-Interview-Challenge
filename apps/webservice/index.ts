import express from 'express';
import cors from 'cors';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';

const app = express();
app.use(cors());

const port = parseInt(process.env.PORT || '4000');

app.get('/movies', async (req, res) => {
	const { search } = req.query;

	const response = await fetch(
		`${MOVIE_DB_ENDPOINT}?query=${search}&language=en-US`,
		{
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${process.env.MOVIE_DB_API_KEY}`,
			},
		}
	);

	if (!response.ok) {
		res
			.status(500)
			.send(
				'Something went wrong with The Movie Database. Please try again later.'
			);
		return;
	}

	const movies: any = await response.json();

	const responseBody = movies.results.slice(0,10).map((movie: any) => ({
		movie_id: movie.id,
		title: movie.original_title,
		poster_image_url: movie.poster_path
			? `https://image.tmdb.org/t/p/original${movie.poster_path}`
			: 'https://placehold.co/600x900?text=No%20Poster%20Avaliable',
		popularity_summary: `${movie.popularity} out of ${movie.vote_count}`,
	}));

	res.status(200).send(responseBody);
});

app.listen(port, () => {
	console.log(`🚀 Server running on port ${port}`);
});
