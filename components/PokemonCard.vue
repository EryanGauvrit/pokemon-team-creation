<template>
    <div class="bg-card text-card-foreground border rounded-md shadow-sm hover:scale-[1.05] duration-200 overflow-hidden">
        <NuxtImg v-if="pokemon.image" :src="pokemon.image" :alt="pokemon.name" class="object-contain object-center h-20 w-full" />
        <span v-else class="bg-primary text-background text-2xl font-bold h-20 w-full flex items-center justify-center">No image</span>
        <div class="p-4">
            <div class="px-2">
                <h3 class="text-xl font-bold my-2">{{ pokemon.name }}</h3>
            </div>
            <div class="flex flex-wrap justify-around gap-2">
                <p class="text-md mt-2">PV: {{ pokemon.stats.HP }}</p>
                <p class="text-md mt-2">ATK: {{ pokemon.stats.attack }}</p>
                <p class="text-md mt-2">DEF: {{ pokemon.stats.defense }}</p>
            </div>
            <div class="py-4 flex flex-col gap-2">
                <NuxtLink :to="`/pokemon/${pokemon.id}`" class="w-full bg-primary text-background py-2 rounded-md block text-center">View details</NuxtLink>
                <AddToTeamButton :pokemon="pokemon" />
            </div>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pokemon: Object,
});

</script>