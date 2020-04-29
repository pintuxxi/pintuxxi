<template>
	<b-jumbotron bg-variant="secondary">
		<PMoviesJumbotron />
	</b-jumbotron>
</template>

<script>
import PMoviesJumbotron from "~/components/movie-list/P-MoviesJumbotron";

export default {
	name: "P-Jumbotron",
	components: {
		PMoviesJumbotron
	},
	data() {
		return {};
	},
};
</script>