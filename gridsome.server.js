// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')


async function getMovies() {
	const { data } = await axios.get("https://yts.mx/api/v2/list_movies.json?quality=3D") 
	return data.data.movies
}


module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })

	api.loadSource(async actions => {
	    const moviesCollection = actions.addCollection("Movies")
	    const movies = await getMovies()


	    for (const movie of movies) {
	    	let quality = []
	    	let route = `/movie/${movie.imdb_code}` //.toLowerCase().replace(/ /g, "-")
	    	for (const tor of movie.torrents) {
	    		quality.push(tor.quality)
	    	}

	    	moviesCollection.addNode({
	    		id: movie.id,
	    		imdb: movie.imdb_code,
	    		title: movie.title,
	    		title_english: movie.title_english,
	    		title_long: movie.title_long,
	    		slug: movie.slug,
	    		year: movie.year,
	    		rating: movie.rating,
	    		runtime: movie.runtime,
	    		genre: movie.genres,
	    		summary: movie.summary,
	    		desc_full: movie.description_full,
	    		yt_trailer: movie.yt_trailer_code,
	    		poster: movie.large_cover_image,
	    		bg_image: movie.background_image,
	    		quality: quality,
	    		route: route
	    	})
	    }

	})

  api.createPages( async ({ graphql, createPage }) => {

  	const { data } = await graphql(`
		query {
		  allMovies {
		    edges {
		      node {
		      	id
		      	imdb
		        title
		      }
		    }
		  }
		}
	`)



  	data.allMovies.edges.forEach(({ node }) => {
	    createPage({
	    	path: `/movie/${node.imdb}`,
	    	component: "./src/templates/PageWatch.vue",
	    	context: {
	    		id: node.id,
	    		imdb: node.imdb,
	    		title: node.title
	    	}
	    })
  	})

    // createPage({
    // 	path: `/movie`,
    // 	component: "./src/templates/PageWatch.vue",
    // })

  	// for (const movie of data.allMovies.edges) {
	  //   actions.createPage({
	  //   	path: `/movie/${movie.node.route}`,
	  //   	component: "./src/templates/PageWatch.vue",
	  //   	context: {
	  //   		imdb: movie.node.imdb
	  //   	}
	  //   })
  	// }



  // 	const movies = await getMovies()
  // 	movies.forEach( mov => {
		// createPage({
		// 	path: `/movie/${mov.imdb_code}`,
		// 	component: "./src/templates/PageWatch.vue",
	 //    	context: {
	 //    		id: mov.id,
	 //    		imdb: mov.title
	 //    	}
		// })
  // 	})

  })

}
