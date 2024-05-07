<template>
  <main class="container max-w-4xl m-auto mt-10">
      <h1 class="text-4xl text-center mt-8 uppercase font-bold">Pokemon team creation</h1>
      <div class="flex justify-center gap-2 mt-4">
          <input v-model="search" type="text" class="w-full bg-secondary text-secondary-foreground md:w-1/2 lg:w-1/3 px-4 py-2 rounded-sm border border-gray-300" placeholder="Search for a pokemon">
          <input v-model="limit" max="200" type="number" class="max-w-20 w-full text-center bg-secondary text-secondary-foreground md:w-1/4 lg:w-1/6 px-4 py-2 rounded-sm border border-gray-300" placeholder="Limit">
          <button @click="getPokemonsByName" class="bg-primary text-background py-2 px-4 rounded-sm ml-2 hover:bg-secondary duration-200">
            <Icon name="lucide:search" class="w-6 h-6" />
          </button>
        </div>
      <div v-if="typesList.length > 0" class="flex flex-wrap justify-center gap-y-2 gap-x-4 mt-4">
          <button @click="getPokemons(pokeType.name)" v-for="pokeType in typesList" class="bg-primary text-background py-2 px-4 rounded-sm hover:bg-secondary duration-200">{{ pokeType.name }}</button>
      </div>
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
  const API_URL = 'https://pokebuildapi.fr/api/v1';
  const pokemonsList = ref([]);
  const typesList = ref([]);
  const limit = ref(20);
  const errorMessages = ref(null);
  const search = ref('');

  const getPokemonsByName = async () => {
    if(!search.value) return await getPokemons();
    try {
      const response = await $fetch(`${API_URL}/pokemon/${search.value}`);
      pokemonsList.value = [response];
    } catch (error) {
        console.error(error);
        errorMessages.value = 'An error occurred while fetching the data';
    }
  }

  const getPokemons = async (pokeType) => {
    let url = `${API_URL}/pokemon/limit/${limit.value}`;
    if(pokeType) url = `${API_URL}/pokemon/type/${pokeType}`;
    try {
      const response = await $fetch(url);
      pokemonsList.value = response;
    } catch (error) {
        console.error(error);
        errorMessages.value = 'An error occurred while fetching the data';
    }
  }

  const getTypes = async () => {
    try {
      const response = await $fetch(`${API_URL}/types`);
      typesList.value = response;
    } catch (error) {
        console.error(error);
        errorMessages.value = 'An error occurred while fetching the data';
    }
  }

  onMounted( async () => {
      setTimeout(async () => {
        await getPokemons();
        await getTypes();
      }, 1000);
  });
</script>