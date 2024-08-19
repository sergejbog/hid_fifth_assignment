<script lang="ts">
	import { userProfileStore } from '$lib/dummyData';
	import { Button, Card, Toggle } from 'flowbite-svelte';
	import { FacebookSolid, InstagramSolid, XSolid } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Harmony Exchange - My Profile</title>
</svelte:head>

<div class="container mx-auto w-full px-4">
	<div class="flex justify-between space-x-12">
		<!-- User Info -->
		<Card size="md">
			<div class="mb-4 flex items-center">
				<img
					src={$userProfileStore.avatar}
					alt={$userProfileStore.name}
					class="mr-4 h-20 w-20 rounded-full"
				/>
				<div>
					<h2 class="text-2xl font-bold">{$userProfileStore.name}</h2>
					<p class="text-gray-600">Age: {$userProfileStore.age}</p>
				</div>
			</div>
			<h3 class="mb-2 text-xl font-semibold">Platform Settings</h3>
			<div class="mb-4">
				<h4 class="mb-2 font-semibold">ACCOUNT</h4>
				<Toggle bind:checked={$userProfileStore.settings.emailLikes} class="mb-2"
					>Email me when someone likes my playlist</Toggle
				>
				<Toggle bind:checked={$userProfileStore.settings.emailReplies} class="mb-2"
					>Email me when someone replies to my post</Toggle
				>
				<Toggle bind:checked={$userProfileStore.settings.emailMentions} class="mb-2"
					>Email me when someone mentions me in a post</Toggle
				>
			</div>
			<div>
				<h4 class="mb-2 font-semibold">APPLICATION</h4>
				<Toggle bind:checked={$userProfileStore.settings.newLaunches} class="mb-2"
					>New launches and projects</Toggle
				>
				<Toggle bind:checked={$userProfileStore.settings.monthlyUpdates} class="mb-2"
					>Monthly product updates</Toggle
				>
				<Toggle bind:checked={$userProfileStore.settings.newsletter} class="mb-2"
					>Subscribe to newsletter</Toggle
				>
			</div>
		</Card>
		<Card size="md">
			<h3 class="mb-4 text-xl font-semibold">Profile Information</h3>
			<p class="mb-4">{$userProfileStore.bio}</p>
			<div class="grid grid-cols-2 gap-4">
				<div>
					<p class="font-semibold">Mobile:</p>
					<p>{$userProfileStore.mobile}</p>
				</div>
				<div>
					<p class="font-semibold">Email:</p>
					<p>{$userProfileStore.email}</p>
				</div>
				<div>
					<p class="font-semibold">Location:</p>
					<p>{$userProfileStore.location}</p>
				</div>
				<div>
					<p class="font-semibold">Social:</p>
					<div class="flex space-x-2">
						<a href={$userProfileStore.social.facebook} target="_blank" rel="noopener noreferrer">
							<FacebookSolid class="text-blue-600" />
						</a>
						<a href={$userProfileStore.social.twitter} target="_blank" rel="noopener noreferrer">
							<XSolid class="text-blue-400" />
						</a>
						<a href={$userProfileStore.social.instagram} target="_blank" rel="noopener noreferrer">
							<InstagramSolid class="text-pink-600" />
						</a>
					</div>
				</div>
			</div>
		</Card>

		<Card size="md">
			<h3 class="mb-4 text-xl font-semibold">My Playlists</h3>
			<div class="space-y-4">
				{#each $userProfileStore.playlists as playlist}
					<div class="flex items-center">
						<img
							src="https://picsum.photos/seed/{playlist.name}/200"
							alt={playlist.name}
							class="mr-4 h-16 w-16 rounded-lg object-cover"
						/>
						<div class="flex-grow">
							<h4 class="font-semibold">{playlist.name}</h4>
							<p class="text-sm text-gray-600">{playlist.description}</p>
						</div>
						<Button color="light">View</Button>
					</div>
				{/each}
			</div>
		</Card>
	</div>

	<!-- User Posts -->
	<h3 class="my-6 text-2xl font-semibold">My Posts</h3>
	<div class="mb-4 grid w-full grid-cols-3 gap-4">
		{#each $userProfileStore.posts as post}
			<Card size="xl">
				<div class="mb-4 flex items-center">
					<img
						src={$userProfileStore.avatar}
						alt={$userProfileStore.name}
						class="mr-2 h-10 w-10 rounded-full"
					/>
					<div>
						<h5 class="font-semibold">{post.user}</h5>
						<p class="text-sm text-gray-600">{post.timestamp} • Age {post.age}</p>
					</div>
				</div>
				<p class="mb-4 h-2/3">{post.content}</p>
				{#if post.image}
					<img src={post.image} alt={post.user} class="mb-4 w-full rounded-lg" />
				{/if}
				<div class="flex space-x-4">
					<Button color="light">
						<span class="mr-2">👍</span>
						{post.likes}
					</Button>
					<Button href="/post/{post.id}" color="light">
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
</div>
