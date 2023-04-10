<template>
  <div class="SourceCode language-vue" v-html="decoded"></div>
</template>

<script>
export default {
  name: 'SourceCode',
  components: {},
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    decoded() {
      return decodeURIComponent(this.source);
    },
  },
  methods: {},
};
</script>

<style>
.language-vue {
  margin: 0;
  border-radius: 0;
}
.theme-default-content pre {
  margin: 0;
}
</style>
