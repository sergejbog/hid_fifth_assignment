import { type Writable, writable } from 'svelte/store';
import type { Comment, Post, UserProfile } from './types';

async function generateComments(count: number): Promise<Comment[]> {
	const response = await fetch('https://dummyjson.com/comments?limit=' + count);
	const data = await response.json();
	return Array.from({ length: count }, (_, i) => ({
		id: data.comments[i].id,
		user: data.comments[i].user.fullName,
		content: data.comments[i].body,
		timestamp: `${Math.floor(Math.random() * 24)}h ago`
	}));
}

function createPost(
	id: number,
	user: string,
	age: number,
	content: string,
	likes: number,
	shares: number,
	timestamp: string,
	image?: string
): Post {
	return {
		id,
		user,
		age,
		content,
		likes,
		comments: [],
		shares,
		timestamp,
		image
	};
}

let youngPosts: Post[] = [
	createPost(
		1,
		'Saurabh Kumar',
		30,
		"Attended an incredible virtual concert last night! The experience was immersive, with stunning visuals and perfect sound quality. It's amazing how technology is transforming live music. If you haven't tried a virtual concert yet, I highly recommend it...",
		132,
		45,
		'12hr',
		'https://picsum.photos/seed/firstone/300/200'
	),
	createPost(
		2,
		'Alice Johnson',
		24,
		"Just discovered this amazing indie band! Their sound is so fresh and unique. Check out their latest album, you won't be disappointed!",
		87,
		23,
		'3hr'
	),
	createPost(
		3,
		'Mike Chen',
		28,
		"Exploring the world of lo-fi beats today. It's the perfect background music for studying or working from home. Any recommendations for great lo-fi artists?",
		65,
		15,
		'6hr',
		'https://picsum.photos/seed/lofi/300/200'
	),
	createPost(
		4,
		'Emily Rodriguez',
		22,
		"Just finished creating a playlist of empowering female artists across different genres. It's amazing to see how women are shaping the music industry. Who are your favorite female musicians?",
		110,
		38,
		'1d'
	),
	createPost(
		5,
		'Jamal Wilson',
		26,
		"Attended my first underground rave last night. The energy was electric! It's fascinating how electronic music can bring people together in such a unique way.",
		95,
		27,
		'8hr',
		'https://picsum.photos/seed/rave/300/200'
	),
	createPost(
		6,
		'Sophia Lee',
		29,
		'Been diving into the world of jazz lately. The complexity and improvisation in this genre are mind-blowing. Any jazz enthusiasts here? What should I listen to next?',
		78,
		19,
		'2d'
	),
	createPost(
		7,
		'Alex Novak',
		25,
		"Just released my first single on Spotify! It's been a long journey, but I'm so excited to share my music with the world. Give it a listen and let me know what you think!",
		156,
		52,
		'4hr',
		'https://picsum.photos/seed/spotify/300/200'
	),
	createPost(
		8,
		'Zoe Thompson',
		23,
		"Rediscovering the beauty of acoustic covers. There's something magical about stripping down complex songs to their bare essentials. Share your favorite acoustic covers!",
		89,
		31,
		'1d'
	),
	createPost(
		9,
		'Ryan Patel',
		27,
		"Just got back from a music festival, and wow! The lineup was incredible, and the atmosphere was unforgettable. Already counting down to next year's event!",
		134,
		47,
		'5hr',
		'https://picsum.photos/seed/festival/300/200'
	),
	createPost(
		10,
		'Lila Morales',
		21,
		"Started learning to play the ukulele this week. It's surprisingly addictive! Any other ukulele players out there with tips for beginners?",
		72,
		12,
		'2d'
	),
	createPost(
		19,
		'Richard Davis',
		27,
		'Exploring the impact of AI in the music industry. From generating new tunes to enhancing production quality, AI is revolutionizing how we create and enjoy music. Excited to share insights, trends, and breakthroughs...',
		45,
		8,
		'12hr',
		'https://picsum.photos/seed/firstposthere/300/200'
	),
	createPost(
		20,
		'Richard Davis',
		27,
		"Just discovered an amazing new indie band that blends '80s rock with modern electronic beats. Their unique sound is refreshing and addictive. Can't stop listening to their latest album! Check them out and let me know what you think...",
		67,
		15,
		'1d',
		'https://picsum.photos/seed/secondposthere/300/200'
	),
	createPost(
		21,
		'Richard Davis',
		27,
		'Just finished reading a fascinating book on the history of music. From ancient melodies to modern genres, the evolution of music is truly remarkable. Highly recommend this book to all music enthusiasts!',
		34,
		3,
		'2d',
		'https://picsum.photos/seed/thirdposthere/300/200'
	)
];

