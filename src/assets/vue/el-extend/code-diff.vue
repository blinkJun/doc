<template>
  <div v-html="diffHtml" class="diff-wrap"></div>
</template>

<script>
import { createPatch } from 'diff';
import { html, parse } from 'diff2html';
import 'diff2html/bundles/css/diff2html.min.css';
export default {
  props: {
    oldVal: {
      require: true,
    },
    newVal: {
      require: true,
    },
  },
  computed: {
    diffHtml() {
      const oldVal = this.oldVal;
      let newVal = this.newVal;
      let outputFormat = 'side-by-side';

      // 当数据不为空且前后数据一样时，输出单个文件内容，在最后一行进行提示
      if (oldVal === newVal && oldVal !== '') {
        outputFormat = 'line-by-line';
        newVal += '\n数据结果对比一致，请忽略此行高亮';
      }

      const patchData = createPatch('', oldVal, newVal, '', '', {
        context: 1000,
      });
      const drawFileList = false;
      const renderNothingWhenEmpty = false;
      const outputString = parse(patchData, {
        inputFormat: 'diff',
        outputFormat: outputFormat,
        drawFileList: drawFileList,
        matching: 'lines',
        renderNothingWhenEmpty: renderNothingWhenEmpty,
      });
      return html(outputString, {
        inputFormat: 'json',
        outputFormat: outputFormat,
        drawFileList: drawFileList,
        matching: 'lines',
        renderNothingWhenEmpty: renderNothingWhenEmpty,
      });
    },
  },
};
</script>

<style lang="scss">
.diff-wrap {
  .d2h-file-side-diff {
    float: left;
  }
}
</style>
