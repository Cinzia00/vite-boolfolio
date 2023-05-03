<template>
    <header>
        <div>
            <ul class="container_link">
                <li>
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'portfolio'}">Portfolio</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'chi_sono'}">Chi sono</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style>
.container_link {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;
}
</style>