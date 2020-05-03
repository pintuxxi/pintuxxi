<template>
	<div class="card mx-auto" :title="title">
	  <img :src="poster" class="card-img" :alt="title">
	  <div class="hd-tag" v-if="getQuality">HD</div>
	  <button type="button" class="btn btn-play btn-primary">Play</button>
	  <div class="card-img-overlay">
	    <p class="card-title text-center">{{ title }}</p>
	    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
	    <!-- <a href="#" class="btn btn-primary btn-fluid">Play</a> -->
		<div class="btn-group" role="group" aria-label="Button Card">
		  <button type="button" class="btn btn-success btn-sm">Bookmark</button>
		  <button type="button" class="btn btn-warning btn-sm">Trailer</button>
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
	    episode: Number		
	},
	data() {
		return {
			qualityFilter: "2160p"
		};
	},
	computed: {
		getQuality: function () {
			return this.quality.includes(this.qualityFilter)
		}
	}
};
</script>
