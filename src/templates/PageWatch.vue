<template>
	<Layout>
		<div class="container movie-content">
			<div>
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb bg-secondary">
						<li class="breadcrumb-item text-light">
							<g-link to="/">Home</g-link>
						</li>
						<li class="breadcrumb-item">
							<g-link to="/">Movie</g-link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							{{ $context.node.title }}
						</li>
					</ol>
				</nav>
			</div>
			<div>
				<p
					class="text-secondary-dark bg-warning text-center font-weight-bold py-2 rounded"
				>
					If a server broken, loading infinity and you get any error
					message when trying to stream, please Refresh the page or
					switch to another streaming server.
				</p>
			</div>
			<div>
				<div class="movie-player rounded-top" :style="getStyles">
					<a href="" class="movie-btn-play">
						<font-awesome
							:icon="['fas', 'play']"
							class="text-play"
						/>
					</a>
				</div>
				<div class="movie-control rounded-bottom">
					<ul class="list-inline py-3 my-0 mx-2">
						<li
							class="list-inline-item"
							v-for="c in controls"
							:key="c.id"
						>
							<a
								class="btn btn-sm text-light"
								href="#"
								role="button"
							>
								<font-awesome :icon="c.icon" />
								<span class="px-2">{{ c.name }}</span>
							</a>
						</li>
						<li class="list-inline-item float-right">
							<a
								class="btn btn-sm text-light"
								href="#"
								role="button"
							>
								<span class="watch-text"
									><span class="text-primary">Watch</span>
									{{ $context.node.title }}
									<span class="hd-text">HD</span
									><span class="text-primary"> FOR FREE</span>
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="movie-server">
					<ul class="list-inline text-center py-4">
						<li
							class="list-inline-item mx-2"
							v-for="s in server"
							:key="s.id"
						>
							<a
								class="btn btn-bookmark btn-sm shadow-none py-2 px-3"
								href="#"
								role="button"
							>
								<font-awesome :icon="['fas', 'play']" />
								<span class="px-2">{{ s.name }}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container movie-detail">
			<div class="row">
				<div class="col d-flex">
					<div class="movie-detail-poster">
						<img
							:src="$context.node.poster"
							class="rounded"
							alt="Responsive image"
						/>
					</div>
					<div class="movie-detail-description ml-4">
						<h2>Title</h2>
						<p>test</p>
					</div>
					<div></div>
				</div>
				<div class="col">
					test 2
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	name: "PageWatch",

	data() {
		return {
			server: [
				{ id: 0, name: "Trailer" },
				{ id: 1, name: "FAST-1" },
				{ id: 2, name: "FAST-2" },
				{ id: 3, name: "OTHER" },
			],
			controls: [
				{
					id: 0,
					name: "Bookmark",
					icon: ["fas", "bookmark"],
					action: "",
				},
				{
					id: 1,
					name: "Turn of light",
					icon: ["fas", "play"],
					action: "",
				},
				{ id: 2, name: "Comment", icon: ["fas", "play"], action: "" },
			],
		};
	},
	computed: {
		getStyles: function() {
			return {
				backgroundImage: `url(${this.$context.node.poster})`,
				backgroundSize: "cover",
			};
		},
	},
};
</script>

<style lang="css" scoped></style>
