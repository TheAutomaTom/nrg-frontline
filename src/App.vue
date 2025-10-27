<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider>

      <n-layout-sider bordered content-style="padding: 24px;" :collapsed="isDrawerOpen">
        <n-button @click="theme = darkTheme">
          Dark
        </n-button>
        <n-button @click="theme = null">
          Light
        </n-button>
        <n-button @click="isDrawerOpen = !isDrawerOpen">
          Toggle Drawer
        </n-button>
      </n-layout-sider>

      <n-layout>
        <n-layout-header bordered>
          Header
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          Content
          <n-button @click="isDrawerOpen = !isDrawerOpen">
            Toggle Drawer
          </n-button>
        </n-layout-content>
        <n-layout-footer bordered>
          <n-button @click="isDrawerOpen = !isDrawerOpen">
            Footer
          </n-button>
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider, NLayoutFooter, NText, NH1, NP, NButton } from 'naive-ui';


import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)

const isDrawerOpen = ref(true);
</script>

<style scoped>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
