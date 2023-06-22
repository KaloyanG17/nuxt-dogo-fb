<template>
    <div>
        <h2>Here are my other projects</h2>
        <p>Currently all hosted on Netlify and code is available Github</p>
        <div class="grid grid-cols-4 gap-5">
            <AboutCard :website="website1"/>
            <AboutCard :website="website2"/>
            <AboutCard :website="website3"/>
        </div>
    </div>
</template>

<script setup>
import port from '~/assets/port.png'
import nuxtDojo from '~/assets/nuxt-dojo.png'
import nuxtDojoFb from '~/assets/nuxt-dojo-fb.png'

const website1 = {
    title: 'Personal Website',
    link: 'https://kaloyanbg.netlify.app',
    github: 'https://github.com/KaloyanG17/personal-website',
    image: port,
    id: 1
}

const website2 = {
    title: 'Nuxt Dojo',
    link: 'https://nuxt-dojo-kaloyan.netlify.app',
    github: 'https://github.com/KaloyanG17/nuxt-dojo',
    image: nuxtDojo,
    id: 2
}

const website3 = {
    title: 'Nuxt Dogo with Firebase',
    link: 'https://kaloyans-shop.netlify.app',
    github: 'https://github.com/KaloyanG17/nuxt-dojo-fb',
    image: nuxtDojoFb,
    id: 3
}

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}

</style>