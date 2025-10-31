import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserConfigState = defineStore("userConfigState", () => {
  const User = ref(undefined as string | undefined);
  const Key = ref("" as string);

  const IsValid = (): boolean => {
    return !!User.value && User.value.length > 0;
  };

  return {
    User,
    Key,
    IsValid,
  };
});
