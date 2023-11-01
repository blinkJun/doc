<template>
  <div class="wrap">
    <textarea
      id="textarea"
      @blur="textareaHandles.onBlur"
      @focus="textareaHandles.onFocus"
      @keyup="textareaHandles.onKeyUp"
      @keydown="textareaHandles.onKeyDown"
      cols="30"
      rows="10"
      placeholder="输入__(两个下划线)触发提示词"
    ></textarea>
    <ul class="option-list" v-if="showList" :style="listPosition">
      <li
        ref="listElOptions"
        v-for="item in options"
        :key="item.value"
        :ref="item.value"
        :class="{ focus: focusValue === item.value }"
        @click="onSelect(item)"
      >
        <span class="label">{{ item.label }}</span>
        <span class="count">{{ item.count }}个</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import getCaretCoordinates from 'textarea-caret';

const listElOptions = ref([]);
const showList = ref(false);
const checkSelectionTimer = ref(null);
const listPosition = reactive({
  top: 0,
  left: 0,
});
const currentInput = ref(null);
const focusValue = ref(null);

const options = [
  {
    label: 'Flat-Coated Retriever',
    value: '__Retriever__',
    count: 10,
  },
  {
    label: 'Chartreux',
    value: '__Chartreux__',
    count: 30,
  },
  {
    label: 'Forstens cat snake',
    value: '__Forstens__',
    count: 40,
  },
  {
    label: 'Polar bear',
    value: '__Polar__',
    count: 230,
  },
  {
    label: 'Northeast Congo Lion',
    value: '__Northeast__',
    count: 23,
  },
  {
    label: 'Atlantic Spotted Dolphin',
    value: '__Atlantic__',
    count: 444,
  },
];

function checkSelection(event) {
  clearTimeout(checkSelectionTimer.value);
  checkSelectionTimer.value = setTimeout(() => {
    const { selectionEnd, value } = event.target;
    // 判断光标当前位置之前的字符串
    const currentInputValue = value.slice(0, selectionEnd);
    const reg = /__(.*?)__/g;
    const matches = currentInputValue.match(reg);
    // 如果最后几个字符为 __test__ 这种格式
    const matchOption = matches
      ? currentInputValue.endsWith(matches[matches.length - 1])
      : false;
    // 如果光标此时的前两个字符为__，且没有匹配到如 __test__ 的最后两个下划线
    const matchKey = (
      matches
        ? matches.reduce((value, item) => {
            return value.replace(item, '');
          }, currentInputValue)
        : currentInputValue
    ).endsWith('__');
    // 则修改弹框位置，显示选择菜单
    if (matchKey && !matchOption) {
      const caret = getCaretCoordinates(event.target, selectionEnd);
      listPosition.top = `${caret.top + 20}px`;
      listPosition.left = `${caret.left}px`;

      showList.value = true;
      currentInput.value = event.target;
    } else {
      showList.value = false;
    }
  }, 200);
}

function selectOption(event) {
  // 为键盘提供快捷操作
  // 阻止默认的行为
  const isUpKey = event.keyCode === 38;
  const isDownKey = event.keyCode === 40;
  const isEnterKey = event.keyCode === 13;
  if (showList.value) {
    if (isUpKey || isDownKey || isEnterKey) {
      event.preventDefault();
      const lastIndex = options.length - 1;
      if (isUpKey) {
        if (focusValue.value) {
          const focusIndex = options.findIndex(
            (item) => item.value === focusValue.value
          );
          if (focusIndex > 0) {
            focusValue.value = options[focusIndex - 1].value;
          } else {
            focusValue.value = options[lastIndex].value;
          }
        } else {
          focusValue.value = options[lastIndex].value;
        }
      }
      if (isDownKey) {
        if (focusValue.value) {
          const focusIndex = options.findIndex(
            (item) => item.value === focusValue.value
          );
          if (focusIndex < lastIndex) {
            focusValue.value = options[focusIndex + 1].value;
          } else {
            focusValue.value = options[0].value;
          }
        } else {
          focusValue.value = options[0].value;
        }
      }
      if (isEnterKey) {
        if (focusValue.value) {
          const item = options.find((item) => item.value === focusValue.value);
          onSelect(item);
        }
      }
    }
  }
}

function onSelect(item) {
  if (currentInput.value) {
    const { selectionStart, selectionEnd, value } = currentInput.value;
    currentInput.value.value =
      value.slice(0, selectionStart - 2) +
      item.value +
      value.slice(selectionEnd, value.length - 1);
    currentInput.value.focus();
  }
}

const textareaHandles = {
  onBlur(event) {
    showList.value = false;
  },
  onFocus(event) {
    checkSelection(event);
  },
  onKeyUp(event) {
    checkSelection(event);
  },
  onKeyDown(event) {
    selectOption(event);
  },
};

watch(focusValue, (value) => {
  if (value) {
    const focusIndex = options.findIndex((item) => item.value === value);
    if (listElOptions.value[focusIndex]) {
      listElOptions.value[focusIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
});
</script>
<style>
.wrap {
  position: relative;
}
#textarea {
  display: block;
  width: 100%;
  height: 250px;
  padding: 20px;
  background-color: #efeaef;
}
.option-list {
  width: 250px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  border-radius: 10px;
  list-style: none;
  padding-left: 0 !important;
  margin: 0 !important;
}

.option-list > li {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.option-list > li.focus {
  background-color: #f5f7fa;
}
.option-list > li:hover {
  background-color: #f5f7fa;
}
.option-list > li:hover .label {
  color: blue;
}
.option-list > li:active {
  opacity: 0.5;
}
.label {
  color: #212a39;
  font-size: 14px;
}
.count {
  color: #cccccc;
  font-size: 12px;
}
</style>
