<script>
  export let y;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
    { name: "Experience", link: "#experience" },
  ];
</script>

<header
  class={"sticky z-[10] mx-4 top-2 px-6 duration-200 flex items-center justify-between rounded-full border border-solid " +
    (y > 0
      ? "py-2 bg-zinc-950 border-blue-950 bg-opacity-50"
      : "py-2 bg-transparent border-transparent")}
>

  <title>Fredo | Dev</title>

  <a href="#home" class="font-medium poppins hover:animate-jiggle">
    <b class="font-bold poppins">Alfredo</b> Rodriguez
  </a>

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
</header>
