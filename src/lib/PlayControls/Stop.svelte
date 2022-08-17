<script lang="ts">
  import * as Tone from "tone";

  const stop = () => {
    Tone.Transport.stop();
  };
</script>

<button on:click={stop}>Stop</button>
