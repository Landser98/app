<template>
  <div class="result">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import type { IProps } from '@/types/user'

defineProps<IProps>();

</script>
