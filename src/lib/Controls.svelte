<script lang="ts">
  import { rhythms } from "./stores";
  import rhythmData from "./rhythmData";
  import HalfNote from "./RhythmControls/HalfNote.svelte";
  import QuarterNote from "./RhythmControls/QuarterNote.svelte";
  import Two8ths from "./RhythmControls/Two8ths.svelte";
  import Four16ths from "./RhythmControls/Four16ths.svelte";
  import EighthTwo16ths from "./RhythmControls/EighthTwo16ths.svelte";
  import Two16ths8th from "./RhythmControls/Two16ths8th.svelte";
  import Play from "./PlayControls/Play.svelte";
  import Stop from "./PlayControls/Stop.svelte";
  import Syncopette from "./RhythmControls/Syncopette.svelte";
  import Dotted8th16th from "./RhythmControls/Dotted8th16th.svelte";
  import SixteenthDotted8th from "./RhythmControls/SixteenthDotted8th.svelte";
  import Syncope from "./RhythmControls/Syncope.svelte";

  let bpm = 80;

  const reset = () => {
    rhythms.set([]);
    bpm = 80;
  };

  const random = () => {
    const sequence = new Array(4).fill(null).map(() => rhythmData[Math.floor(Math.random() * rhythmData.length)]);
    rhythms.set(sequence);
  }
</script>

<HalfNote />
<QuarterNote />
<Two8ths />
<Four16ths />
<EighthTwo16ths />
<Two16ths8th />
<Syncopette />
<Dotted8th16th />
<SixteenthDotted8th />
<Syncope />
<br />
<Play {bpm} />
<Stop />
<button on:click={reset}>Reset</button>
<button on:click={random}>Random</button>
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
