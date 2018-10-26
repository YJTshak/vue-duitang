<template>
    <div class="shop">
        <dheader></dheader>
        <shop-banner></shop-banner>
        <shop-nav></shop-nav>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import shopBanner from './ShopBanner'
import shopNav from './ShopNav'
export default {
  name: 'Shop',
  components: {
    dheader,
    shopBanner,
    shopNav
  }
}
</script>

<style>
</style>
