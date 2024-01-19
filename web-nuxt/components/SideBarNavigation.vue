<template>

    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>
    
    <div class="flex flex-row">
        <aside id="default-sidebar" class="w-4/12 h-screen border-r" aria-label="Sidebar">
            <div class="h-full px-3 flex-1 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li class="cursor-pointer flex hover:text-blue-600 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex" 
                        v-for="(navItem, index) in navigationItems" 
                        v-bind:key="index">
                        <NuxtLink v-bind:to="navItem.path" 
                                v-bind:target="navItem.target"
                                class="flex-1"
                                v-bind:exact-active-class="'text-blue-600'">
                            {{ navItem.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="w-auto">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">

    type NavigationItem = {
        name: string,
        path: string,
        target: string
    }

    const navigationItems: NavigationItem[] = [
        {name: "Portfolio", path: "/portfolio", target: "_self"},
        {name: "About", path: "/about", target: "_self"},
        {name: "Blog", path: "https://dev.to/benhilger", target: "_blank"}
    ]
</script>
