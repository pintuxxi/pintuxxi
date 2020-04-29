<template>
	<div class="row">
		<div class="col-sm-3 col-md-4 col-xl-3" v-for="card in cards" :key="card.id">
			<PCard :title="card.title"/>	
		</div>
	</div>
</template>

<script>
import PCard from "~/components/P-Card";

export default {
  name: 'P-MovieList',
  props: {
    cards: Array
  },
  components: {
  	PCard
  },
  data () {
    return {}
  }
}
</script>
