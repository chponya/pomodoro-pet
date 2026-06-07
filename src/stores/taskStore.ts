import { defineStore } from 'pinia'

export interface Task {
  id: string
  title: string
  color: string
  completed: boolean
}

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
    currentTaskId: null as string | null,
  }),

  getters: {
    currentTask(state) {
      return state.tasks.find(
        task => task.id === state.currentTaskId
      )
    },

    completedTasks(state) {
      return state.tasks.filter(
        task => task.completed
      )
    }
  },

  actions: {
    addTask(title: string, color = 'pink') {
      this.tasks.push({
        id: crypto.randomUUID(),
        title,
        color,
        completed: false
      })
    },

    removeTask(id: string) {
      this.tasks = this.tasks.filter(
        task => task.id !== id
      )

      if (this.currentTaskId === id) {
        this.currentTaskId = null
      }
    },

    toggleTask(id: string) {
      const task = this.tasks.find(
        task => task.id === id
      )

      if (task) {
        task.completed = !task.completed
      }
    },

    setCurrentTask(id: string) {
      this.currentTaskId = id
    }
  }
})