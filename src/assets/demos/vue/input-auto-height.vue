<template>
  <div class="input-auto-height" :class="{ focus: onFocusInput }">
    <textarea
      ref="textareaRef"
      @blur="onFocusInput = false"
      @focus="onFocusInput = true"
      :style="textareaCalcStyle"
      v-model="inputValue"
      @input="onInput"
    ></textarea>
    <div class="actions" :class="{ 'on-line': onLineSendLayout }">
      <div ref="sendBtnRef" class="action-item">发送🎈</div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { getActualWidthOfChars } from '@blinkjun/utils';
import calcTextareaHeight from '../../js/calcTextareaHeight';
const onFocusInput = ref(false);
const onLineSendLayout = ref(true);
const inputValue = ref('');
const textareaRef = ref();
const sendBtnRef = ref();
const textareaCalcStyle = ref({});

function resizeTextarea() {
  const minRows = 1;
  const maxRows = 7;

  textareaCalcStyle.value = calcTextareaHeight(
    textareaRef.value,
    minRows,
    maxRows
  );
}

function checkInputSize(value = inputValue.value) {
  const width = getActualWidthOfChars(value, {
    size: 13,
    family: 'monospace',
  });
  const inputWidth = textareaRef.value.offsetWidth;
  const btnWidth = sendBtnRef.value.offsetWidth;
  if (inputWidth - btnWidth - width <= 30) {
    onLineSendLayout.value = false;
  } else {
    onLineSendLayout.value = true;
  }
}

function onInput(event) {
  checkInputSize(event.target.value);
}

watch(inputValue, () => {
  resizeTextarea();
});
onMounted(() => {
  resizeTextarea();
});
</script>
<style lang="less" scoped>
.input-auto-height {
  margin: 10px;
  padding: 10px;
  position: relative;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid transparent;
  overflow: hidden;
  box-shadow: 0px 3px 4px 0px rgba(33, 42, 57, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  &.focus {
    border: 1px solid slateblue;
  }
  textarea {
    resize: none;
  }
}
.actions {
  display: flex;
  margin: 6px 12px 6px auto;
  &.on-line {
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 26px;
  }
  .action-item {
    background-color: blueviolet;
    color: #fff;
    cursor: pointer;
    padding: 5px 10px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }
}
</style>
