<script>
	import CreatePost from '$lib/components/CreatePost.svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="font-roboto bg-transparent">
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
		<NavLi activeClass="text-primary-700" class="text-xl" href="/young">Young</NavLi>
		<NavLi activeClass="text-primary-700" class="text-xl" href="/old">Old</NavLi>
		<NavLi activeClass="text-primary-700" class="text-xl" href="/profile">Profile</NavLi>
	</NavUl>
</Navbar>
