<script>
	import MarketingHero from '$lib/components/marketing-hero.svelte';
	import { Badge, Button, Card } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Harmony Exchange - Home</title>
</svelte:head>

<MarketingHero />

<section class="bg-white py-16 lg:py-32">
	<div class="py-10">
		<div class="container">
			<div class="text-center">
				<Badge class="text-xl" color="yellow">Features</Badge>
				<h1 class="mb-4 mt-3 text-3xl font-medium">
					Harmony Exchange: Where Music Connects Generations
				</h1>
				<p class="text-gray-500">
					Start using <span class="text-primary">Harmony Exchange</span> to discover and share music
					across age groups.
				</p>
			</div>

			<div class="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-6">
				<div data-aos="fade-up" data-aos-duration="300">
					<div class="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10">
						<svg
							class="h-7 w-7 text-blue-500"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<rect id="bound" x="0" y="0" width="24" height="24"></rect>
								<path
									d="M4,16 L5,16 C5.55228475,16 6,16.4477153 6,17 C6,17.5522847 5.55228475,18 5,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 Z M1,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z M3,6 L5,6 C5.55228475,6 6,6.44771525 6,7 C6,7.55228475 5.55228475,8 5,8 L3,8 C2.44771525,8 2,7.55228475 2,7 C2,6.44771525 2.44771525,6 3,6 Z"
									id="Combined-Shape"
									fill="currentColor"
									opacity="0.3"
								></path>
								<path
									d="M10,6 L22,6 C23.1045695,6 24,6.8954305 24,8 L24,16 C24,17.1045695 23.1045695,18 22,18 L10,18 C8.8954305,18 8,17.1045695 8,16 L8,8 C8,6.8954305 8.8954305,6 10,6 Z M21.0849395,8.0718316 L16,10.7185839 L10.9150605,8.0718316 C10.6132433,7.91473331 10.2368262,8.02389331 10.0743092,8.31564728 C9.91179228,8.60740125 10.0247174,8.9712679 10.3265346,9.12836619 L15.705737,11.9282847 C15.8894428,12.0239051 16.1105572,12.0239051 16.294263,11.9282847 L21.6734654,9.12836619 C21.9752826,8.9712679 22.0882077,8.60740125 21.9256908,8.31564728 C21.7631738,8.02389331 21.3867567,7.91473331 21.0849395,8.0718316 Z"
									id="Combined-Shape"
									fill="currentColor"
								></path>
							</g>
						</svg>
					</div>
					<h1 class="mb-3 mt-4 text-lg">Cross-Generational Playlists</h1>
					<p class="text-gray-500">
						Create and explore playlists that span decades, connecting musical tastes across
						generations.
					</p>
				</div>

				<div data-aos="fade-up" data-aos-duration="600">
					<div class="flex h-12 w-12 items-center justify-center rounded-md bg-red-500/10">
						<svg
							class="h-7 w-7 text-red-500"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<rect id="bound" x="0" y="0" width="24" height="24"></rect>
								<path
									d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
									id="Path-95"
									fill="currentColor"
								></path>
								<path
									d="M8.7295372,14.6839411 C8.35180695,15.0868534 7.71897114,15.1072675 7.31605887,14.7295372 C6.9131466,14.3518069 6.89273254,13.7189711 7.2704628,13.3160589 L11.0204628,9.31605887 C11.3857725,8.92639521 11.9928179,8.89260288 12.3991193,9.23931335 L15.358855,11.7649545 L19.2151172,6.88035571 C19.5573373,6.44687693 20.1861655,6.37289714 20.6196443,6.71511723 C21.0531231,7.05733733 21.1271029,7.68616551 20.7848828,8.11964429 L16.2848828,13.8196443 C15.9333973,14.2648593 15.2823707,14.3288915 14.8508807,13.9606866 L11.8268294,11.3801628 L8.7295372,14.6839411 Z"
									id="Path-97"
									fill="currentColor"
									opacity="0.3"
								></path>
							</g>
						</svg>
					</div>
					<h1 class="mb-3 mt-4 text-lg">Musical Insights</h1>
					<p class="text-gray-500">
						Gain unique perspectives on music from different age groups, enhancing your appreciation
						for various genres and eras.
					</p>
				</div>

				<div data-aos="fade-up" data-aos-duration="900">
					<div class="flex h-12 w-12 items-center justify-center rounded-md bg-teal-500/10">
						<svg
							class="h-7 w-7 text-teal-500"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<rect id="bound" x="0" y="0" width="24" height="24"></rect>
								<path
									d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
									id="Combined-Shape"
									fill="currentColor"
									opacity="0.3"
								></path>
								<path
									d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
									id="Path"
									fill="currentColor"
								></path>
							</g>
						</svg>
					</div>
					<h1 class="mb-3 mt-4 text-lg">Easy Sharing</h1>
					<p class="text-gray-500">
						Effortlessly share your favorite tracks and discover new music recommended by users of
						all ages.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="py-10">
		<div class="container">
			<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-3" data-aos="fade-up">
				<div class="lg:col-span-2">
					<span class="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-lg">
						<svg
							class="text-primary h-6 w-6"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<rect id="bound" x="0" y="0" width="24" height="24"></rect>
								<path
									d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
									id="Combined-Shape"
									fill="currentColor"
								></path>
								<path
									d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
									id="Combined-Shape"
									fill="currentColor"
									opacity="0.3"
								></path>
							</g>
						</svg>
					</span>

					<h1 class="mb-4 mt-5 text-3xl/tight font-medium">Bridging Generations Through Music</h1>
					<p class="text-gray-500">
						Harmony Exchange offers unique features designed to foster understanding and
						appreciation between different age groups through the universal language of music.
					</p>
					<div class="mt-5 flex items-center">
						<Button href="" color="dark"
							>Learn more <i class="fa-solid fa-arrow-right ms-2"></i>
						</Button>
					</div>
				</div>

				<div class="lg:col-span-1">
					<div class="w-full rounded-lg border bg-white p-10 shadow-lg sm:w-3/4 md:w-1/2 lg:w-full">
						<div class="flex flex-col gap-5">
							<h6 class="flex items-center gap-3 text-sm font-medium">
								<svg
									class="h-5 w-5 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg>
								Unlimited Playlist Creation
							</h6>
							<h6 class="flex items-center gap-3 text-sm font-medium">
								<svg
									class="h-5 w-5 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg>
								Cross-Generational Music Matching
							</h6>
							<h6 class="flex items-center gap-3 text-sm font-medium">
								<svg
									class="h-5 w-5 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg>
								Musical Era Exploration
							</h6>
							<h6 class="flex items-center gap-3 text-sm font-medium">
								<svg
									class="h-5 w-5 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg>
								Collaborative Playlists
							</h6>
							<h6 class="flex items-center gap-3 text-sm font-medium">
								<svg
									class="h-5 w-5 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg>
								Music History Insights
							</h6>
							<h6 class="flex items-center gap-4 text-sm font-medium">
								<i class="fa-solid fa-arrow-right text-xl text-green-500"></i>
								<p class="text-sm">And More</p>
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
