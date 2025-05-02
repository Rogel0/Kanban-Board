<template>
  <div class="flex flex-col items-center gap-4 pt-6">
    <el-card style="width: 350px; height: 150px" class="bg-black text-white">
      <template #header v-if="task && task.title">
        <div class="flex justify-between">
          <div class="flex items-center gap-2">
            <el-icon>
              <CircleCheck class="circleCheck" />
            </el-icon>
            <span>{{ task.title }}</span>
          </div>
          <div class="flex justify-items-end">
            <el-icon>
              <More />
            </el-icon>
          </div>
        </div>
        <div class="flex flex-row gap-3 pt-8">
          <p
            class="text-xs text-white bg-orange-500 w-16 rounded-full text-center h-4"
          >
            {{ task.priorityLevel }}
          </p>
          <p class="text-xs text-gray-500 border rounded-full w-16 text-center">
            {{ task.taskCategory }}
          </p>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "@/model/types";
import { CircleCheck, More } from "@element-plus/icons-vue";

defineProps<{ task: Task }>();
</script>
