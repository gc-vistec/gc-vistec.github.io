<template>
  <div>
    <navbar></navbar>
      <div class="thanks">
        <h3>
          Thank you for registration.
        </h3>
      </div>
    <!-- <cs-footer></cs-footer> -->
  </div>
</template>
<script>
import Navbar from '@/components/Forms/Navbar'
import CsFooter from '@/components/Home/Footer'
export default {
  components: {
    Navbar,
    CsFooter
  }
}
</script>
<style scoped>
.thanks {

  text-align: center;

}
</style>
