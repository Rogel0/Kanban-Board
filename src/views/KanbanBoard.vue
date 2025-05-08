<template>
  <HeaderComponent />
  <div id="kanban" class="h-[90vh] pt-8">
    <BoardColumn />
  </div>
</template>

<script setup lang="ts">
import BoardColumn from "@/components/BoardColumn.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style scoped></style>
