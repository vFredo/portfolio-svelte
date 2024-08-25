<script>
  export let data;
</script>

<a
  href={data.href}
  target="_blank"
  class="p-4 sm:p-6 md:pd-8 flex flex-col gap-4 rounded-lg border border-solid border-blue-700 text-center group cursor-pointer hover:border-blue-400 duration-200"
>
  <div
    class="relative bg-zinc-900 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200 overflow-hidden rounded-full"
  >
    <i class={data.icon + " relative z-1"} />
  </div>
  <h3>{data.name}</h3>

  <p>{data.desc}</p>

  <div class="flex-1 flex justify-between gap-4 items-center">
    <div
      class="ml-auto cursor-pointer hover:text-zinc-950 duration-200 relative p-2 rounded after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-zinc-50 after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
    >
      <p class="relative z-4">
        Go to
        <i class="fa-solid fa-arrow-right place-items-center aspect-square" />
      </p>
    </div>
  </div>
</a>
