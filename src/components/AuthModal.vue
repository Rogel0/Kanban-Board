<template>
  <el-dialog v-model="props.modalValue">
    <el-tabs>
      <el-tab-pane label="Login"></el-tab-pane>
      <el-tab-pane label="Register"></el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{ modalValue: boolean }>();
</script>

<style scoped></style>
