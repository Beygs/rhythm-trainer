<script lang="ts">
  import * as Tone from "tone";
  import { rhythms } from "../stores";

  export let bpm: number;

  const play = () => {
    const synth = new Tone.NoiseSynth().toDestination();

    Tone.Transport.bpm.value = bpm;

    let beat = 0;

    $rhythms.forEach((rhythm) => {
      let subdiv = 0;

      rhythm.forEach((dur) => {
        Tone.Transport.scheduleOnce((time) => {
          synth.triggerAttackRelease(`${dur}n`, time);
        }, `0:${beat}:${subdiv}`);

        subdiv += (4 / dur) * 4;
      });

      beat += rhythm.reduce((a, b) => a + 1 / b, 0) * 4;
    });

    Tone.Transport.scheduleOnce(() => {
      Tone.Transport.stop();
    }, `0:${beat}:0`);

    Tone.Transport.start();
  };
</script>

<button on:click={play}>Play</button>
