<script>
  export let y;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-100 px-6 flex items-center justify-between rounded-xl border border-solid " +
    (y > 0
      ? "py-4 bg-zinc-950 border-blue-950 bg-opacity-50"
      : "py-6 bg-transparent border-transparent")}
>
  <a href="#home" class="font-medium poppins">
    <b class="font-bold poppins">Fredo</b> Rodriguez
  </a>

  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab}
      <a href={tab.link} class="duration-200 hover:text-blue-400">
        <p>{tab.name}</p>
      </a>
    {/each}
    <a
      href="#contact"
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-zinc-950"
    >
      <div
        class="absolute top-0 right-full w-full h-full bg-blue-300 opacity-20 group-hover:translate-x-full z-0 duration-200 hover:font-bold"
      />
      <h4 class="relative z-9">Contact me</h4>
    </a>
  </div>
</header>
