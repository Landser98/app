<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form-group">
      <label>Email:</label>
      <input type="email" v-model="userData.email"  required />
    </div>
    <div class="form-group">
      <label>Номер</label>
      <MaskInput mask="##-##-##" type="tel" v-model="userData.number" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IUser, IProps } from '@/types/user'


const props = defineProps<IProps>();
const emits = defineEmits(['update', 'send'])

const userData = computed<IUser>({
  get: () => props.data,
  set: (value: IUser) => {
    emits("update", value);
  }
})

const submitForm = () => {
  emits("send")
};
</script>

<style scoped>
.form {
  display: grid;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  font-size: 1.1rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
}
</style>
