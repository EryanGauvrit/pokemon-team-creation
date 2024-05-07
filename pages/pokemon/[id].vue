<template>
    <main class="container max-w-4xl m-auto mt-10 mb-28">
        <section v-if="data && !pending">
            <div class="flex justify-between items-center px-5">
                <h1 class="text-4xl text-center uppercase font-bold">{{ data.name }}</h1>
                <AddToTeamButton :pokemon="data" class="max-w-24 h-10" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
                <div class="flex justify-center">
                    <NuxtImg :src="data.image" :alt="data.name" class="w-64 h-64" />
                </div>
                <div class="max-w-xs m-auto">
                    <h2 class="text-2xl font-bold my-2">Evolutions</h2>
                    <div class="flex flex-wrap gap-4">
                        <div v-if="data.apiPreEvolution !== 'none'" class="flex justify-center gap-4">
                            <span class="bg-warning text-background py-2 px-4 rounded-md">
                                <NuxtLink :to="`/pokemon/${data.apiPreEvolution.pokedexIdd}`">
                                    {{ data.apiPreEvolution.name }}
                                </NuxtLink>
                            </span>
                        </div>
    
                        <div v-if="data.apiEvolutions.length > 0" class="flex justify-center gap-4">
                            <span v-for="evolution in data.apiEvolutions" :key="evolution.id" class="bg-destructive text-background py-2 px-4 rounded-md">
                                <NuxtLink :to="`/pokemon/${evolution.pokedexId}`">
                                    {{ evolution.name }}
                                </NuxtLink>
                            </span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold my-2">Stats</h2>
                    <div class="flex flex-wrap justify-around gap-x-4">
                        <p class="text-md mt-2">PV: {{ data.stats.HP }}</p>
                        <p class="text-md mt-2">ATK: {{ data.stats.attack }}</p>
                        <p class="text-md mt-2">DEF: {{ data.stats.defense }}</p>
                        <p class="text-md mt-2">SPE ATK: {{ data.stats.special_attack }}</p>
                        <p class="text-md mt-2">SPE DEF: {{ data.stats.special_defense }}</p>
                        <p class="text-md mt-2">SPEED: {{ data.stats.speed }}</p>
                    </div>
                    <h2 class="text-2xl font-bold my-2">Types</h2>
                    <div class="flex justify-center gap-4">
                        <span v-for="pokeType in data.apiTypes" :key="pokeType.name" class="text-background py-2 px-4 rounded-md">
                            <NuxtImg :src="pokeType.image" :alt="pokeType.name" class="w-8 h-8" />
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-bold my-2">Resistances</h2>
                <div class="flex flex-wrap justify-center gap-4">
                    <div v-for="resistance in data.apiResistances" :key="resistance.name" class="bg-primary text-background px-4 rounded-md w-32 p-2">
                        <p>{{ resistance.name }}</p>
                        <p>{{ resistance.damage_relation }}</p>
                        <p>x {{ resistance.damage_multiplier }}</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="text-center mt-8">
            <p v-if="error" class="text-red-500">{{ error }}</p>
        </div>
        <Loader v-if="pending" />
    </main>

</template>

<script setup>
    const API_URL = 'https://pokebuildapi.fr/api/v1/pokemon';
    const route = useRoute();
    const { data, error, pending } = await useFetch(`${API_URL}/${route.params.id}`);
</script>