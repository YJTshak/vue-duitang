<template>
    <div class="avatar">
        <dheader></dheader>
        <avatar-nav></avatar-nav>
        <avatar-content></avatar-content>
    </div>
</template>

<script>
import dheader from '../components/Dheader'
import avatarNav from './AvatarNav'
import avatarContent from './AvatarContent'
export default {
  name: 'Avatar',
  components: {
    dheader,
    avatarNav,
    avatarContent
  }
}
</script>

<style>
</style>
