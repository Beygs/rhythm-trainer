<script lang="ts">
  import { rhythms } from "./stores";
  import * as Tone from "tone";

  let bpm = 80;

  const addRhythm = (...newRhythms: number[]) => {
    rhythms.update((r) => [...r, newRhythms]);
  };

  const reset = () => {
    rhythms.set([]);
    bpm = 80;
  };

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

  const stop = () => {
    Tone.Transport.stop();
  };

  $: console.log($rhythms);
</script>

<button on:click={() => addRhythm(2)}>
  <svg width="50" height="50" viewBox="0 10 50 70"
    ><g class="vf-stavenote" id="vf-auto1123"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-stem" pointer-events="bounding-box"
          ><path
            stroke-width="1.5"
            stroke-dasharray="none"
            fill="none"
            stroke="black"
            d="M28.184 57.45L28.184 25"
          /></g
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M20.9312 65.0544C27.58616 65.0544,28.934 59.63496,28.934 58.3152C28.934 56.23728,27.27728 54.9456,24.91856 54.9456C18.90944 54.9456,17 59.60688,17 61.6848C17 63.84696,18.6848 65.0544,20.9312 65.0544M20.03264 63.51C19.19024 63.51,18.6848 63.06072,18.404 62.58336C18.29168 62.35872,18.17936 62.04984,18.17936 61.76904C18.17936 59.80344,24.04808 56.60232,25.92944 56.60232C26.71568 56.60232,27.136879999999998 56.96736,27.44576 57.44472C27.55808 57.69744,27.6704 57.95016,27.6704 58.23096C27.6704 59.97192,21.97016 63.51,20.03264 63.51"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ></svg
  >
</button>
<button on:click={() => addRhythm(4)}>
  <svg width="50" height="50" viewBox="0 10 50 70"
    ><g class="vf-stavenote" id="vf-auto1128"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-stem" pointer-events="bounding-box"
          ><path
            stroke-width="1.5"
            stroke-dasharray="none"
            fill="none"
            stroke="black"
            d="M28.184 58L28.184 25"
          /></g
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M20.9312 65.0544C24.52544 65.0544,28.934 61.74096,28.934 58.3152C28.934 56.23728,27.30536 54.9456,25.0028 54.9456C20.56616 54.9456,17 58.23096,17 61.6848C17 63.7908,18.74096 65.0544,20.9312 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ></svg
  >
</button>
<button on:click={() => addRhythm(8, 8)}>
  <svg width="50" height="50" viewBox="25 10 50 70"
    ><g class="vf-stavenote" id="vf-auto1133"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M20.9312 65.0544C24.52544 65.0544,28.934 61.74096,28.934 58.3152C28.934 56.23728,27.30536 54.9456,25.0028 54.9456C20.56616 54.9456,17 58.23096,17 61.6848C17 63.7908,18.74096 65.0544,20.9312 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1139"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M68.86395 65.0544C72.45819 65.0544,76.86675 61.74096,76.86675 58.3152C76.86675 56.23728,75.23811 54.9456,72.93555 54.9456C68.49891 54.9456,64.93275 58.23096,64.93275 61.6848C64.93275 63.7908,66.67371 65.0544,68.86395 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stem" id="vf-auto1133-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M28.184 58L28.184 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1139-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M76.11675 58L76.11675 25.75"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 25L27.434 30L76.36675 30L76.36675 25Z"
      /></g
    ></svg
  >
</button>
<button on:click={() => addRhythm(16, 16, 16, 16)}>
  <svg width="50" height="50" viewBox="25 10 50 70"
    ><g class="vf-stavenote" id="vf-auto1186"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M20.9312 65.0544C24.52544 65.0544,28.934 61.74096,28.934 58.3152C28.934 56.23728,27.30536 54.9456,25.0028 54.9456C20.56616 54.9456,17 58.23096,17 61.6848C17 63.7908,18.74096 65.0544,20.9312 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1192"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M35.6977 65.0544C39.291940000000004 65.0544,43.700500000000005 61.74096,43.700500000000005 58.3152C43.700500000000005 56.23728,42.07186 54.9456,39.7693 54.9456C35.332660000000004 54.9456,31.7665 58.23096,31.7665 61.6848C31.7665 63.7908,33.50746 65.0544,35.6977 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1198"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M50.4642 65.0544C54.058440000000004 65.0544,58.467 61.74096,58.467 58.3152C58.467 56.23728,56.83836 54.9456,54.5358 54.9456C50.09916 54.9456,46.533 58.23096,46.533 61.6848C46.533 63.7908,48.27396 65.0544,50.4642 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1204"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M65.2307 65.0544C68.82494 65.0544,73.2335 61.74096,73.2335 58.3152C73.2335 56.23728,71.60486 54.9456,69.3023 54.9456C64.86566 54.9456,61.2995 58.23096,61.2995 61.6848C61.2995 63.7908,63.04046 65.0544,65.2307 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stem" id="vf-auto1186-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M28.184 58L28.184 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1192-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M42.950500000000005 58L42.950500000000005 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1198-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M57.717 58L57.717 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1204-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M72.4835 58L72.4835 25.75"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 25L27.434 30L72.7335 30L72.7335 25Z"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 32.5L27.434 37.5L72.7335 37.5L72.7335 32.5Z"
      /></g
    ></svg
  >
