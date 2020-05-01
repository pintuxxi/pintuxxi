<template>
	<footer class="container pt-5 text-muted text-center text-small">
		<div class="row">
			<div class="col">
				<h5>© {{ website }}</h5>
				<p class="mb-1">
					<strong>{{ website }}</strong> is a Free Movies streaming
					site with zero ads. We let you watch movies online without
					having to register or paying, with over 10000 movies and
					TV-Series. You can also Download full movies from
					<strong>{{ website }}</strong> and watch it later if you
					want.
				</p>
				<ul class="list-inline">
					<li class="list-inline-item">
						<a href="#">Term of service</a>
					</li>
					<li class="list-inline-item"><a href="#">DCMA</a></li>
					<li class="list-inline-item"><a href="#">Contact</a></li>
					<li class="list-inline-item"><a href="#">Sitemap</a></li>
				</ul>
				<p class="mx-auto content-services">
					<small>
						<strong>{{ website }}</strong> does not store any files
						on our server, we only linked to the media which is
						hosted on 3rd party services.
					</small>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "P-Footer",

	data() {
		return {
			website: String(process.env.GRIDSOME_WEBSITE),
		};
	},
};
</script>
