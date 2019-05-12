<template>
  <el-select
    :value="value"
    v-bind="$attrs"
    v-on="listeners"
    @input.native="e=>isSelectAllShow=e.target.value.trim()===''"
    class="vf-el-select"
  >
    <!-- //! element has a bug with @blur on el-select, and @visible-change would fail if user just click the x button. So, so use change event. https://github.com/ElemeFE/element/issues/10810 -->
    <el-checkbox
      v-show="isSelectAllShow"
      :value="isSelectAll"
      class="vf-el-select__check-all-btn"
      @input="selectAll(isSelectAll)"
    >{{selectAllLabel}}</el-checkbox>
    <slot></slot>
  </el-select>
</template>

<script>
import { Checkbox, Select, Option } from 'element-ui'
import { hyphenToPascal } from '../../../src/utils'
export default {
  name: 'VfElSelect',
  components: {
    ElCheckbox: Checkbox,
    ElSelect: Select
  },
  props: {
    value: {
      require: true,
      default: () => ([])
    },
    selectAllLabel: {
      default: '全选'
    }
  },
  data () {
    return {
      isSelectAllShow: true
    }
  },
  computed: {
    isSelectAll () {
      return this.value.length > 0 && this.value.length === this.getOptionSlots().length
    },
    listeners () {
      return {
        ...this.$listeners
      }
    }
  },
  methods: {
    getOptionSlots () {
      if (Array.isArray(this.$slots.default) === false) {
        return []
      }
      return this.$slots.default.filter(o => {
        if (
          typeof o.componentOptions !== 'object' ||
          o.componentOptions === null
        ) {
          return false
        }
        return (
          Option.name === hyphenToPascal(o.componentOptions.tag)
        )
      })
    },
    selectAll (isSelectAll) {
      if (isSelectAll === true) {
        this.$emit('input', [])
        this.$emit('change', [])
        return
      }
      if (isSelectAll === false) {
        const allValues = this.getOptionSlots().map(o => o.componentInstance.value)
        this.$emit('input', allValues)
        this.$emit('change', allValues)
      }
    }
  }

}
</script>
