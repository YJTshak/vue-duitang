<template>
    <div class="sasuke">
        <dheader></dheader>
        <sasuke-nav></sasuke-nav>
        <sasuke-content></sasuke-content>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import sasukeNav from './SasukeNav'
import sasukeContent from './SasukeContent'
export default {
  name: 'Sasuke',
  components: {
    dheader,
    sasukeNav,
    sasukeContent
  }
}
</script>

<style>
</style>
