<![CDATA[<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message: string = ref('test') // This should show a type error because ref<string> is not assignable to string
</script>]]>