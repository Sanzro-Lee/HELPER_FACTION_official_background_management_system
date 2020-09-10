<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-input-search
      :placeholder="msg"
      :style="{width: '300px', marginLeft: '20px', display: show}"
      @search="onSearch"
    />
    <div :style="{ float: 'right', marginRight: '20px' }">
      <!-- <a-avatar :size="32" icon="user" /> -->
			黄小明
      <a-icon type="down" :style="{ marginLeft: '.3rem', color: '#A4AFB7', fontSize: '12px' }" />
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
    show: String,
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped></style>
