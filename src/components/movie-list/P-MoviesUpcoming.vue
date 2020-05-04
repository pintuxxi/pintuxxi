<template>
    <PMovieList
      title="Upcoming Movies"
      :cards="$static.movies.edges"
      :show-card="12"
      bg-purple
    />
</template>

<static-query>
query {
  movies: allMovies {
    edges {
      node {
        id
        imdb
        title
        slug
        year
        rating
        runtime
        genre
        yt_trailer
        poster
        bg_image
        quality
        route
      }
    }
  }
}
</static-query>

<script>
import PMovieList from "~/components/movie-list/P-MovieList";

export default {
  name: 'P-MoviesUpcoming',
  components: {
  	PMovieList
  },
  data () {
    return {}
  }
}
</script>