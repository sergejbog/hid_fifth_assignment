<script lang="ts">
	import { Modal, Button, Label, Input, Textarea } from 'flowbite-svelte';
	import { youngPostsStore, userProfileStore } from '$lib/dummyData';
	import { goto } from '$app/navigation';
	import toast from 'svelte-french-toast';

	export let open = false;

	let content = '';
	let imageUrl = '';

	function handleSubmit() {
		const newPost = {
			id: $youngPostsStore.length + 1,
			user: 'Richard Davis', // Hardcoded user
			age: 27, // Hardcoded age
			content,
			likes: 0,
			comments: [],
			shares: 0,
			timestamp: 'Just now',
			image: imageUrl || undefined
		};
		$youngPostsStore = [newPost, ...$youngPostsStore];
		$userProfileStore.posts = [newPost, ...$userProfileStore.posts];
		content = '';
		imageUrl = '';
		open = false;
		toast.success('Post created successfully!');
		goto('/young');
	}
</script>

<Button
	on:click={() => {
		open = true;
	}}
	color="purple"
	size="sm">Create Post</Button
>

<Modal bind:open size="lg">
	<h3 slot="header" class="text-xl font-medium text-gray-900 dark:text-white">Create a New Post</h3>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="mb-4">
			<Label for="content" class="mb-2">Post Content</Label>
			<Textarea
				id="content"
				placeholder="What's on your mind?"
				rows="4"
				bind:value={content}
				required
			/>
		</div>
		<div class="mb-4">
			<Label for="imageUrl" class="mb-2">Image URL (optional)</Label>
			<Input
				id="imageUrl"
				type="url"
				placeholder="https://example.com/image.jpg"
				bind:value={imageUrl}
			/>
		</div>
		<div class="flex justify-end space-x-2">
			<Button color="alternative" on:click={() => (open = false)}>Cancel</Button>
			<Button type="submit" color="primary">Post</Button>
		</div>
	</form>
</Modal>
