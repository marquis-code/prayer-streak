<template>
    <div class="w-full overflow-hidden bg-gray-25 py-32">
        <section class="pl-10 lg:pl-20">
        <div class="inline-block px-4 py-2.5 mb-6 bg-gray-100 rounded-full">
        <span class="text-green-500 font-medium">Testimonials</span>
      </div>
      
      <h1 data-aos="fade-up"  class="text-4xl font-medium text-gray-900 mb-4 -mt-2">
        Stories from Our Community
      </h1>
      
      <p data-aos="fade-up" class="text-gray-600 mb-16">
      Discover how the Prayer Streak app has transformed lives, helping users build consistent prayer habits and deepen their spiritual journey.
      </p>
     </section>
      <div data-aos="fade-up" class="relative">
        <!-- First row - Left to Right -->
        <div 
          class="flex animate-scroll-left"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials1" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-sm font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icons/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 text-sm font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Second row - Right to Left -->
        <div 
          class="flex animate-scroll-right mt-6"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials2" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-sm font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icons/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 text-sm font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  interface Testimonial {
    id: number;
    content: string;
    name: string;
    role: string;
    avatar: string;
  }
  
  const testimonials1: Testimonial[] = [
    {
      id: 1,
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      content: "This app has revolutionized my prayer life. The daily streaks keep me accountable, and I've noticed a significant deepening in my relationship with God.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The guided prayer sections and Scripture integration have helped me pray more effectively. I'm no longer just reciting words, but having meaningful conversations with God.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: "As a new Christian, I struggled with how to pray. This app's structured approach and daily reminders have helped me develop a consistent prayer habit.",
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The prayer journaling feature helps me track God's faithfulness. Looking back at answered prayers strengthens my faith tremendously.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      content: "This app has revolutionized my prayer life. The daily streaks keep me accountable, and I've noticed a significant deepening in my relationship with God.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The guided prayer sections and Scripture integration have helped me pray more effectively. I'm no longer just reciting words, but having meaningful conversations with God.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: "As a new Christian, I struggled with how to pray. This app's structured approach and daily reminders have helped me develop a consistent prayer habit.",
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The prayer journaling feature helps me track God's faithfulness. Looking back at answered prayers strengthens my faith tremendously.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more testimonials to ensure continuous scroll
  ];
  
  const testimonials2: Testimonial[] = [
  {
      id: 1,
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      content: "This app has revolutionized my prayer life. The daily streaks keep me accountable, and I've noticed a significant deepening in my relationship with God.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The guided prayer sections and Scripture integration have helped me pray more effectively. I'm no longer just reciting words, but having meaningful conversations with God.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: "As a new Christian, I struggled with how to pray. This app's structured approach and daily reminders have helped me develop a consistent prayer habit.",
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The prayer journaling feature helps me track God's faithfulness. Looking back at answered prayers strengthens my faith tremendously.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      content: "This app has revolutionized my prayer life. The daily streaks keep me accountable, and I've noticed a significant deepening in my relationship with God.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The guided prayer sections and Scripture integration have helped me pray more effectively. I'm no longer just reciting words, but having meaningful conversations with God.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: "As a new Christian, I struggled with how to pray. This app's structured approach and daily reminders have helped me develop a consistent prayer habit.",
      // content: "You all know you can use @nextrideng to move around, they are cheaper and more convenient.",
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "The prayer journaling feature helps me track God's faithfulness. Looking back at answered prayers strengthens my faith tremendously.",
      // content: "I've been having a fantastic mainland-island commute since I discovered NextRide. God bless you for such great initiative.",
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more testimonials to ensure continuous scroll
  ];

  const pauseScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'paused';
};

const resumeScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'running';
};
  </script>
  
  <style scoped>
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .animate-scroll-left {
    animation: scroll-left linear infinite;
    animation-play-state: running;
  }
  
  .animate-scroll-right {
    animation: scroll-right linear infinite;
    animation-play-state: running;
  }
  
  /* Add subtle hover effect to cards */
  .group:hover .hover\:shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  </style>