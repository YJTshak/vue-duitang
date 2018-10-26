<template>
    <div class="facial">
        <dheader></dheader>
        <facial-nav></facial-nav>
        <facial-content></facial-content>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import facialNav from './FacialNav'
import facialContent from './FacialContent'
export default {
  name: 'Facial',
  components: {
    dheader,
    facialNav,
    facialContent
  }
}
</script>

<style>
</style>
