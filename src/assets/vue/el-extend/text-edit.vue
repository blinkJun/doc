<template>
  <div class="component text-edit" @click.stop>
    <template v-if="onEdit">
      <el-input
        v-model="text"
        size="mini"
        placeholder="字数上限20个"
        clearable
        @keyup.native.enter="updateText"
        maxlength="20"
      ></el-input>
      <el-button type="text" size="mini" @click="onEdit = false"
        >取消</el-button
      >
      <el-button type="primary" size="mini" @click="updateText">确定</el-button>
    </template>
    <template v-else>
      <span class="text"
        ><slot>{{ value }}</slot></span
      >
      <i class="el-icon-edit" v-if="!readonly" @click="onEdit = true"></i>
    </template>
  </div>
</template>

<script>
// 可编辑的文本
let handleDocucmentClick;
export default {
  name: 'text-edit',
  props: {
    value: {
      default: '可编辑的文本',
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 对新文本验证
    validate: {
      type: Function,
      default: async () => true,
    },
  },
  data() {
    return {
      text: this.value,
      onEdit: false,
    };
  },
  watch: {
    value(value) {
      this.text = value;
    },
    onEdit(value) {
      if (value) {
        this.text = this.value;
      }
    },
  },
  methods: {
    handleDocucmentClick() {
      this.onEdit = false;
    },
    async updateText() {
      const validateSuccess = await this.validate(this.text);
      if (!validateSuccess) {
        return false;
      }
      if (this.value !== this.text) {
        this.$emit('input', this.text);
        this.$emit('change', this.text);
      }
      this.onEdit = false;
    },
  },
  beforeDestroy() {
    document.removeEventListener('click', handleDocucmentClick);
  },
  mounted() {
    handleDocucmentClick = this.handleDocucmentClick.bind(this);
    document.addEventListener('click', handleDocucmentClick);
  },
};
</script>

<style lang="scss">
.component.text-edit {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  > .el-icon-edit {
    margin-left: 10px;
    cursor: pointer;
    vertical-align: middle;
  }
  > .text {
    line-height: 28px;
  }
  > .el-input {
    width: calc(100% - 110px);
    vertical-align: middle;
  }
  > .el-button {
    margin-left: 10px;
  }
}
</style>
