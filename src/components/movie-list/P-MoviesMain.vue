<template>
	<div class="container movie-content">
		<PPagination />
		<PMovieList :cards="cards" />
		<PPagination />
	</div>
</template>

<script>
import PPagination from "~/components/P-Pagination";	
import PMovieList from "~/components/movie-list/P-MovieList";

export default {
  name: 'P-MoviesMain',
  components: {
  	PMovieList,
  	PPagination
  },
  data () {
    return {
      cards: [
      {id: 1, title: "Title 1 Satu"},
      {id: 2, title: "Title 2 Dua"},
      {id: 3, title: "Title 3 Tiga"},
      {id: 4, title: "Title 4 Empat"}
      ]
    }
  }
}
</script>
