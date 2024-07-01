<template>
  <el-table-column
      v-if="header[property.children]?.length > 0"
      align="center"
      :min-width="header[property.width]"
      show-overflow-tooltip
      :prop="header[property.prop]"
      :label="header[property.label]">
    <template v-for="(child) in header[property.children]">
      <RecursiveTableHeader :header="child" :property="property" />
    </template>
  </el-table-column>
  <el-table-column
      v-else
      align="center"
      :min-width="header[property.width]"
      show-overflow-tooltip
      :prop="header[property.prop]"
      :label="header[property.label]">
  </el-table-column>
</template>

<script setup lang="ts" name="RecursiveTableHeader">

import {PropType} from "vue";
const props = defineProps({
  header: {
    type: Object as PropType<any>,
    required: true,
  },
  property: {
    type: Object as PropType<Property>,
    required: false,
    default: () => {
      return {
        prop: 'prop',
        label: 'label',
        width: 'width',
        children: 'children',
      }
    }
  },
})

interface Property {
  prop: string;
  label: string;
  width: string;
  children: string;
}

</script>

