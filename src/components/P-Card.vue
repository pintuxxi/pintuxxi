<template>
	<b-card
		:title="title"
		img-src="https://picsum.photos/600/300/?image=25"
		img-alt="Image"
		img-top
		tag="article"
		class="mx-auto"
	>
		<b-card-text>
			Some quick example text to build on the card title and make up
			the bulk of the card's content.
		</b-card-text>

		<b-button href="#" variant="primary">Play</b-button>
	</b-card>

</template>

<script>
export default {
	name: "P-Card",
	props: {
		title: String
	},
	data() {
		return {
			title: title
		};
	},
};
</script>
