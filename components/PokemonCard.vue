<template>
    <div class="bg-card text-card-foreground border rounded-md shadow-sm hover:scale-[1.05] duration-200 overflow-hidden">
        <NuxtImg v-if="pokemon.image" :src="pokemon.image" :alt="pokemon.name" class="object-contain object-center h-20 w-full" />
        <span v-else class="bg-primary text-background text-2xl font-bold h-20 w-full flex items-center justify-center">No image</span>
        <div class="p-4">
            <div class="px-2 flex justify-between items-center">
                <h3 class="text-xl font-bold my-2">{{ pokemon.name }}</h3>
                <div class="flex flex-wrap gap-2">
                    <span v-for="pokeType in pokemon.apiTypes" :key="pokeType" class="text-background py-1 px-2 rounded-md text-sm">
                        <NuxtImg :src="pokeType.image" :alt="pokeType.name" class="w-6 h-6 inline-block mr-1" />
                    </span>
                </div>
            </div>
            <div class="flex flex-wrap justify-around gap-2">
                <p class="text-md mt-2">PV: {{ pokemon.stats.HP }}</p>
                <p class="text-md mt-2">ATK: {{ pokemon.stats.attack }}</p>
                <p class="text-md mt-2">DEF: {{ pokemon.stats.defense }}</p>
            </div>
            <div class="py-4 grid md:grid-cols-2 gap-2">
                <NuxtLink :to="`/pokemon/${pokemon.id}`" class="w-full bg-primary text-background py-2 rounded-md block text-center hover:bg-secondary duration-200">
                    <Icon name="ic:baseline-remove-red-eye" class="w-6 h-6" />
                </NuxtLink>
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