<script lang="ts">
	import { page } from '$app/stores';
	import { oldPostsStore, youngPostsStore } from '$lib/dummyData';
	import type { Comment, Post } from '$lib/types';
	import { Avatar, Button, Card, Label, Textarea } from 'flowbite-svelte';
	import toast from 'svelte-french-toast';

	const postId = parseInt($page.params.id);
	const post: Post | undefined = [...$youngPostsStore, ...$oldPostsStore].find(
		(p) => p.id === postId
	);

	let newComment = '';

	function addComment() {
		if (!post) return;

		const comment: Comment = {
			id: post.comments.length + 1,
			user: 'Current User', // In a real app, this would be the logged-in user
			content: newComment,
			timestamp: 'Just now'
		};

		toast.success('Comment posted successfully!');

		post.comments = [comment, ...post.comments];
		newComment = '';
	}
</script>

<svelte:head>
	<title>Harmony Exchange - Post Comments</title>
</svelte:head>

<div class="mx-auto max-w-3xl">
	{#if post}
		<Card size="xl" class="mb-6">
			<div class="mb-2 flex items-center">
				<Avatar
					src="https://avatar.iran.liara.run/public?username={post.user.split(' ').join('')}"
					alt={post.user}
					class="mr-2"
				/>
				<div>
					<h5 class="text-xl font-bold">{post.user}</h5>
					<p class="text-sm text-gray-500">{post.timestamp} • Age {post.age}</p>
				</div>
			</div>
			<p class="mb-3">{post.content}</p>
			{#if post.image}
				<img src={post.image} alt="Post image" class="mb-3 w-full rounded-lg" />
			{/if}
			<div class="flex gap-4">
				<Button color="light">
					<span class="mr-2">👍</span>
					{post.likes}
				</Button>
				<Button color="light">
					<span class="mr-2">💬</span>
					{post.comments.length}
				</Button>
				<Button color="light">
					<span class="mr-2">↗️</span>
					{post.shares}
				</Button>
			</div>
		</Card>

		<Card size="xl" class="mb-6">
			<h3 class="mb-4 text-xl font-bold">Add a Comment</h3>
			<form on:submit|preventDefault={addComment}>
				<Label for="comment" class="mb-2">Your Comment</Label>
				<Textarea
					id="comment"
					placeholder="Write your comment here..."
					rows="3"
					bind:value={newComment}
					class="mb-2"
				/>
				<Button type="submit" color="primary">Post Comment</Button>
			</form>
		</Card>

		<h3 class="mb-4 text-xl font-bold">Comments</h3>
		{#each post.comments as comment (comment.id)}
			<Card size="xl" class="mb-4">
				<div class="mb-2 flex items-center">
					<Avatar
						src="https://avatar.iran.liara.run/public?username={comment.user}"
						alt={comment.user}
						class="mr-2"
					/>
					<div>
						<h5 class="font-bold">{comment.user}</h5>
						<p class="text-sm text-gray-500">{comment.timestamp}</p>
					</div>
				</div>
				<p>{comment.content}</p>
			</Card>
		{/each}
	{:else}
		<p>Post not found</p>
	{/if}
</div>
