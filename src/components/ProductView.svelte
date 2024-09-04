<script>
  import { onMount } from "svelte";
  import Product from "../components/Product.svelte";

  let products = [
    {
      href: "https://github.com/vFredo/planos_craneales_prenatales",
      name: "Classification model for PCU images",
      date: "Present",
      desc: "The development of a deep learning-based tool to classify different brain planes (transventricular, transthalamic, and transcerebellar) in PCU (Prenatal Cranial Ultrasound) images.",
      imgPath: "/assets/PCU_prediction.png",
    },
    {
      href: "https://github.com/vFredo/gameOfLife",
      name: "Game of Life",
      date: "June 2023 ",
      desc: "Connway's Game of Life implementation on Go that renders on the terminal. You can load and save diferent presets in JSON format and change different properties of the game itself, also with convenient keyboard shortcuts to advance generations, stop running and save or load different presets.",
      imgPath: "/assets/game_of_life.png",
    },
    {
      href: "https://github.com/vFredo/pngme",
      name: "PNGme",
      date: "October 2023",
      desc: "A command line program, written in rust, that lets you encode/decode secret messages inside PNG format files.",
      imgPath: "/assets/noice_pngme.png",
    },
    {
      href: "https://github.com/vfredo/zoo_web",
      name: "Zoo webpage",
      date: "November 2020",
      desc: "Redesigned and modernized the outdated website of Cali's Zoo, focusing on better UX by implementing a responsive and visually appealing interface using React and Bootstrap.",
      imgPath: "/assets/cali_zoo.png",
    },
  ];

  let currentProdId = 0;

  function moveCarousel(offset) {
    let prodId =
      currentProdId + offset < 0
        ? products.length - 1
        : (currentProdId + offset) % products.length;
    currentProdId = prodId;

    const carousel = document.getElementById("project-carousel");
    const project = document.querySelector(`[data-item-index="${prodId}"]`);

    if (project) {
      const projectLeft = project.offsetLeft;
      const carouselWidth = carousel.clientWidth;
      const projectWidth = project.clientWidth;

      const scrollPosition = projectLeft - carouselWidth / 2 + projectWidth / 2;

      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }

  onMount(() => {
    moveCarousel(0); // Move to the first project on mount
  });
</script>

<div class="flex flex-col gap-2 text-center">
  <h6 class="text-lg sm:text-xl md:text-2xl">
    Curious to <span class="poppins text-blue-400">see</span> my work?
  </h6>
  <h3>A few of my <span class="poppins text-blue-400">projects</span> . . .</h3>
</div>

<div class="w-full">
  <div class="relative py-8">
    <div
      aria-label="Carousel Controls"
      class="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4 lg:px-8"
    >
      <button
        type="button"
        title="Previous project slide"
        aria-controls="project-carousel"
        class="pointer-events-auto aspect-square h-fit rounded-full border border-zinc-600 bg-zinc-900/90 p-4 text-zinc-100 drop-shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-zinc-900/50"
        on:click={() => moveCarousel(-1)}
      >
        <i class="size-5 fa-solid fa-chevron-left" />
      </button>
      <button
        type="button"
        title="Next project slide"
        aria-controls="project-carousel"
        class="pointer-events-auto aspect-square h-fit rounded-full border border-zinc-600 bg-zinc-900/90 p-4 text-zinc-100 drop-shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-zinc-900/50"
        on:click={() => moveCarousel(1)}
      >
        <i class="size-5 fa-solid fa-chevron-right" />
      </button>
    </div>

    <div
      class="h-[calc(clamp(18rem,42vmin,26rem)*3/2)] touch-none select-none overflow-hidden"
    >
      <ul
        id="project-carousel"
        aria-label="Products Carousel"
        class="grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto pe-[calc(50vw-(clamp(18rem,42vmin,26rem)+1.5rem)/2)] ps-[calc(50vw-clamp(18rem,42vmin,26rem)/2-7px)]"
      >
        {#each products as product, index}
          <Product
            prod={product}
            prodId={index}
            isActive={currentProdId === index}
          />
        {/each}
      </ul>
    </div>
  </div>
</div>
