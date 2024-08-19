import type { Post, UserProfile, Comment } from './types';
import { type Writable, writable } from 'svelte/store';

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
export let youngPosts: Post[] = [
	{
		id: 1,
		user: 'Saurabh Kumar',
		age: 30,
		content:
			"Attended an incredible virtual concert last night! The experience was immersive, with stunning visuals and perfect sound quality. It's amazing how technology is transforming live music. If you haven't tried a virtual concert yet, I highly recommend it...",
		likes: 132,
		comments: await generateComments(5),
		shares: 45,
		timestamp: '12hr',
		image: 'https://picsum.photos/seed/firstone/300/200'
	},
	{
		id: 2,
		user: 'Alice Johnson',
		age: 24,
		content:
			"Just discovered this amazing indie band! Their sound is so fresh and unique. Check out their latest album, you won't be disappointed!",
		likes: 87,
		comments: await generateComments(12),
		shares: 23,
		timestamp: '3hr'
	},
	{
		id: 3,
		user: 'Mike Chen',
		age: 28,
		content:
			"Exploring the world of lo-fi beats today. It's the perfect background music for studying or working from home. Any recommendations for great lo-fi artists?",
		likes: 65,
		comments: await generateComments(8),
		shares: 15,
		timestamp: '6hr',
		image: 'https://picsum.photos/seed/lofi/300/200'
	},
	{
		id: 4,
		user: 'Emily Rodriguez',
		age: 22,
		content:
			"Just finished creating a playlist of empowering female artists across different genres. It's amazing to see how women are shaping the music industry. Who are your favorite female musicians?",
		likes: 110,
		comments: await generateComments(20),
		shares: 38,
		timestamp: '1d'
	},
	{
		id: 5,
		user: 'Jamal Wilson',
		age: 26,
		content:
			"Attended my first underground rave last night. The energy was electric! It's fascinating how electronic music can bring people together in such a unique way.",
		likes: 95,
		comments: await generateComments(15),
		shares: 27,
		timestamp: '8hr',
		image: 'https://picsum.photos/seed/rave/300/200'
	},
	{
		id: 6,
		user: 'Sophia Lee',
		age: 29,
		content:
			'Been diving into the world of jazz lately. The complexity and improvisation in this genre are mind-blowing. Any jazz enthusiasts here? What should I listen to next?',
		likes: 78,
		comments: await generateComments(10),
		shares: 19,
		timestamp: '2d'
	},
	{
		id: 7,
		user: 'Alex Novak',
		age: 25,
		content:
			"Just released my first single on Spotify! It's been a long journey, but I'm so excited to share my music with the world. Give it a listen and let me know what you think!",
		likes: 156,
		comments: await generateComments(30),
		shares: 52,
		timestamp: '4hr',
		image: 'https://picsum.photos/seed/spotify/300/200'
	},
	{
		id: 8,
		user: 'Zoe Thompson',
		age: 23,
		content:
			"Rediscovering the beauty of acoustic covers. There's something magical about stripping down complex songs to their bare essentials. Share your favorite acoustic covers!",
		likes: 89,
		comments: await generateComments(18),
		shares: 31,
		timestamp: '1d'
	},
	{
		id: 9,
		user: 'Ryan Patel',
		age: 27,
		content:
			"Just got back from a music festival, and wow! The lineup was incredible, and the atmosphere was unforgettable. Already counting down to next year's event!",
		likes: 134,
		comments: await generateComments(25),
		shares: 47,
		timestamp: '5hr',
		image: 'https://picsum.photos/seed/festival/300/200'
	},
	{
		id: 10,
		user: 'Lila Morales',
		age: 21,
		content:
			"Started learning to play the ukulele this week. It's surprisingly addictive! Any other ukulele players out there with tips for beginners?",
		likes: 72,
		comments: await generateComments(14),
		shares: 12,
		timestamp: '2d'
	}
];

export let youngPostsStore: Writable<Post[]> = writable(youngPosts);

