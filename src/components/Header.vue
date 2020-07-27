<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    />
    <div :style="{ position: 'absolute', right: '2rem', top: 0, }">
      <a-avatar :size="32" icon="user" />
      <a-icon type="down" :style="{ marginLeft: '.3rem', color: '#A4AFB7', fontSize: '12px' }"/>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
};
</script>

<style>

</style>
