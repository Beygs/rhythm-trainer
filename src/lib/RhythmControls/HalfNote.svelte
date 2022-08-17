<script>
  import RhythmControl from "../RhythmControl.svelte";
</script>

<RhythmControl rhythmsToAdd={[2].map((dur) => ({ dur }))}>
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
</RhythmControl>
