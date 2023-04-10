<template>
  <ClientOnly>
    <div class="demo">
      <p class="example-description" v-html="decodedDescription" />
      <div class="example">
        <Example :file="path" :demo="formatPathDemos[path]" />
        <div class="op-btns">
          <IconSourceCode @click.native="setSourceVisible" />
          <IconCopy @click.native="copyCode" />
          <a :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
            <IconGitlab />
          </a>
        </div>
        <SourceCode v-show="sourceVisible" :source="source" />
      </div>
    </div>
  </ClientOnly>
</template>

<script>
import { createGitHubUrl } from '../utils/utils';
import copy from 'copy-to-clipboard';
const demos = require.context('../../examples', true, /\.vue$/);
// 匹配对应的示例
const formatPathDemos = {};
demos.keys().forEach((key) => {
  formatPathDemos[key.replace('./', '').replace('.vue', '')] =
    demos(key).default;
});
export default {
  name: 'demo',
  components: {},
  props: {
    source: {
      type: String,
    },
    path: {
      type: String,
    },
    rawSource: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      formatPathDemos,
      sourceVisible: false,
    };
  },
  computed: {
    decodedDescription() {
      return decodeURIComponent(this.description);
    },
    demoSourceUrl() {
      const { repo, docsDir, docsBranch } = this.$themeConfig;
      return createGitHubUrl(repo, docsDir, docsBranch, this.path);
    },
  },
  methods: {
    async copyCode() {
      try {
        await copy(decodeURIComponent(this.rawSource));
        this.$message.success('复制成功！');
      } catch (e) {
        this.$message.error(e.message);
      }
    },
    setSourceVisible() {
      this.sourceVisible = !this.sourceVisible;
    },
  },
};
</script>
<style scoped>
.example-description {
  font-size: 14px;
}
.example {
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
}
.op-btns {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
  line-height: 3rem;
  border-top: 1px solid #eee;
}
svg {
  width: 20px;
  height: 20px;
  line-height: 1em;
  margin-right: 20px;
  cursor: pointer;
  color: var(--text-color);
}
a {
  display: flex;
  align-items: center;
}
</style>
