<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<b-pagination v-model="currentPage" :total-rows="rows" size="" align="center"></b-pagination>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "P-Pagination",

	data() {
		return {
		    rows: 100,
		    currentPage: 1
		};
	},
};
</script>

<style lang="css" scoped></style>