export const oldPosts: Post[] = [
	{
		id: 1,
		user: 'Robert Smith',
		age: 65,
		content:
			"Listening to some classic vinyl records today. The warm sound of analog just can't be beaten. What's your favorite classic album?",
		likes: 98,
		comments: await generateComments(3),
		shares: 7,
		timestamp: '5hr',
		image: 'https://picsum.photos/seed/secondone/300/200'
	},
	{
		id: 2,
		user: 'Margaret Johnson',
		age: 58,
		content:
			'Just attended a wonderful symphony orchestra performance. The timeless beauty of classical music never fails to move me.',
		likes: 76,
		comments: await generateComments(15),
		shares: 3,
		timestamp: '1d'
	},
	{
		id: 3,
		user: 'Frank Miller',
		age: 70,
		content:
			"Revisiting the golden age of rock 'n' roll. The energy and rebellion in those old tracks still resonate today. Who's your favorite rock legend?",
		likes: 112,
		comments: await generateComments(22),
		shares: 18,
		timestamp: '3hr',
		image: 'https://picsum.photos/seed/rockroll/300/200'
	},
	{
		id: 4,
		user: 'Carol Davis',
		age: 62,
		content:
			"Just discovered a local folk music club. It's heartwarming to see young people keeping traditional music alive. Any folk music lovers here?",
		likes: 85,
		comments: await generateComments(17),
		shares: 9,
		timestamp: '2d'
	},
	{
		id: 5,
		user: 'George Thompson',
		age: 68,
		content:
			"Attended a jazz festival over the weekend. The improvisations were mind-blowing! It's amazing how jazz continues to evolve while staying true to its roots.",
		likes: 103,
		comments: await generateComments(20),
		shares: 14,
		timestamp: '1d',
		image: 'https://picsum.photos/seed/jazzfest/300/200'
	},
	{
		id: 6,
		user: 'Patricia Clark',
		age: 55,
		content:
			"Finally learned how to use music streaming services. It's incredible to have so much music at my fingertips! Any playlist recommendations for a newcomer?",
		likes: 67,
		comments: await generateComments(25),
		shares: 5,
		timestamp: '6hr'
	},
	{
		id: 7,
		user: 'Harold Wilson',
		age: 72,
		content:
			"Dusted off my old guitar and started playing again after years. It's never too late to reconnect with your passion for music!",
		likes: 94,
		comments: await generateComments(18),
		shares: 11,
		timestamp: '4d',
		image: 'https://picsum.photos/seed/oldguitar/300/200'
	},
	{
		id: 8,
		user: 'Elizabeth Garner',
		age: 60,
		content:
			"Attended an 80s tribute concert last night. The nostalgia was overwhelming! It's amazing how music can transport you back in time. What's your favorite 80s hit?",
		likes: 128,
		comments: await generateComments(30),
		shares: 22,
		timestamp: '7hr'
	}
];

export const userProfile: UserProfile = {
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
	posts: [
		{
			id: 1,
			user: 'Richard Davis',
			age: 27,
			content:
				'Exploring the impact of AI in the music industry. From generating new tunes to enhancing production quality, AI is revolutionizing how we create and enjoy music. Excited to share insights, trends, and breakthroughs...',
			likes: 45,
			comments: await generateComments(Math.floor(Math.random() * 5) + 1),
			shares: 8,
			timestamp: '12hr',
			image: 'https://picsum.photos/seed/firstposthere/300/200'
		},
		{
			id: 2,
			user: 'Richard Davis',
			age: 27,
			content:
				"Just discovered an amazing new indie band that blends '80s rock with modern electronic beats. Their unique sound is refreshing and addictive. Can't stop listening to their latest album! Check them out and let me know what you think...",
			likes: 67,
			comments: await generateComments(Math.floor(Math.random() * 5) + 1),
			shares: 15,
			timestamp: '1d',
			image: 'https://picsum.photos/seed/secondposthere/300/200'
		},
		{
			id: 3,
			user: 'Richard Davis',
			age: 27,
			content:
				'Just finished reading a fascinating book on the history of music. From ancient melodies to modern genres, the evolution of music is truly remarkable. Highly recommend this book to all music enthusiasts!',
			likes: 34,
			comments: await generateComments(Math.floor(Math.random() * 5) + 1),
			shares: 3,
			timestamp: '2d',
			image: 'https://picsum.photos/seed/thirdposthere/300/200'
		}
	],
	settings: {
		emailLikes: true,
		emailReplies: false,
		emailMentions: true,
		newLaunches: false,
		monthlyUpdates: true,
		newsletter: false
	}
};

export const userProfileStore: Writable<UserProfile> = writable(userProfile);
