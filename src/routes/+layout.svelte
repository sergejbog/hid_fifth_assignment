<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';
</script>

<div style="background: linear-gradient(rgba(0,85,255,.07) 0,rgba(0,85,255,.05) 100%) !important">
	<Navbar />

	<main class="font-openSans mx-auto">
		<slot />
	</main>

	<Toaster />
</div>
