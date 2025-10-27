<template>
  <n-layout class="min-h-screen flex flex-col">
    <n-layout-header bordered class="h-16 p-4">
      Header
    </n-layout-header>

    <n-layout has-sider class="flex-1">
      <!-- <n-layout-sider bordered>
        Sider
      </n-layout-sider> -->
      Layout
      <!-- <n-layout-content class="p-6">
        <router-view />
      </n-layout-content> -->
    </n-layout>

    <n-layout-footer bordered class="h-16 p-4">
      Footer
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutFooter, NLayoutSider, NLayoutContent } from 'naive-ui'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 64px;
  padding: 16px;
}

.main {
  flex: 1;
}

.content {
  padding: 24px;
}

.footer {
  height: 64px;
  padding: 16px;
}
</style>
