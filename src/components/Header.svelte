<script>
  export let y;
  let tabs = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
  ];

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header
  class={"sticky z-[20] mx-4 top-2 px-6 duration-200 flex items-center justify-between rounded-full border border-solid " +
    (y > 0
      ? "py-2 bg-zinc-950 border-blue-950 bg-opacity-50 backdrop-blur-lg backdrop-brightness-125"
      : "py-2 bg-transparent border-transparent")}
>
  <title>Fredo | Dev</title>

  <a href="#home" class="font-medium poppins hover:animate-jiggle">
    <b class="font-bold poppins">Alfredo</b> Rodriguez
  </a>

  <!-- Burger Menu Button -->
  <button class="sm:hidden block focus:outline-none" on:click={toggleMenu}>
    {#if menuOpen}
      <i class="fa-solid fa-xmark" />
    {:else}
      <i class="fa-solid fa-bars" />
    {/if}
  </button>

  <!-- Tabs Menu -->
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab}
      <a
        href={tab.link}
        class="relative rounded p-1 duration-200 hover:underline hover:font-bold"
      >
        <p>{tab.name}</p>
      </a>
    {/each}

    <!-- Contact me button -->
    <a
      href="#contact"
      class="relative isolate flex justify-center items-center select-none overflow-hidden border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:before:scale-x-100 focus-visible:before:scale-x-100 active:scale-[1.01] disabled:opacity-70 border-zinc-50 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base hover:text-zinc-900 focus-visible:text-zinc-900 text-zinc-50 before:bg-zinc-50 rounded-full"
    >
      Contact me
    </a>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div
      class="absolute right-4 top-12 bg-zinc-950 text-zinc-50 rounded-lg shadow-lg flex flex-col items-center p-4 space-y-2 border border-blue-950"
    >
      {#each tabs as tab}
        <a
          href={tab.link}
          class="w-full text-center p-2 duration-200 hover:underline hover:font-bold"
          on:click={() => (menuOpen = false)}
        >
          {tab.name}
        </a>
      {/each}
      <a
        href="#contact"
        class="w-full text-center p-2 duration-200 hover:underline hover:font-bold"
        on:click={() => (menuOpen = false)}
      >
        Contact me
      </a>
    </div>
  {/if}
</header>
