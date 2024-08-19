export interface Comment {
	id: number;
	user: string;
	content: string;
	timestamp: string;
}

export interface Post {
	id: number;
	user: string;
	age: number;
	content: string;
	likes: number;
	comments: Comment[];
	shares: number;
	timestamp: string;
	image?: string;
}

export interface Playlist {
	id: number;
	name: string;
	description: string;
	image: string;
}

export interface UserProfile {
	id: number;
	name: string;
	age: number;
	avatar: string;
	bio: string;
	mobile: string;
	email: string;
	location: string;
	social: {
		facebook: string;
		twitter: string;
		instagram: string;
	};
	playlists: Playlist[];
	posts: Post[];
	settings: {
		emailLikes: boolean;
		emailReplies: boolean;
		emailMentions: boolean;
		newLaunches: boolean;
		monthlyUpdates: boolean;
		newsletter: boolean;
	};
}
