<template>
	<div class="card mx-auto" :title="title">
		<img :src="poster" class="card-img" :alt="title" />
		<div class="hd-tag" v-if="getQuality">HD</div>
		<a class="card-link" href="#">
			<font-awesome :icon="['fas', 'play']" />
		</a>
		<div class="card-img-overlay">
			<p class="card-title text-center">{{ title }}</p>
			<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
			<div class="btn-group" role="group" aria-label="Button Card">
				<button class="btn btn-success btn-sm shadow-none">
					Bookmark
				</button>
				<button class="btn btn-warning btn-sm shadow-none">
					Trailer
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
	},
};
</script>
