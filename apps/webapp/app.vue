<template>
	<!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
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
			<header>
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1
						class="text-3xl font-bold leading-tight tracking-tight text-gray-900"
					>
						Search
					</h1>
					<div className="mx-auto max-w-2xl">
						<!-- <label
							for="email"
							class="block text-sm font-medium leading-6 text-gray-900"
							>Email</label
						> -->
						<div class="mt-2 flex rounded-md shadow-sm">
							<div
								class="relative flex flex-grow items-stretch focus-within:z-10"
							>
								<div
									class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
								>
									<MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									name="search"
									id="search"
									class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<button
								type="button"
								class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<!-- Your content -->

					<ul role="list" class="divide-y divide-gray-100">
						<li
							v-for="person in people"
							:key="person.email"
							class="flex justify-between gap-x-6 py-5"
						>
							<div class="flex min-w-0 gap-x-4">
								<img
									class="h-12 w-12 flex-none rounded-full bg-gray-50"
									:src="person.imageUrl"
									alt=""
								/>
								<div class="min-w-0 flex-auto">
									<p class="text-sm font-semibold leading-6 text-gray-900">
										{{ person.name }}
									</p>
									<p class="mt-1 truncate text-xs leading-5 text-gray-500">
										{{ person.email }}
									</p>
								</div>
							</div>
							<div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
								<p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
								<p
									v-if="person.lastSeen"
									class="mt-1 text-xs leading-5 text-gray-500"
								>
									Last seen
									<time :datetime="person.lastSeenDateTime">{{
										person.lastSeen
									}}</time>
								</p>
								<div v-else class="mt-1 flex items-center gap-x-1.5">
									<div class="flex-none rounded-full bg-emerald-500/20 p-1">
										<div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
									</div>
									<p class="text-xs leading-5 text-gray-500">Online</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

const people = [
	{
		name: 'Leslie Alexander',
		email: 'leslie.alexander@example.com',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
	},
	{
		name: 'Michael Foster',
		email: 'michael.foster@example.com',
		role: 'Co-Founder / CTO',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
	},
	{
		name: 'Dries Vincent',
		email: 'dries.vincent@example.com',
		role: 'Business Relations',
		imageUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: null,
	},
	{
		name: 'Lindsay Walton',
		email: 'lindsay.walton@example.com',
		role: 'Front-end Developer',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
	},
	{
		name: 'Courtney Henry',
		email: 'courtney.henry@example.com',
		role: 'Designer',
		imageUrl:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
	},
	{
		name: 'Tom Cook',
		email: 'tom.cook@example.com',
		role: 'Director of Product',
		imageUrl:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: null,
	},
];

const query = useState('query', '');

async function searchMovies(query) {
	const url = 'http://localhost:4000/movies';

	const response = await fetch(url + '?query=' + query);
}
</script>
