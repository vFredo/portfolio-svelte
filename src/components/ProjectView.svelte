<script>
  import Project from "../components/Project.svelte";
  let projects = [
    {
      href: "https://github.com/vFredo/gameOfLife",
      name: "Game of Life",
      date: "June 2023 ",
      desc: "Connway's Game of Life implementation on Go that renders on the terminal. You can load and save diferent presets in JSON format and change different properties of the game itself, also with convenient keyboard shortcuts to advance generations, stop running and save or load different presets.",
      imgPath: "assets/game_of_life.png",
    },
    {
      href: "https://github.com/vFredo/pngme",
      name: "PNGme",
      date: "October 2023",
      desc: "A command line program, written in rust, that lets you encode/decode secret messages inside PNG format files.",
      imgPath: "assets/game_of_life.png",
    },
    {
      href: "#",
      name: "Zoo webpage",
      date: "June 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
      imgPath: "assets/game_of_life.png",
    },
  ];

  function moveCarousel(direction) {
    // direction = True -> Right
    const carousel = document.getElementById("project-carousel");
    carousel.scrollBy({
      left: direction ? carousel.clientWidth/2 : -carousel.clientWidth/2,
      behavior: "smooth"
    });
  }
</script>

<div class="flex flex-col gap-2 text-center">
  <h6 class="text-lg sm:text-xl md:text-2xl">
    Curious to <span class="poppins text-blue-400">see</span> my work?
  </h6>
  <h3>A few of my little creations . . .</h3>
</div>

<div class="mt-4 w-full">
  <div class="relative py-8">
    <div
      aria-label="Carousel Controls"
      class="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4 lg:px-8"
    >
      <button
        type="button"
        title="Previous project slide"
        aria-controls="project-carousel"
        class="pointer-events-auto aspect-square h-fit rounded-full border border-zinc-600 bg-zinc-900/90 p-4 text-zinc-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-zinc-900/50"
        on:click={() => moveCarousel(false)}
      >
        <i class="size-5 fa-solid fa-chevron-left" />
      </button>
      <button
        type="button"
        title="Next project slide"
        aria-controls="project-carousel"
        class="pointer-events-auto aspect-square h-fit rounded-full border border-zinc-600 bg-zinc-900/90 p-4 text-zinc-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-zinc-900/50"
        on:click={() => moveCarousel(true)}
      >
        <i class="size-5 fa-solid fa-chevron-right" />
      </button>
    </div>

    <div
      class="h-[calc(clamp(18rem,42vmin,26rem)*3/2)] touch-none select-none overflow-hidden"
    >
      <ul
        id="project-carousel"
        aria-label="Project Carousel"
        class="grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto pe-[calc(50vw-(clamp(18rem,42vmin,26rem)+1.5rem)/2)] ps-[calc(50vw-clamp(18rem,42vmin,26rem)/2-7px)]"
      >
        {#each projects as project, index}
          <Project data={project} proId={index} />
        {/each}
      </ul>
    </div>
  </div>
</div>
