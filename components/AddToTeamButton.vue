<template>
    <button @click="addToTeam(pokemon)" class="w-full bg-warning text-background py-2 rounded-md flex justify-center items-center hover:bg-secondary duration-200">
      <Icon name="lucide:square-plus" class="w-6 h-6 inline-block" />
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pokemon: Object,
});
const team = useState('team', () => []);

const addToTeam = (pokemon) => {
    if(team.value.length >= 6) return;
    team.value.push(pokemon);
};

</script>