let oldPosts: Post[] = [
	createPost(
		11,
		'Robert Smith',
		65,
		"Listening to some classic vinyl records today. The warm sound of analog just can't be beaten. What's your favorite classic album?",
		98,
		7,
		'5hr',
		'https://picsum.photos/seed/secondone/300/200'
	),
	createPost(
		12,
		'Margaret Johnson',
		58,
		'Just attended a wonderful symphony orchestra performance. The timeless beauty of classical music never fails to move me.',
		76,
		3,
		'1d'
	),
	createPost(
		13,
		'Frank Miller',
		70,
		"Revisiting the golden age of rock 'n' roll. The energy and rebellion in those old tracks still resonate today. Who's your favorite rock legend?",
		112,
		18,
		'3hr',
		'https://picsum.photos/seed/rockroll/300/200'
	),
	createPost(
		14,
		'Carol Davis',
		62,
		"Just discovered a local folk music club. It's heartwarming to see young people keeping traditional music alive. Any folk music lovers here?",
		85,
		9,
		'2d'
	),
	createPost(
		15,
		'George Thompson',
		68,
		"Attended a jazz festival over the weekend. The improvisations were mind-blowing! It's amazing how jazz continues to evolve while staying true to its roots.",
		103,
		14,
		'1d',
		'https://picsum.photos/seed/jazzfest/300/200'
	),
	createPost(
		16,
		'Patricia Clark',
		55,
		"Finally learned how to use music streaming services. It's incredible to have so much music at my fingertips! Any playlist recommendations for a newcomer?",
		67,
		5,
		'6hr'
	),
	createPost(
		17,
		'Harold Wilson',
		72,
		"Dusted off my old guitar and started playing again after years. It's never too late to reconnect with your passion for music!",
		94,
		11,
		'4d',
		'https://picsum.photos/seed/oldguitar/300/200'
	),
	createPost(
		18,
		'Elizabeth Garner',
		60,
		"Attended an 80s tribute concert last night. The nostalgia was overwhelming! It's amazing how music can transport you back in time. What's your favorite 80s hit?",
		128,
		22,
		'7hr'
	)
];

let userProfile: UserProfile = {
	id: 1,
	name: 'Richard Davis',
	age: 27,
	avatar: 'https://avatar.iran.liara.run/public/boy?username=RichardDavis',
	bio: "Hi! I'm a music lover with a diverse taste. From '80s rock anthems and '90s grunge to EDM bangers, K-POP hits, and Taylor Swift's best songs, my playlists cover it all. Let's share our favorite tracks and explore new tunes together!",
	mobile: '(44) 123 1234 123',
	email: 'alecthompson@mail.com',
	location: 'USA',
	social: {
		facebook: 'https://facebook.com/richarddavis',
		twitter: 'https://twitter.com/richarddavis',
		instagram: 'https://instagram.com/richarddavis'
	},
	playlists: [
		{
			id: 1,
			name: '80s Rock Anthems',
			description: 'This playlist includes all of the rock...',
			image: '/images/80s-rock.jpg'
		},
		{
			id: 2,
			name: '90s Grunge',
			description: 'Lorem ipsum dolor sit amet.',
			image: '/images/90s-grunge.jpg'
		},
		{
			id: 3,
			name: 'EDM Bangers',
			description: 'Lorem ipsum dolor sit amet.',
			image: '/images/edm-bangers.jpg'
		},
		{
			id: 4,
			name: 'K-POP hits',
			description: 'Lorem ipsum dolor sit amet.',
			image: '/images/k-pop-hits.jpg'
		},
		{
			id: 5,
			name: 'Taylor Swift Best Songs',
			description: 'Lorem ipsum dolor sit amet.',
			image: '/images/taylor-swift.jpg'
		}
	],
	posts: [],
	settings: {
		emailLikes: true,
		emailReplies: false,
		emailMentions: true,
		newLaunches: false,
		monthlyUpdates: true,
		newsletter: false
	}
};

export let youngPostsStore: Writable<Post[]> = writable(youngPosts);
export let oldPostsStore: Writable<Post[]> = writable(oldPosts);
export let userProfileStore: Writable<UserProfile> = writable(userProfile);
export let isDataInitialized: Writable<boolean> = writable(false);

export async function initializeData() {
	for (let post of youngPosts) {
		post.comments = await generateComments(Math.floor(Math.random() * 20) + 5);
	}
	for (let post of oldPosts) {
		post.comments = await generateComments(Math.floor(Math.random() * 20) + 5);
	}
	for (let post of userProfile.posts) {
		post.comments = await generateComments(Math.floor(Math.random() * 5) + 1);
	}

	userProfile.posts = youngPosts.slice(-3);

	youngPostsStore.set(youngPosts);
	oldPostsStore.set(oldPosts);
	userProfileStore.set(userProfile);
	isDataInitialized.set(true);
}
