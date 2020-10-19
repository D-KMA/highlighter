<template>
<!-- eslint-disable max-len -->
    <div class="inline-flex flex-col">
      <label
        for="menu-input"
        class="font-black flex-initial text-sm text-gray-500">{{label}}</label>
      <div
        :class="[isFocused ? 'border-gray-200' : 'border-gray-600']"
        class="relative border rounded-md mt-1 p-1 w-40 flex items-center hover:border-gray-200">
        <input
          type="text"
          id="menu-input"
          autocomplete="off"
          :placeholder="placeholder"
          v-bind="$attrs"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          @focusin="focusin()"
          @focusout="focusout()"
          aria-haspopup="listbox"
          aria-required="true"
          class="bg-gray-800 text-sm text-gray-200 w-32 font-normal focus:outline-none" />
        <button
          @click="isActive = !isActive, toggleMenuBtn(isActive)"
          class="mb-1 absolute w-6 right-0 focus:outline-none">
          <i
            :class="[isActive ? 'text-gray-200' : 'text-gray-600']"
            class="fas fa-sort-down text-xl leading-4 hover:text-gray-300"></i>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BaseInputDrop',
  inheritAttrs: false,
  props: {
    modelValue: String,
    modelModifiers: { default: () => ({}) },
    label: { type: String, required: false },
    placeholder: { type: String, required: false },
    menuValue: { type: Boolean, required: false },
  },
  emits: ['input', 'focusin', 'focusout', 'toggle-menu-btn', 'update:modelValue'],
  data() {
    return {
      isActive: false,
      isFocused: false,
    };
  },
  watch: {
    menuValue(newValue) {
      this.isActive = newValue;
    },
  },
  methods: {
    toggleMenuBtn(value) {
      // this event is used to toggle the menu option if available
      this.$emit('toggle-menu-btn', value);
    },
    focusin() {
      // emit this event if the input field is focused
      this.$emit('focusin');
      this.isFocused = true;
    },
    focusout() {
      // emit this event if the input field is out of focus
      this.$emit('focusout');
      this.isFocused = false;
    },
  },
};
</script>