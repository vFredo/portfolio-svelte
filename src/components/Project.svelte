<script>
  export let data;
  let x = 0;
  let y = 0;

  function handleMouseMove(event, card) {
    const rect = card.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }
</script>

<a
  href={data.href}
  target="_blank"
  class="card p-4 sm:p-6 md:pd-8 flex flex-col gap-4 rounded-lg border border-zinc-600 text-center group cursor-pointer duration-200"
  on:mousemove={(event) => handleMouseMove(event, event.currentTarget)}
>
  <div
    class="relative grid place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200 overflow-hidden"
  >
    <i class={data.icon + " relative z-1"} />
  </div>
  <h3>{data.name}</h3>

  <p>{data.desc}</p>

  <div class="flex-1 flex justify-between gap-4 items-center">
    <div
      class="ml-auto cursor-pointer hover:text-zinc-950 duration-500 relative p-2 rounded after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-zinc-50 after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
    >
      <p class="relative z-4">
        Go to
        <i class="fa-solid fa-arrow-right place-items-center aspect-square" />
      </p>
    </div>
  </div>
</a>
