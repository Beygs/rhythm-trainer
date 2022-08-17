<script lang="ts">
  import { rhythms } from "./stores";
  import HalfNote from "./RhythmControls/HalfNote.svelte";
  import QuarterNote from "./RhythmControls/QuarterNote.svelte";
  import Two8ths from "./RhythmControls/Two8ths.svelte";
  import Four16ths from "./RhythmControls/Four16ths.svelte";
  import EighthTwo16ths from "./RhythmControls/EighthTwo16ths.svelte";
  import Two16ths8th from "./RhythmControls/Two16ths8th.svelte";
  import Play from "./PlayControls/Play.svelte";
  import Stop from "./PlayControls/Stop.svelte";

  let bpm = 80;

  const reset = () => {
    rhythms.set([]);
    bpm = 80;
  };
</script>

<HalfNote />
<QuarterNote />
<Two8ths />
<Four16ths />
<EighthTwo16ths />
<Two16ths8th />
<br />
<Play {bpm} />
<Stop />
<button on:click={reset}>Reset</button>
<br />
<label>
  BPM: {bpm}
  <input type="range" bind:value={bpm} min="30" max="300" />
</label>

<style>
  input {
    margin: 2em;
  }
</style>
