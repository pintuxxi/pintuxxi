<template>
	<div class="container">
		<div class="row">
			<b-breadcrumb :items="items"></b-breadcrumb>
			<h1>{{ $context.title }}</h1>
		</div>
	</div>
<!--   <Layout>
    <h1>{{ $context.imdb }}</h1>
  </Layout> -->
</template>

<script>
export default {

  name: 'PageWatch',

  data () {
    return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>