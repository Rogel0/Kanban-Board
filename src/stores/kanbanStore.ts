import { defineStore } from "pinia";
import type { Column, Task } from "@/model/types";
import { ref } from "vue";

export const useKanbanStore = defineStore(
  "kanban",
  () => {
    // State
    const columns = ref<Column[]>([
      {
        id: "backlog",
        name: "Backlog",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "Visual Test Task",
            priorityLevel: "P1",
            taskCategory: "CSS",
          },
          {
            id: crypto.randomUUID(),
            title: "Visual Test Task2",
            priorityLevel: "P2",
            taskCategory: "HTML5",
          },
        ],
      },
      { id: "todo", name: "To Do", tasks: [] },
      { id: "inProgress", name: "In Progress", tasks: [] },
      { id: "inReview", name: "In Review", tasks: [] },
      { id: "done", name: "Done", tasks: [] },
    ]);

    // Actions
    const addTask = (
      columnId: string,
      title: string,
      priorityLevel: string,
      taskCategory: string
    ) => {
      const column = columns.value.find((col) => col.id === columnId);
      if (column) {
        column.tasks.push({
          id: crypto.randomUUID(),
          title,
          priorityLevel,
          taskCategory,
        });
      }
    };

    const moveTask = (
      taskId: string,
      fromColumnId: string,
      toColumnId: string
    ) => {
      const fromColumn = columns.value.find((col) => col.id === fromColumnId);
      const toColumn = columns.value.find((col) => col.id === toColumnId);

      if (fromColumn && toColumn) {
        const taskIndex = fromColumn.tasks.findIndex(
          (task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          const [task] = fromColumn.tasks.splice(taskIndex, 1);
          toColumn.tasks.push(task);
        }
      }
    };

    console.log("Columns:", columns.value);

    return {
      columns,
      addTask,
      moveTask,
    };
  },
  {
    persist: true,
  }
);
