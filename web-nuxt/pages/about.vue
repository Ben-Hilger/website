<template>
    <div class="flex flex-col items-center p-2">
        <h1 class="bold text-2xl">What's running ben-hilger.com?</h1>
        <img src="/personal-website-architecture-diagram.jpg" alt="Persoanl Website Architecture Diagram">
        <div class="flex flex-wrap flex-row pt-5 justify-center">
            <Card
                class="lg:w-1/6 md:w-1/4 sm:w-full"
                v-for="(aboutCard, index) in aboutCards"
                v-bind:key="index"  gd
                v-bind:title="aboutCard.title"
                v-bind:description="aboutCard.description"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    type AboutInfo = {
        title: string,
        description: string,
    }

    const aboutCards: AboutInfo[] = [
        { title: "Google Cloud", description: "Google Cloud's Compute is the backbone of ben-hilger.com. This provides a virtual machine that runs in the cloud" },
        { title: "DNS", description: "ben-hilger.com is registered using SquareSpace domains. Along with that, ben-hilger.com uses SquareSpace namespace servers and services to add more DNS routes" },
        { title: "NGINX", description: "NGINX listens on port 80 and 443 and provides a proxy to route requests to the NEXT.js server, exposing the website to the public" },
        { title: "NEXT.js", description: "This website is built using NEXT.js, which uses React server-side components and typescript" },
        { title: "SSL Certificate Management", description: "SSL Certificates are used to ensure secure HTTPS communication between your browser and the server. Cert-bot is installed and utilizwed to issue valid certificates for ben-hilger.com" },
        { title: "Cloud CDN", description: "The images used on ben-hilger.com are hosted using Cloud CDN, which points to a Google Cloud Storage Bucket that serves the images (image.ben-hilger.com) " }
    ];

</script>
