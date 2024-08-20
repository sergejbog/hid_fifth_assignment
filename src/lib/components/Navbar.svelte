<script>
	import { page } from '$app/stores';
	import CreatePost from '$lib/components/CreatePost.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { Button, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="bg-transparent font-roboto">
	<NavBrand href="/">
		<div class="w-32">
			<Logo />
		</div>
	</NavBrand>
	<div class="flex md:order-2">
		<CreatePost />
		<NavHamburger />
	</div>
	<NavUl {activeUrl}>
		<NavLi activeClass="text-primary-700" class="text-xl" href="/">Home</NavLi>
		<NavLi activeClass="text-primary-700" class="text-xl" href="/young">Youth Posts</NavLi>
		<NavLi activeClass="text-primary-700" class="text-xl" href="/old">Elderly Posts</NavLi>
		<NavLi activeClass="text-primary-700" class="text-xl" href="/profile">Profile</NavLi>
	</NavUl>
</Navbar>
