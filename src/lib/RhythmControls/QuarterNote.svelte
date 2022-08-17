<script>
  import RhythmControl from "../RhythmControl.svelte";
</script>

<RhythmControl rhythmsToAdd={[4].map((dur) => ({ dur }))}>
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
</RhythmControl>
