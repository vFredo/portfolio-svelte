<script>
  import Project from "../components/Project.svelte";
  let projects = [
    {
      href: "https://github.com/vFredo/gameOfLife",
      name: "Game of Life",
      icon: "fa-solid fa-microchip",
      desc: "Connway's Game of Life implementation on Go that renders on the terminal. You can load and save diferent presets in JSON format and change different properties of the game itself, also with convenient keyboard shortcuts to advance generations, stop running and save or load different presets.",
    },
    {
      href: "https://github.com/vFredo/pngme",
      name: "PNGme",
      icon: "fa-solid fa-image",
      desc: "A command line program, written in rust, that lets you encode/decode secret messages inside PNG format files.",
    },
    {
      href: "#",
      name: "Zoo webpage",
      icon: "fa-solid fa-desktop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
    },
  ];
</script>

<div class="flex flex-col gap-2 text-center">
  <h6 class="text-lg sm:text-xl md:text-2xl">
    Curious to <span class="poppins text-blue-400">see</span> my work?
  </h6>
  <h3>A few of my little creations . . .</h3>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
  {#each projects as project}
    <Project data={project} />
  {/each}
</div>
