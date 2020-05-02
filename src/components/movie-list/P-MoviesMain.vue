<template>
	<PMovieList
		title="Main Featured"
		:cards="cards"
	/>
</template>

<script>
import PMovieList from "~/components/movie-list/P-MovieList";

export default {
  name: 'P-MoviesMain',
  components: {
  	PMovieList
  },
  data () {
    return {
      cards: null
    }
  },
  mounted() {
  	
  }

}
</script>