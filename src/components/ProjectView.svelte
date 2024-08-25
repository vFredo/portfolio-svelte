<script>
  import Project from "../components/Project.svelte";
  let projects = [
    {
      href: "#",
      name: "Game of Life",
      icon: "fa-solid fa-terminal",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
    },
    {
      href: "#",
      name: "TODO's manager",
      icon: "fa-solid fa-list-check",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
    },
    {
      href: "#",
      name: "Zoo webpage",
      icon: "fa-regular fa-file-lines",
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
