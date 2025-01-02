<template>
    <div class="max-w-7xl mx-auto p-6">
      <h2 class="text-base font-semibold text-gray-900">Prayer Tracker</h2>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div class="flex items-center text-gray-900">
            <button @click="previousMonth" type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Previous month</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div class="flex-auto text-sm font-semibold">{{ currentMonthName }}</div>
            <button @click="nextMonth" type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
  
          <!-- Days of week -->
          <div class="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
            <div v-for="day in daysOfWeek" :key="day">{{ day }}</div>
          </div>
  
          <!-- Calendar grid -->
          <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            <button 
              v-for="date in calendarDays" 
              :key="date.date"
              @click="openPrayerModal(date)"
              :class="[
                'py-1.5 hover:bg-gray-100 focus:z-10',
                date.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                date.isToday ? 'font-semibold text-indigo-600' : date.isCurrentMonth ? 'text-gray-900' : 'text-gray-400',
                getPrayerStatus(date) === 'completed' ? 'bg-green-100' : getPrayerStatus(date) === 'missed' ? 'bg-red-100' : ''
              ]"
            >
              <time :datetime="date.date" class="mx-auto flex size-7 items-center justify-center rounded-full">
                {{ new Date(date.date).getDate() }}
              </time>
            </button>
          </div>
  
          <button @click="showModal = true" class="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
            Add Prayer Reminder
          </button>
        </div>
  
        <!-- Prayer Reminders List -->
        <ol class="mt-4 divide-y divide-gray-50 text-sm/6 lg:col-span-7 xl:col-span-8">
          <li v-for="reminder in prayerReminders" :key="reminder.id" class="relative flex border-gray-50 gap-x-6 border-b-[0.5px] py-6 xl:static">
            <div class="flex-auto">
              <h3 class="font-semibold text-gray-900">{{ reminder.title }}</h3>
              <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                <div class="flex items-start gap-x-3">
                  <dt class="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </dt>
                  <dd>{{ formatDate(reminder.date) }} at {{ reminder.time }}</dd> | 
                  <dd class="flex items-center gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg> Online
                  </dd>
                </div>
              </dl>
            </div>
            <div class="flex gap-2">
              <button 
                @click="updatePrayerStatus(reminder.id, 'completed')"
                class="rounded-full p-1 hover:bg-green-100"
              >
                <svg class="h-7 w-7 border rounded-lg" :class="reminder.status === 'completed' ? 'text-green-600' : 'text-gray-400'" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
                </svg> 
              </button>
              <button 
                @click="updatePrayerStatus(reminder.id, 'missed')"
                class="rounded-full p-1 hover:bg-red-100"
              >
                <svg class="h-7 w-7 border rounded-lg" :class="reminder.status === 'missed' ? 'text-red-600' : 'text-gray-400'" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg> 
              </button>
            </div>
          </li>
        </ol>
      </div>
  
      <!-- Prayer Modal -->
      <TransitionRoot appear :show="showModal" as="template">
    <Dialog as="div" @close="showModal = false" class="relative z-10">
      <div class="fixed inset-0 bg-black bg-opacity-25" />
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <DialogTitle as="h3" class="text-base font-medium leading-6 flex items-center gap-x-3 text-gray-900">
              Create Prayer Streak
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9b9b9b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </DialogTitle>

            <form @submit.prevent="addPrayerReminder" class="mt-4">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    v-model="newReminder.title"
                    type="text"
                    class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    v-model="newReminder.description"
                    rows="3"
                    class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50"
                    placeholder="Add a description for your prayer reminder..."
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    v-model="newReminder.date"
                    type="date"
                    class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50"
                    required
                  />
                </div>

                <div class="flex items-center justify-between">
                  <label class="text-sm font-medium text-gray-700">Include Time</label>
                  <button
                    type="button"
                    @click="newReminder.includeTime = !newReminder.includeTime"
                    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                    :class="newReminder.includeTime ? 'bg-indigo-600' : 'bg-gray-200'"
                  >
                    <span class="sr-only">Use time setting</span>
                    <span
                      class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      :class="newReminder.includeTime ? 'translate-x-5' : 'translate-x-0'"
                    />
                  </button>
                </div>

                <div v-if="newReminder.includeTime">
                  <label class="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    v-model="newReminder.time"
                    type="time"
                    class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50"
                    :required="newReminder.includeTime"
                  />
                </div>
              </div>

              <div class="mt-6 flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  @click="showModal = false"
                  class="rounded-md w-full border px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="rounded-md bg-indigo-600 px-4 py-2.5 w-full text-sm text-white hover:bg-indigo-500 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
      <!-- <TransitionRoot appear :show="showModal" as="template">
        <Dialog as="div" @close="showModal = false" class="relative z-10">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-base font-medium leading-6 flex items-center gap-x-3 text-gray-900">
                  Create Prayer Streak <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </DialogTitle>
  
                <form @submit.prevent="addPrayerReminder" class="mt-4">
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Title</label>
                      <input v-model="newReminder.title" type="text" class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50" required />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Date</label>
                      <input v-model="newReminder.date" type="date" class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50" required />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Time</label>
                      <input v-model="newReminder.time" type="time" class="mt-1 block w-full rounded-md border-[0.5px] border-gray-300 px-3 py-3 text-sm outline-none bg-gray-50" required />
                    </div>
                  </div>
  
                  <div class="mt-6 flex justify-end gap-3 pt-4">
                    <button type="button" @click="showModal = false" class="rounded-md w-full border px-4 py-2.5 text-sm">
                      Cancel
                    </button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-4 py-2.5 w-full text-sm text-white hover:bg-indigo-500">
                      Save
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </TransitionRoot> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCreateStreak } from '@/composables/modules/streak/useCreateStreak'
  import { useFetchStreaks } from '@/composables/modules/streak/useFetchStreaks'
  import { useUpdateStreakStatus } from '@/composables/modules/streak/useUpdateStreakStatus'
  const { createStreak, creating, payload } = useCreateStreak()
  const { fetching, streakList } = useFetchStreaks()
  const { updateStreakStatus, updatingStatus, statusPayload } = useUpdateStreakStatus()
  import { ref, computed } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionRoot } from '@headlessui/vue'
  
  interface PrayerReminder {
    id: number;
    title: string;
    date: string;
    time?: string
    status: 'pending' | 'completed' | 'missed';
    description: string
    includeTime: boolean
  }
  
  interface CalendarDay {
    date: string;
    isCurrentMonth: boolean;
    isToday: boolean;
  }
  
  const currentDate = ref(new Date())
  const showModal = ref(false)
  const prayerReminders = ref<PrayerReminder[]>([])
  const newReminder = ref({
    title: '',
    date: '',
    time: '',
    description: '',
    includeTime: false
  })
  
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  const currentMonthName = computed(() => {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate.value)
  })
  
  const calendarDays = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    
    const days: CalendarDay[] = []
    
    // Add days from previous month
    const firstDayOfWeek = firstDay.getDay() || 7
    for (let i = firstDayOfWeek - 1; i > 0; i--) {
      const date = new Date(year, month, 1 - i)
      days.push({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: false,
        isToday: isSameDate(date, new Date())
      })
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i)
      days.push({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: true,
        isToday: isSameDate(date, new Date())
      })
    }
    
    // Add days from next month
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i)
      days.push({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: false,
        isToday: isSameDate(date, new Date())
      })
    }
    
    return days
  })
  
  function isSameDate(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear()
  }
  
  function previousMonth() {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1)
  }
  
  function nextMonth() {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1)
  }
  
  function openPrayerModal(date: CalendarDay) {
    newReminder.value.date = date.date
    showModal.value = true
  }
  
  function addPrayerReminder() {
    prayerReminders.value.push({
      id: Date.now(),
      ...newReminder.value,
      status: 'pending'
    })
    
    showModal.value = false
    newReminder.value = {
      title: '',
      date: '',
      time: '',
      description: '',
      includeTime: false
    }
  }
  
  function updatePrayerStatus(id: number, status: 'completed' | 'missed') {
    const reminder = prayerReminders.value.find(r => r.id === id)
    if (reminder) {
      reminder.status = status
    }
  }
  
  function getPrayerStatus(date: CalendarDay): string | null {
    const reminder = prayerReminders.value.find(r => r.date === date.date)
    return reminder?.status || null
  }
  
  function formatDate(date: string): string {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(date))
  }
  
  definePageMeta({
    layout: 'auth'
  })
  </script>