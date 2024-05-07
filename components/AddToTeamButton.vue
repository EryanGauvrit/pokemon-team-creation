<template>
    <button @click="addToTeam(pokemon)" class="w-full bg-warning text-background py-2 rounded-md">Add to team</button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pokemon: Object,
});
const team = useState('team', () => []);

const addToTeam = (pokemon) => {
    team.value.push(pokemon);
};

</script>