<template>
  <el-drawer
    class="data-drawer"
    :with-header="false"
    :size="size"
    :append-to-body="true"
    :visible.sync="showDrawer"
    :before-close="onClose"
  >
    <div class="drawer-content">
      <i
        class="el-icon-close"
        @click="showDrawer = false"
        v-if="close"
        tabindex="10"
      ></i>
      <h2 class="title"><slot name="header">标题</slot></h2>
      <div class="drawer-detail">
        <slot></slot>
      </div>
      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </el-drawer>
</template>

<script>
// 通用抽屉组件，使抽屉样式统一
export default {
  name: 'data-drawer',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      default: '850px',
    },
    close: {
      type: Boolean,
      default: true,
    },
    onCloseHandle: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      showDrawer: false,
    };
  },
  watch: {
    value(value) {
      this.showDrawer = value;
    },
    showDrawer(value) {
      this.$emit('input', value);
    },
  },
  methods: {
    onClose(done) {
      if (this.onCloseHandle) {
        return this.onCloseHandle(done);
      } else {
        done();
      }
    },
  },
};
</script>

<style lang="scss">
.data-drawer {
  .el-drawer {
    outline: none !important;
  }
  .drawer-content {
    position: relative;
    min-height: 100%;
    .drawer-detail {
      height: calc(100vh - 130px);
      overflow-y: auto;
    }
    > .el-icon-close {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 16px;
      cursor: pointer;
    }
    > .title {
      font-size: 16px;
      color: #333;
      padding: 18px;
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    }
    > .footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 18px;
      text-align: right;
      box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
