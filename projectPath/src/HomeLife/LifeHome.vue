<template>
    <div class="life">
        <dheader></dheader>
        <life-nav></life-nav>
        <life-content></life-content>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import lifeNav from './LifeNav'
import lifeContent from './LifeContent'
export default {
  name: 'Life',
  components: {
    dheader,
    lifeNav,
    lifeContent
  }
}
</script>

<style>
</style>
