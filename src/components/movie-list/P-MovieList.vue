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
  		<div class="col-sm-2" v-for="card in cardList" :key="card.node.id">
  			<PCard
        :title="card.node.title"
        :poster="card.node.poster"
        :quality="card.node.quality"
        />	
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
    showCard: Number,
    bgPurple: Boolean
  },
  components: {
  	PCard
  },
  data () {
    return {
      titleGroup: this.title
    }
  },
  computed: {
    cardList: function () {
      return this.cards.slice(0, this.showCard)
    }
  }

}
</script>
