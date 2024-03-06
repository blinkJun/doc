<template>
  <div class="check-all-component">
    <el-checkbox
      class="check-all"
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <slot name="check-all-side"></slot>
    <el-checkbox-group
      :value="value"
      @input="updateValue"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox
        v-for="option in options"
        :label="option[valueKey]"
        :key="option[valueKey]"
      >
        <slot name="option" :option="option">
          {{ option[labelKey] }}
        </slot>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
// 全选组件，传入指定的子段即可为选项提供多选的功能
export default {
  name: 'checked-all',
  props: {
    value: {
      required: true,
    },
    options: {
      required: true,
    },
    labelKey: {
      default: 'value',
    },
    valueKey: {
      default: 'label',
    },
  },
  data() {
    return {
      checkAll: this.value.length === this.options.length,
      isIndeterminate:
        this.value.length > 0 && this.value.length !== this.options.length,
    };
  },
  watch: {
    options() {
      this.checkAll = this.value.length === this.options.length;
      this.isIndeterminate =
        this.value.length > 0 && this.value.length !== this.options.length;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
    handleCheckAllChange(val) {
      this.$emit(
        'input',
        val ? this.options.map((item) => item[this.valueKey]) : []
      );
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
    },
  },
  mounted() {
    this.checkAll = this.value.length === this.options.length;
    this.isIndeterminate =
      this.value.length > 0 && this.value.length !== this.options.length;
  },
};
</script>

<style lang="scss" scoped>
.check-all-component {
  .check-all {
    padding: 5px 0;
  }
}
</style>
