<script>
  import RhythmControl from "../RhythmControl.svelte";
</script>

<RhythmControl rhythmsToAdd={[{ dur: 8, dotted: true }, { dur: 16 }]}>
  <svg
    width="50"
    height="50"
    viewBox="25 10 50 70"
    ><g class="vf-stavenote" id="vf-auto1009"
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
      ><g class="vf-modifiers"
        ><path
          stroke-width="0.3"
          stroke-dasharray="none"
          fill="black"
          stroke="none"
          d="M35.934 55 A2 2 0 0 0 31.933999999999997 55 A2 2 0 0 0 35.934 55"
        /></g
      ></g
    ><g class="vf-stavenote" id="vf-auto1016"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M69.52745437655386 65.0544C73.12169437655386 65.0544,77.53025437655386 61.74096,77.53025437655386 58.3152C77.53025437655386 56.23728,75.90161437655385 54.9456,73.59905437655385 54.9456C69.16241437655385 54.9456,65.59625437655386 58.23096,65.59625437655386 61.6848C65.59625437655386 63.7908,67.33721437655386 65.0544,69.52745437655386 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers" /></g
    ><g class="vf-stem" id="vf-auto1009-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M28.184 58L28.184 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1016-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M76.78025437655386 58L76.78025437655386 25.75"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 25L27.434 30L77.03025437655386 30L77.03025437655386 25Z"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M76.03025437655386 32.5L76.03025437655386 37.5L67.03025437655386 37.5L67.03025437655386 32.5Z"
      /></g
    ></svg
  >
</RhythmControl>
