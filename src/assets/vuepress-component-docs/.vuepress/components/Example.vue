<template>
  <div class="Example">
    <ClientOnly>
      <component :is="demo" v-if="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'Example',
  components: {},
  props: {
    file: {
      type: String,
      required: true,
    },
    demo: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.Example {
  padding: 20px;
}
</style>
