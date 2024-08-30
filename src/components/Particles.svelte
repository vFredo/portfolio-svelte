<!-- Particles.svelte -->
<script>
  import { onMount } from "svelte";

  onMount(() => {
    particlesJS.load("particles-js", "/assets/particlesjs-config.json", () => {
      console.log("Callback - particles.js config loaded!");
    });
  });
</script>

<div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70">
  <div id="particles-js" class="absolute inset-0"></div>
</div>
