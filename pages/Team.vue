<template>
    <main class="container max-w-4xl m-auto mt-10">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">Your team</h1>
        </div>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
            <div v-for="pokemon in team" :key="pokemon.id" class="bg-card text-card-foreground border rounded-md shadow-sm hover:scale-[1.05] duration-200 overflow-hidden">
                <div class="flex justify-between items-center p-4">
                    <NuxtImg :src="pokemon.image" :alt="pokemon.name" class="w-24 h-24" />
                    <div class="flex flex-col items-center">
                        <h3 class="text-xl font-bold my-2">{{ pokemon.name }}</h3>

                        <div class="flex flex-wrap justify-center gap-2">
                            <span v-for="pokeType in pokemon.apiTypes" :key="pokeType.name" class="text-background py-2 px-4 rounded-md">
                                <NuxtImg :src="pokeType.image" :alt="pokeType.name" class="w-8 h-8" />
                            </span>
                        </div>  
                    </div>
                </div>
            </div>  
        </section>
    </main>

</template>

<script setup>
    const team = useState('team', () => []);
</script>