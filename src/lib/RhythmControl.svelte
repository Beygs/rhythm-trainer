<script lang="ts">
  import { rhythms } from "./stores";

  export let rhythmsToAdd: Rhythm[];

  const addRhythm = (...newRhythms: Rhythm[]) => {
    rhythms.update((r) => [...r, newRhythms]);
  };
</script>

<button on:click={() => addRhythm(...rhythmsToAdd)}>
  <slot />
</button>
