<script>
  export let prod;
  export let prodId;
  export let isActive;
</script>

<li
  aria-labelledby={"project-item-" + prodId}
  aria-current={isActive ? "true" : "false"}
  aria-hidden={isActive ? "false" : "true"}
  data-item-index={prodId}
  class="relative aspect-[2/3] w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md"
>
  <a
    href={prod.href}
    target="_blank"
    aria-label={prod.name + " project details"}
    class="group block h-full w-full rounded-md border border-zinc-50/30"
    draggable="false"
  >
    <article
      class="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-zinc-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      class:opacity-100={isActive}
      class:opacity-0={!isActive}
    >

      <div class="overflow-hidden">
        <time
          datetime="2023-08-01"
          class="block translate-y-full text-xs uppercase text-zinc-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0"
          class:translate-y-0={isActive}
          class:translate-y-full={!isActive}
        >
          {prod.date}
        </time>
      </div>

      <div class="overflow-hidden">
        <h3
          id={"project-item-" + prodId}
          class="translate-y-full text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-4xl"
          class:translate-y-0={isActive}
          class:translate-y-full={!isActive}
        >
          {prod.name}
        </h3>
      </div>

      <div class="overflow-hidden">
        <p
          class="translate-y-full text-xs text-zinc-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-sm"
          class:translate-y-0={isActive}
          class:translate-y-full={!isActive}
        >
          {prod.desc}
        </p>
      </div>
    </article>
    <img
      alt={prod.name + " background"}
      src={prod.imgPath}
      sizes="(max-width: 3840px) 100vw, 3840px"
      width="3840"
      height="2160"
      class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover transition-[transform,opacity,filter] duration-700 group-hover:scale-105 group-focus-visible:scale-105"
      class:scale-105={isActive}
      class:scale-100={!isActive}
      style="background-color: rgb(60, 108, 52); object-position: 4.5584% center;"
    />
  </a>
</li>
