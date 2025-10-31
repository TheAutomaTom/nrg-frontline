<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">

    <n-layout-header bordered>
      <h3>App Header</h3>
    </n-layout-header>

    <n-layout class="app-layout">
      <n-layout-content class="app-content">
        <p v-for="i in 60" :key="i">Line {{ i }}</p>
      </n-layout-content>

      <n-layout-footer bordered class="app-footer">

        <n-scrollbar :x-scrollable="true" class="footer-scroll">
          <div class="footer-rail">
            <n-button v-for="i in 15" :key="i" class="footer-button">
              Button {{ i }}
            </n-button>
          </div>
        </n-scrollbar>

      </n-layout-footer>
    </n-layout>

  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { themeOverrides } from './styles/theme';
</script>

<style></style>
