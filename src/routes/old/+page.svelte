<script lang="ts">
	import { Card, Button, Select, Input } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import type { Post } from '$lib/types';
	import { oldPosts } from '$lib/dummyData';

	let posts: Post[] = oldPosts;
	let searchQuery = '';
	let selectedCategory = '';

	$: filteredPosts = posts.filter(
		(post) =>
			post.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(selectedCategory === '' ||
				post.content.toLowerCase().includes(selectedCategory.toLowerCase()))
	);

	function likePost(id: number) {
		posts = posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post));
	}
</script>

<svelte:head>
	<title>Harmony Exchange - Old</title>
</svelte:head>

<div class="mx-auto max-w-3xl">
	<h1 class="mb-6 text-3xl font-bold">Older Generation Posts</h1>

	<div class="mb-6">
		<Input class="mb-4" placeholder="Search" bind:value={searchQuery}>
			<SearchOutline slot="left" size="md" class="text-gray-500 dark:text-gray-400" />
		</Input>
		<Select class="mb-4" bind:value={selectedCategory}>
			<option value="">All Categories</option>
			<option value="classical">Classical</option>
			<option value="jazz">Jazz</option>
			<option value="rock">Rock</option>
		</Select>
	</div>

	{#each filteredPosts as post (post.id)}
		<Card size="xl" class="mb-6">
			<div class="mb-2 flex items-center">
				<img
					src="https://avatar.iran.liara.run/public?username={post.user}"
					alt={post.user}
					class="mr-2 h-10 w-10 rounded-full"
				/>
				<div>
					<h5 class="text-xl font-bold">{post.user}</h5>
					<p class="text-sm text-gray-500">{post.timestamp} • Age {post.age}</p>
				</div>
			</div>
			<p class="mb-3">{post.content}</p>
			{#if post.image}
				<img
					src="https://picsum.photos/seed/{post.comments}/300/200"
					alt="Post image"
					class="mb-3 w-full rounded-lg"
				/>
			{/if}
			<div class="flex gap-4">
				<Button color="light" on:click={() => likePost(post.id)}>
					<span class="mr-2">👍</span>
					{post.likes}
				</Button>
				<Button color="light" href="/post/{post.id}">
					<span class="mr-2">💬</span>
					{post.comments.length}
				</Button>
				<Button color="light">
					<span class="mr-2">↗️</span>
					{post.shares}
				</Button>
			</div>
		</Card>
	{/each}
</div>
