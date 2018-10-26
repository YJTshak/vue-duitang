<template>
    <div class="food">
        <dheader></dheader>
        <food-nav></food-nav>
        <food-content></food-content>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import foodNav from './FoodNav'
import foodContent from './FoodContent'
export default {
  name: 'Food',
  components: {
    dheader,
    foodNav,
    foodContent
  }
}
</script>

<style>
</style>
