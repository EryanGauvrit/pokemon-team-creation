<template>
  <main class="container max-w-4xl m-auto mt-10">
      <h1 class="text-4xl text-center mt-8 uppercase font-bold">Pokemon team creation</h1>
      <!-- <div class="flex justify-center space-x-4 mt-4">
          <button @click="filterData('burgers')" class="bg-primary text-background py-2 px-4 rounded-sm">Burgers</button>
          <button @click="filterData('desserts')" class="bg-primary text-background py-2 px-4 rounded-sm">Desserts</button>
          <button @click="filterData('drinks')" class="bg-primary text-background py-2 px-4 rounded-sm">Drinks</button>
      </div> -->
      <section v-if="pokemonsList.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <PokemonCard v-for="pokemon in pokemonsList" :key="pokemon.id" :pokemon="pokemon" />
      </section>
      <div v-else class="text-center mt-8">
          <p v-if="errorMessages" class="text-red-500">{{ errorMessages }}</p>
          <Loader v-else />
      </div>
  </main>
</template>
<script setup>
  const API_URL = 'https://pokebuildapi.fr/api/v1/pokemon';
  const pokemonsList = ref([]);
  const limit = ref(10);
  const errorMessages = ref(null);

  const getPokemons = async () => {
    try {
      const response = await $fetch(`${API_URL}/limit/${limit.value}`,);
      pokemonsList.value = response;
    } catch (error) {
        console.error(error);
        errorMessages.value = 'An error occurred while fetching the data';
    }
  }

  onMounted( async () => {
      setTimeout(async () => {
        await getPokemons();
      }, 1000);
  });
</script>