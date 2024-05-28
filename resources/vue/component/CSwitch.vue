<script setup>
import { ref } from 'vue'

const props = defineProps({
  labelText: {
    type: String,
    default: '',
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  elementId: {
    type: String,
    default: 'CSwitch',
  },
})

const emit = defineEmits(['onChange'])

const onChange = (event) => {
  emit('onChange', event.target.checked)
}
</script>

<template>
  <label
    class="c-switch"
    :data-testId="elementId"
  >
    <input
      type="checkbox"
      value="true"
      class="c-switch__input"
      :checked="isChecked"
      @change="onChange"
    />
    <div class="c-switch__ui"></div>
    <div class="c-switch__Text">{{ labelText }}</div>
  </label>
</template>

<style lang="scss">
.c-switch {
  display: inline-block;
  user-select: none;
}

.c-switch__input {
  display: none;
}

.c-switch__ui {
  vertical-align: middle;
  display: inline-block;
  border: 2px solid #3b4043;
  border-radius: 20px;
  width: 44px;
  height: 24px;
  overflow: hidden;
  position: relative;
  background-color: #3b4043;
  transition: all 200ms;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 24px;
    background-color: #1a5cb8;
    top: 0px;
    right: 100%;
    transition: 200ms all;
  }
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 0px;
    left: 0px;
    border: 1px solid #ddd;
    display: block;
    transition: 200ms all;
    background-color: #fff;
  }
}

.c-switch__input {
  &:checked ~ .c-switch__ui {
    border-color: #1a5cb8;
    &:before {
      right: 0%;
    }
    &:after {
      left: 20px;
    }
  }
}

.c-switch__Text {
  display: inline-block;
  cursor: pointer;
}
</style>
