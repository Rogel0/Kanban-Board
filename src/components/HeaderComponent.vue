<template>
  <el-header>
    <div class="left">
      <h3>Web Site</h3>
    </div>
    <div class="right">
      <el-button :icon="Bell" link></el-button>
      <el-button :icon="Plus" class="add"></el-button>
      <el-button :icon="Avatar" class="avatar"></el-button>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { Avatar, Bell, Plus } from "@element-plus/icons-vue";
</script>

<style scoped>
.avatar {
  width: 7px;
  height: auto;
  border-radius: 40px;
  background-color: blueviolet;
  color: white;
}

.add {
  width: 7px;
  height: auto;
  border-radius: 40px;
  background-color: rgb(224, 137, 38);
  color: white;
}

.el-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-inline: 40px;
}
</style>
