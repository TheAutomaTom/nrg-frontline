<template>

  <n-card title="Nrg Frontline">

    <h3>Status: {{ app$.StatusMessage }}</h3>
    <h3>User: {{ config$.User }}</h3>

    <p>
      <label for="pass">Password:</label>
      <input v-model="config$.Password" type="password" id="user" name="user" required />
    </p>



  </n-card>

</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAppState } from "./../../data/app-state";
import { useUserConfigState } from "./../../data/user-confg-state";
const app$ = useAppState();
const user$ = useUserConfigState();

onMounted(async () => {
  // config$.User = props.id;
  // const hasData = await app$.LoadSavedData();
  console.log("onMounted()");
  console.log("@HomeView config$.User:" + user$.User);
  // const x = await app$.LoadSavedData();
  console.log("x: " + x);
  // console.log(`Saved data to load? ${hasData}`);
});

</script>
