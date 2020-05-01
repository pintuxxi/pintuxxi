<template>
  <div :class="{'content-purple': bgPurple}">
    <div class="container movie-content">
      <div class="row clearfix">
        <h3 v-if="titleGroup">
          {{ titleGroup }}
        </h3>
        <g-link class="pull-right">Show All</g-link>
      </div>
  	<div class="row">
  		<div class="col-sm-3 col-md-4 col-xl-3" v-for="card in cards" :key="card.id">
  			<PCard :title="card.title"/>	
  		</div>
  	</div>
    </div>
  </div>
</template>

<script>
import PCard from "~/components/P-Card";

export default {
  name: 'P-MovieList',
  props: {
    title: String,
    cards: Array,
    bgPurple: Boolean
  },
  components: {
  	PCard
  },
  data () {
    return {
      showCard: 5,
      titleGroup: this.title
    }
  },

}
</script>
