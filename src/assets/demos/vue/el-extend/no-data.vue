<template>
  <div class="no-data">
    <i class="el-icon-document-delete"></i>
    <p><slot>暂无数据</slot></p>
  </div>
</template>

<script>
// 无数据时的填充文本，已加载为全局组件，可直接使用 <no-data></no-data>
export default {
  name: 'no-data',
};
</script>

<style lang="scss" scoped>
.no-data {
  padding: 15px 10px;
  width: 100%;
  text-align: center;
  color: #999;
  .el-icon-document-delete {
    font-size: 40px;
    line-height: 40px;
  }
  > p {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
