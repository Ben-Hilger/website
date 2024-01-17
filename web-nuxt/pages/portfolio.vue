<template>
    <main class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 h-100 p-2 background-inherit gap-2">
        <Card v-for="(portfolioItem, index) in portfolioItems"
            class="shadow hover:shadow-lg"
            v-bind:key="index"
            v-bind:title="portfolioItem.title"
            v-bind:description="portfolioItem.description"
            v-bind:target="portfolioItem.target"
            v-bind:link="portfolioItem.link"
        />
    </main>
</template>


<script setup lang="ts">
    type PortfolioInfo = {
        title: string,
        description: string,
        link: string,
        target: string
    }

    const portfolioItems: PortfolioInfo[] = [
        {title: "Personal Website", description: "This project stores the code that runs https://www.ben-hilger.com", link: "https://github.com/Ben-Hilger/website", target: "_blank"},
        {title: "Advent of Code", description: "This project stores the codee that I write to solve advent of code problems (https://adventofcode.com/)", link: "https://github.com/Ben-Hilger/advent-of-code", target: "_blank"},
        {title: "NVIM Config", description: "This project stores my current configuation for neovim, a terminal-based editor I use for personal projects", link: "https://ghithub.com/Ben-Hilger/nvim-config", target: "_blank"},
        {title: "LeetCode", description: "This project stores solutions that I've written for different LeetCode problems", link: "https://github.com/Ben-Hilger/LeetCode", target: "_blank"}
    ];


</script>
