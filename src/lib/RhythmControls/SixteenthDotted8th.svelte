<script>
  import RhythmControl from "../RhythmControl.svelte";
</script>

<RhythmControl rhythmsToAdd={[{ dur: 16 }, { dur: 8, dotted: true }]}>
  <svg
    width="50"
    height="50"
    viewBox="25 10 25 70"
    ><g class="vf-stavenote" id="vf-auto1024"
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
    ><g class="vf-stavenote" id="vf-auto1030"
      ><g class="vf-note" pointer-events="bounding-box"
        ><g class="vf-notehead" pointer-events="bounding-box"
          ><path
            stroke-width="0.3"
            stroke-dasharray="none"
            fill="black"
            stroke="none"
            d="M37.09650425908375 65.0544C40.69074425908376 65.0544,45.09930425908375 61.74096,45.09930425908375 58.3152C45.09930425908375 56.23728,43.470664259083755 54.9456,41.168104259083755 54.9456C36.73146425908375 54.9456,33.165304259083754 58.23096,33.165304259083754 61.6848C33.165304259083754 63.7908,34.906264259083756 65.0544,37.09650425908375 65.0544"
          /></g
        ></g
      ><g class="vf-modifiers"
        ><path
          stroke-width="0.3"
          stroke-dasharray="none"
          fill="black"
          stroke="none"
          d="M52.09930425908375 55 A2 2 0 0 0 48.09930425908375 55 A2 2 0 0 0 52.09930425908375 55"
        /></g
      ></g
    ><g class="vf-stem" id="vf-auto1024-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M28.184 58L28.184 25.75"
      /></g
    ><g class="vf-stem" id="vf-auto1030-stem"
      ><path
        stroke-width="1.5"
        stroke-dasharray="none"
        fill="none"
        stroke="black"
        d="M44.34930425908375 58L44.34930425908375 25.75"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 25L27.434 30L44.59930425908375 30L44.59930425908375 25Z"
      /></g
    ><g class="vf-beam"
      ><path
        stroke-width="0.3"
        stroke-dasharray="none"
        fill="black"
        stroke="none"
        d="M27.434 32.5L27.434 37.5L38.434 37.5L38.434 32.5Z"
      /></g
    ></svg
  >
</RhythmControl>
