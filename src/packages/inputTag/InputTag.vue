<template>
  <div>
    <input-tag-core
      :value="value"
      @input="
        tags => {
          $emit('input', tags)
        }
      "
    >
      <div
        class="tags-input"
        slot-scope="{ tags, removeTag, inputAttrs, inputEvents }"
      >
        <span class="tags-input-tag" v-for="(tag, i) in tags" :key="i">
          <span>{{ tag }}</span>
          <button
            type="button"
            class="tags-input-remove"
            @click="removeTag(tag)"
          >
            &times;
          </button>
        </span>
        <input
          class="tags-input-text"
          placeholder="Add tag..."
          v-on="inputEvents"
          v-bind="inputAttrs"
        />
      </div>
    </input-tag-core>
  </div>
</template>

<script>
import inputTagCore from './core'
export default {
  name: 'input-tag',
  components: {
    inputTagCore,
  },
  props: ['value'],
}
</script>

<style lang="less">
.tags-input {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}

.tags-input-tag {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

.tags-input-tag:last-of-type {
  margin-right: 0;
}

.tags-input-remove {
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
}

.tags-input-remove:first-child {
  margin-right: 0.25rem;
}

.tags-input-remove:last-child {
  margin-left: 0.25rem;
}

.tags-input-remove:focus {
  outline: 0;
}

.tags-input-text {
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  min-width: 10rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
