<template>
	<div class="card mx-auto">
	  <img src="https://image.tmdb.org/t/p/w300/fNayc14I8UH9rywBXAp2Eh81za3.jpg" class="card-img" alt="">
	  <div class="card-img-overlay">
	    <p class="card-title text-center">{{ title }}</p>
	    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
	    <a href="#" class="btn btn-primary btn-fluid">Play</a>
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
	    quality: String,
	    episode: Number		
	},
	data() {
		return {
		};
	},
};
</script>
