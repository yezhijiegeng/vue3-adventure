<template>
  <div>
    
  test
  {{ x }} {{ y }} {{ isDark }} {{ store }}
  </div>
</template>

<script>
import {useLocalStorage, useMouse,usePreferenceDark } from '@vueuse/core'

export default {
  setup() {
    const  {x,y} = useMouse();

    const isDark = usePreferenceDark();

    const store = useLocalStorage(
      'my-storage',
      {
        name:'Apple',
        color:'red'
      }
    )
    return {
      x,
      y,
      isDark,
      store
    }
  },
};
</script>
