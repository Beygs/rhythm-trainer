<script lang="ts">
  import { rhythms } from "./stores";

  export let rhythmsToAdd: number[];

  const addRhythm = (...newRhythms: number[]) => {
    rhythms.update((r) => [...r, newRhythms]);
  };
</script>

<button on:click={() => addRhythm(...rhythmsToAdd)}>
  <slot />
</button>
