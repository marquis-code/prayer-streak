<!-- <template>
    <main>
        <div class="bg-white mt-16">
            <div class="mx-auto max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="lg:col-span-5" data-aos="fade-up">
                        <h2 data-aos="fade-up" class="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
                        <p data-aos="fade-up" class="mt-6 max-w-2xl text-base leading-7 text-gray-300">Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">sending us an email</a> and we’ll get back to you as soon as we can.</p>
                    </div>
                    <div class="lg:col-span-7 lg:mt-0 space-y-8 pt-6 md:pt-0" data-aos="fade-up">
                        <div v-for="item in faqs" :key="item.id" data-aos="fade-up" class="overflow-hidden border-b">
                            <button
                                class="w-full text-left py-2 transition-colors duration-300 flex justify-between items-center pb-9"
                                @click="toggle(item.id)">
                                <p class="text-gray-800 font-semibold text-sm md:text-lg">
                                    {{ item.question }}
                                </p>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                    <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500 pb-3"
                                :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
                                <p class="p-1 lg:p-4 text-gray-700 text-sm font-light md:text-base rounded-lg">
                                    {{ item.answer }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template> 

<script lang="ts" setup>
const faqs = [
    {
        id: 1, question: 'How do I make a reservation ?', answer: `To make a reservation, you can visit our website or contact our customer service team directly via the Contact Us page. Provide details such as the pickup/drop-off locations, dates, and vehicle preferences to ensure a smooth booking process.`
    },
    {
        id: 2, question: 'What types of vehicles do you offer for hire ?', answer: `We have a diverse fleet that includes compact cars, sedans, SUVs, vans, and even luxury vehicles. You can choose the vehicle that best suits your needs and preferences..
`
    },
    {
        id: 3,
        question: `Can I modify or cancel my reservation?`,
        answer: `Yes, you can modify or cancel your reservation online or by contacting our customer service team. Keep in mind that there may be fees associated with changes, and cancellation policies vary based on the timing of your request. Kindly check out our trip cancellation policy for more details..
`
    },
    {
        id: 4,
        question: `Does hire outside Lagos attract extra price ?`,
        answer: `Yes, hire outside Lagos attract extra fees`
    },
    {
        id: 5,
        question: `What do I do in case of an accident or breakdown ?`,
        answer: `In case of an accident, contact local authorities immediately and then inform our emergency hotline. For breakdowns, our roadside assistance is available 24/7 to provide support. Details can be found in your hire agreement..`
    },
    {
        id: 6,
        question: `How do I extend my rental period ?`,
        answer: `If you need to extend your rental, contact our customer service team as soon as possible. Extensions are subject to availability and additional charges.`
    },
    {
        id: 7,
        question: `What is included in the rental price ?`,
        answer: `The rental price generally includes the cost of the vehicle, basic insurance coverage, and any applicable taxes and fees. Additional options such as GPS, child seats, or extended insurance coverage may incur extra charges`
    }
]

const openId = ref(null)
const maxHeight = ref(0)

const toggle = (id: any) => {
    openId.value = openId.value === id ? null : id
    maxHeight.value = openId.value ? 200 : 0
}

const isOpen = (id: any) => {
    return openId.value === id
}

const isClose = (id: any) => {
    return openId.value !== id
}
</script> -->

<template>
    <main>
        <div class="bg-white mt-16">
            <div class="mx-auto max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="lg:col-span-5" data-aos="fade-up">
                        <h2 data-aos="fade-up" class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
                        <p data-aos="fade-up" class="mt-6 max-w-2xl text-base leading-7 text-gray-600">Have questions about developing your prayer life? Can't find what you're looking for? Reach out to our prayer support team by <a href="#" class="font-semibold text-purple-600 hover:text-purple-500">sending us an email</a> and we'll guide you on your journey.</p>
                    </div>
                    <div class="lg:col-span-7 lg:mt-0 space-y-3 md:pt-0" data-aos="fade-up">
                        <div v-for="item in faqs" :key="item.id" data-aos="fade-up" class="overflow-hidden pb-4 border-b">
                            <button
                                class="w-full text-left py-2 transition-colors duration-300 flex justify-between items-center"
                                @click="toggle(item.id)">
                                <p class="text-gray-800 font-semibold text-sm">
                                    {{ item.question }}
                                </p>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500"
                                :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
                                <p class="p-1 text-gray-700 text-sm font-light pb-5 md:text-base rounded-lg">
                                    {{ item.answer }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template> 

<script lang="ts" setup>
interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        id: 1,
        question: 'What is a prayer streak and how does it work?',
        answer: 'A prayer streak is a continuous daily commitment to prayer. Our app helps you maintain this habit by tracking your daily prayer sessions, sending gentle reminders, and celebrating milestones. Each day you pray maintains your streak, helping you build a consistent prayer life.'
    },
    {
        id: 2,
        question: 'I\'m new to prayer. How do I get started?',
        answer: 'Our app provides guided prayer sessions perfect for beginners. We offer structured prayer templates, daily devotionals, and Scripture-based prayer prompts. Start with our "Prayer Basics" tutorial, which walks you through the essential elements of prayer: praise, confession, thanksgiving, and supplication (ACTS method).'
    },
    {
        id: 3,
        question: 'What happens if I miss a day of prayer?',
        answer: 'Life happens, and missing a day doesn\'t mean failure! While your streak will reset, our app includes a grace period feature. You can use one grace day per week to maintain your streak. We also provide encouragement and tips to help you get back on track and start a new streak.'
    },
    {
        id: 4,
        question: 'How can I track my prayer requests and answers?',
        answer: 'Our prayer journal feature allows you to record prayer requests, set prayer reminders, and document answered prayers. You can categorize prayers by type (personal, intercession, thanksgiving), add notes, and even set follow-up reminders to check on specific prayer points.'
    },
    {
        id: 5,
        question: 'Can I pray with others using this app?',
        answer: 'Yes! Our community feature allows you to join prayer groups, share prayer requests (privately or with the community), and pray together with others. You can also participate in global prayer challenges and see how many people are praying worldwide.'
    },
    {
        id: 6,
        question: 'How long should my daily prayer time be?',
        answer: 'The length of prayer time is personal and can vary. We recommend starting with 5-10 minutes and gradually increasing as you feel comfortable. Our app offers prayer sessions of various lengths (5, 15, 30 minutes) to accommodate different schedules and preferences.'
    },
    {
        id: 7,
        question: 'What types of prayer guidance do you offer?',
        answer: 'We provide various prayer resources including daily Scripture-based prayers, topical prayer guides (healing, wisdom, peace), structured prayer templates, and seasonal prayer focuses. Our guided sessions help you pray through different aspects of life and faith systematically.'
    },
    {
        id: 8,
        question: 'How can I stay motivated to pray regularly?',
        answer: 'Our app includes several motivation features: achievement badges for prayer streaks, daily verses and inspirational quotes, progress tracking, community support, and prayer testimonies. We also send encouraging notifications and weekly progress reports to keep you engaged.'
    }
]

const openId = ref<number | null>(null)
const maxHeight = ref<number>(0)

const toggle = (id: number): void => {
    openId.value = openId.value === id ? null : id
    maxHeight.value = openId.value ? 200 : 0
}

const isOpen = (id: number): boolean => {
    return openId.value === id
}

const isClose = (id: number): boolean => {
    return openId.value !== id
}
</script>