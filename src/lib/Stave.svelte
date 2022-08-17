<script lang="ts">
  import { onMount } from "svelte";
  import { rhythms } from "./stores";
  import {
    Beam,
    Dot,
    Formatter,
    Note,
    RenderContext,
    Renderer,
    Stave,
    StaveNote,
  } from "vexflow";

  let staveDiv: HTMLDivElement;
  let renderer: Renderer;
  let context: RenderContext;
  let stave: Stave;

  onMount(() => {
    renderer = new Renderer(staveDiv, Renderer.Backends.SVG);

    renderer.resize(400, 100);
    context = renderer.getContext();

    stave = new Stave(0, 10, 400);

    // Dev only
    // renderer.resize(100, 100);
    // stave = new Stave(0, 0, 100);

    stave.setContext(context);
  });

  $: {
    if (stave) {
      context.clear();
    }

    if (stave && $rhythms.length > 0) {
      const notes = $rhythms.map((rhythm) =>
        rhythm.map((r) => {
          const note = new StaveNote({
            keys: ["b/4"],
            duration: r.dur.toString(),
          });

          if (r.dotted) Dot.buildAndAttach([note]);

          return note;
        })
      );
      const allNotes = notes.flat();
      const beams = notes.map((n) =>
        n.length > 1 && !n.find((v) => parseInt(v.getDuration()) < 8)
          ? new Beam(n)
          : null
      );

      Formatter.FormatAndDraw(context, stave, allNotes);

      beams.forEach((b) => {
        if (b) {
          b.setContext(context).draw();
        }
      });
    }
  }

  const dotted = (staveNote: StaveNote) => {
    Dot.buildAndAttach([staveNote], {
      all: true,
    });
  };
</script>

<div class="stave" bind:this={staveDiv} />

<style>
  .stave {
    margin: 5em 0 2em 0;
    border: 2px solid #ccc;
    border-radius: 1em;
  }
</style>
