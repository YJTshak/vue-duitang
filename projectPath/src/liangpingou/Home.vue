<template>
    <div class="demo">
        <dheader></dheader>
        <lnav></lnav>
        <lshangpin></lshangpin>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import lnav from './Lnav'
import lshangpin from './Lshangpin'
export default {
  name: 'Demo',
  components: {
    dheader,
    lnav,
    lshangpin
  }
}
</script>

<style>
</style>
