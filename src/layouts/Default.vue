<template>
  <div>
    <PNavbar />

    <div>
      <slot />
    </div>
    <PFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import PNavbar from "~/components/P-Navbar";
import PFooter from "~/components/P-Footer";

export default {
  components: {
    PNavbar,
    PFooter
  },
};
</script>
