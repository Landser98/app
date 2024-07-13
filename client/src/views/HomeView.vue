<script setup lang="ts">
import VueForm from '@/components/VueForm.vue'
import type {IUser} from "@/types/user";
import {ref} from 'vue'
import Result from '@/views/Result.vue'

const user = ref<IUser>({
  email: "",
  number: "",
});

const data = ref<IUser[]>([]);
let abortController: AbortController | null = null;


const send = async () => {
  try {
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();
    const response = await fetch("http://localhost:8000/api/user/search", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user.value),
      signal: abortController?.signal,
    });
    data.value = await response.json()
  } catch (e:any) {
    if (e.name === 'AbortError') {
      console.log('Отменено')
    } else {
      throw e;
    }
    console.error(e);
  } finally {
    abortController = null;
  }
}


</script>

<template>
  <main>
    <VueForm :data="user" @send="send" />
    <Result :data="data" v-if="data.length" />
  </main>
</template>
