<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Particles from "../components/Particles.svelte";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<Particles />
<div
  id="home"
  class="relative flex flex-col mx-auto max-w-[1400px] w-full text-sm sm:text-base min-h-screen"
>
  <!-- Go UP button -->
  <div
    class={"fixed bottom-0 right-0 duration-200 flex p-10 z-[10] " +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0")}
  >
    <button
      on:click={goTop}
      class="ml-auto rounded-full bg-zinc-700 bg-opacity-25 text-zinc-50 px-3 sm:px-4 hover:bg-zinc-950 cursor-pointer transition duration-500 backdrop-blur-lg backdrop-brightness-125"
    >
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square p-1 text-xl" />
    </button>
  </div>

  <!-- Content -->
  <Header {y} />
  <slot />
</div>

<Footer />

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