</button>
<button on:click={() => addRhythm(8, 16, 16)}>
  <svg width="50" height="50" viewBox="25 10 50 70"
    ><g class="vf-stavenote" id="vf-auto1763"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M20.9312 65.0544C24.52544 65.0544,28.934 61.74096,28.934 58.3152C28.934 56.23728,27.30536 54.9456,25.0028 54.9456C20.56616 54.9456,17 58.23096,17 61.6848C17 63.7908,18.74096 65.0544,20.9312 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1769"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M57.11350257483151 65.0544C60.707742574831514 65.0544,65.11630257483151 61.74096,65.11630257483151 58.3152C65.11630257483151 56.23728,63.48766257483151 54.9456,61.18510257483151 54.9456C56.74846257483151 54.9456,53.18230257483151 58.23096,53.18230257483151 61.6848C53.18230257483151 63.7908,54.92326257483151 65.0544,57.11350257483151 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1775"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M71.04750257483151 65.0544C74.64174257483151 65.0544,79.0503025748315 61.74096,79.0503025748315 58.3152C79.0503025748315 56.23728,77.42166257483152 54.9456,75.11910257483152 54.9456C70.6824625748315 54.9456,67.11630257483151 58.23096,67.11630257483151 61.6848C67.11630257483151 63.7908,68.85726257483151 65.0544,71.04750257483151 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stem" id="vf-auto1763-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M28.184 58L28.184 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1769-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M64.36630257483151 58L64.36630257483151 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1775-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M78.3003025748315 58L78.3003025748315 25.75"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 25L27.434 30L78.5503025748315 30L78.5503025748315 25Z"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M63.61630257483151 32.5L63.61630257483151 37.5L78.5503025748315 37.5L78.5503025748315 32.5Z"
      /></g
    ></svg
  >
</button>
<button on:click={() => addRhythm(16, 16, 8)}>
  <svg
    width="50"
    height="50"
    viewBox="25 10 30 70"
    ><g class="vf-stavenote" id="vf-auto1874"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M20.9312 65.0544C24.52544 65.0544,28.934 61.74096,28.934 58.3152C28.934 56.23728,27.30536 54.9456,25.0028 54.9456C20.56616 54.9456,17 58.23096,17 61.6848C17 63.7908,18.74096 65.0544,20.9312 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1880"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M37.447940402766115 65.0544C41.04218040276612 65.0544,45.450740402766115 61.74096,45.450740402766115 58.3152C45.450740402766115 56.23728,43.82210040276612 54.9456,41.51954040276612 54.9456C37.082900402766114 54.9456,33.51674040276612 58.23096,33.51674040276612 61.6848C33.51674040276612 63.7908,35.25770040276612 65.0544,37.447940402766115 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stavenote" id="vf-auto1886"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M53.96468080553224 65.0544C57.558920805532246 65.0544,61.96748080553225 61.74096,61.96748080553225 58.3152C61.96748080553225 56.23728,60.33884080553224 54.9456,58.03628080553224 54.9456C53.599640805532246 54.9456,50.03348080553224 58.23096,50.03348080553224 61.6848C50.03348080553224 63.7908,51.774440805532244 65.0544,53.96468080553224 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stem" id="vf-auto1874-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M28.184 58L28.184 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1880-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M44.700740402766115 58L44.700740402766115 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1886-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M61.21748080553225 58L61.21748080553225 25.75"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 25L27.434 30L61.46748080553225 30L61.46748080553225 25Z"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 32.5L27.434 37.5L44.950740402766115 37.5L44.950740402766115 32.5Z"
      /></g
    ></svg
  >
</button>
<br />
<button on:click={play}>Play</button>
<button on:click={stop}>Stop</button>
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
