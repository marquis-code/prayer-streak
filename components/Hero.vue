<!-- components/PrayerHero.vue -->
<template>
    <main>
      <div class="relative isolate">
        <!-- Background Pattern SVG -->
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="prayer-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#prayer-pattern)"
          />
        </svg>
  
        <!-- Gradient Decoration -->
        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#6366f1] to-[#818cf8] opacity-30"
            :style="{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }"
          />
        </div>
  
        <div class="overflow-hidden">
          <div
            class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32"
          >
            <div
              class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            >
              <!-- Content Section -->
              <div
                class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl"
              >
                <h1
                  class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
                >
                  Build a Meaningful Prayer Journey
                </h1>
                <p
                  class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none"
                >
                  Transform your spiritual life with PrayerStreak. Track your daily prayers,
                  build lasting habits, and deepen your connection with God. Join
                  thousands of others who have strengthened their prayer life through
                  consistent practice.
                </p>
  
                <!-- CTA Buttons -->
                <div class="mt-10 flex items-center gap-x-6">
                  <NuxtLink
                    to="/get-started"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start Your Prayer Journey
                  </NuxtLink>
                  <NuxtLink
                    to="#features"
                    class="text-sm/6 font-semibold text-gray-900"
                  >
                    See Features <span aria-hidden="true">→</span>
                  </NuxtLink>
                </div>
  
                <!-- Stats Grid -->
                <div class="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
                  <div v-for="(stat, index) in stats" :key="index">
                    <p class="text-3xl font-semibold text-indigo-600">
                      {{ stat.value }}
                    </p>
                    <p class="text-sm text-gray-600">{{ stat.label }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Image Grid -->
              <div
                class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
              >
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                >
                  <div class="relative">
                    <img
                      :src="prayerImages[0]"
                      alt="Person praying in peaceful setting"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    />
                  </div>
                </div>
                <div
                  class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
                >
                  <div v-for="(image, index) in prayerImages.slice(1, 3)" :key="index" class="relative">
                    <img
                      :src="image"
                      :alt="imageAlts[index + 1]"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import prayer1 from '@/assets/img/prayer1.jpg'
    import prayer2 from '@/assets/img/prayer2.jpg'
      import prayer3 from '@/assets/img/prayer3.jpg'
            import prayer4 from '@/assets/img/prayer4.jpg'
                  import prayer5 from '@/assets/img/prayer5.jpg'
  interface Stat {
    value: string;
    label: string;
  }
  
  // Stats data
  const stats: Stat[] = [
    { value: '10K+', label: 'Active Users' },
    { value: '1M+', label: 'Prayers Tracked' },
    { value: '365+', label: 'Day Streaks' },
  ];
  
  // Image paths and alt texts
  const prayerImages = [
    prayer1, prayer2, prayer3, prayer4, prayer5
  ];
  
  const imageAlts = [
    'Person praying in peaceful setting',
    'Group prayer session',
    'Prayer journal and Bible study',
  ];
  </script>
  
  <script lang="ts">
  // Component options (if needed)
  export default defineComponent({
    name: 'PrayerHero'
  });
  </script>