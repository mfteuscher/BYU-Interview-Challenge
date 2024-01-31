<template>
	<div class="min-h-full">
		<nav class="border-b border-gray-200 bg-white">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 justify-between">
					<div class="flex">
						<div class="flex flex-shrink-0 items-center">
							<img
								class="block h-8 w-auto lg:hidden"
								src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
								alt="Your Company"
							/>
							<img
								class="hidden h-8 w-auto lg:block"
								src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
								alt="Your Company"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<div class="py-10">
			<header class="mb-12">
				<form @submit="searchMovies" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1
						class="text-3xl font-bold leading-tight tracking-tight text-gray-900"
					>
						Search
					</h1>
					<div class="mt-2 max-w-2xl mx-auto flex rounded-md shadow-sm">
						<div
							class="relative flex flex-grow items-stretch focus-within:z-10"
						>
							<div
								class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
							>
								<MagnifyingGlassIcon
									class="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</div>
							<input
								name="search"
								id="search"
								class="block w-full rounded-none rounded-l-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
							/>
						</div>
						<button
							class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							Search
						</button>
					</div>
				</form>
			</header>
			<main class="px-4">
				<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<ul
						role="list"
						class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
					>
						<li v-for="movie in movies" :key="movie.movie_id" class="relative">
							<div
								class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
							>
								<img
									:src="movie.poster_image_url"
									alt=""
									class="pointer-events-none object-cover group-hover:opacity-75"
								/>
								<button
									type="button"
									class="absolute inset-0 focus:outline-none"
								>
									<span class="sr-only"
										>View details for {{ movie.title }}</span
									>
								</button>
							</div>
							<p
								class="pointer-events-none mt-2 block text-lg truncate font-medium text-gray-900"
							>
								{{ movie.title }}
							</p>
							<p
								class="pointer-events-none block text-sm font-medium text-gray-500"
							>
								{{ movie.popularity_summary }}
							</p>
						</li>
					</ul>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

const movies = useState('movies', () => []);

const url = 'http://localhost:4000/movies';

async function searchMovies(e) {
	e.preventDefault();
	const searchQuery = e.target.elements.search.value
	const data = await $fetch(url + '?search=' + searchQuery);

	movies.value = data;
}
</script>
