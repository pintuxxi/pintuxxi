<template>
	<div class="card mx-auto">
		<img :src="poster" class="card-img" :alt="title" />
		<div class="hd-tag" v-if="getQuality">HD</div>
		<g-link :to="route" class="card-link" :title="title">
			<font-awesome :icon="['fas', 'play']" class="text-play" />
		</g-link >
		<div class="card-img-overlay">
			<p class="card-title text-center">{{ title }}</p>
			<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
			<div class="btn-group" role="group" aria-label="Button Card" title="Bookmark this Movie">
				<button class="btn btn-bookmark btn-sm shadow-none">
					<font-awesome :icon="['fas', 'bookmark']" /> Bookmark
				</button>
				<button class="btn btn-youtube btn-sm shadow-none" title="Play Trailer">
					<font-awesome :icon="['fab', 'youtube']" /> Trailer
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "P-Card",
	props: {
		title: String,
		year: Number,
		imdb: String,
		poster: String,
		genre: Array,
		runtime: String,
		rating: String,
		sub: String,
		quality: Array,
		episode: Number,
		route: String
	},
	data() {
		return {
			qualityFilter: "2160p",
		};
	},
	computed: {
		getQuality: function() {
			return this.quality.includes(this.qualityFilter);
		},
	}
};
</script>
