<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import { initializeData, isDataInitialized } from '$lib/dummyData';
	import { Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';

	onMount(() => {
		initializeData().then(() => {
			console.log('Data initialized');
			// Any other initialization that depends on the data being ready
		});
	});
</script>

<div style="background: linear-gradient(rgba(0,85,255,.07) 0,rgba(0,85,255,.05) 100%) !important">
	<Navbar />

	{#if $isDataInitialized || $page.url.pathname === '/'}
		<main class="mx-auto font-openSans">
			<slot />
		</main>
	{:else}
		<div class="flex h-screen items-center justify-center">
			<Spinner color="red" size="24" />
		</div>
	{/if}

	<Toaster />
</div>
