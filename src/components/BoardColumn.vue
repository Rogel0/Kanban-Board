<template>
  <div class="flex flex-row p-8 h-[80vh]">
    <div
      class="w-[380px]"
      v-for="column in kanbanStore.columns"
      :key="column.id"
    >
      <h3 class="text-center pt-2">{{ column.name }}</h3>
      <div class="btn-container">
        <el-button :icon="Plus"></el-button>
      </div>
      <draggable
        v-model="column.tasks"
        :group="{ name: 'tasks', pull: true, put: true }"
        itemKey="id"
        ghost-class="bg-blue-200"
      >
        <template v-slot:item="{ element }">
          <TaskCard :task="element" :key="element.id" />
        </template>
        <template #footer>
          <div class="min-h-[200px]"></div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import TaskCard from "@/components/TaskCard.vue";
import { useKanbanStore } from "@/stores/kanbanStore";
import { Plus } from "@element-plus/icons-vue";

const kanbanStore = useKanbanStore();
</script>

<style scoped>
.el-button {
  width: 100%;
}

.btn-container {
  width: 95%;
  display: flex;
  margin: 0 auto;
  padding-top: 10px;
}

:deep(.el-card__header) {
  border: none !important;
}
</style>
