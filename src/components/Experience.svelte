<script>
  let experiences = [
    {
      name: "Education",
      desc: "Pontificia Universidad Javeriana, Cali - Software Engineer 2025",
    },
    {
      name: "Soluware Colombia S.A.S",
      desc: "System Program Analyst - 2021-2024",
    },
    {
      name: "MisCursosEnLinea",
      desc: "Part-time Web Developer - Summer 2017",
    },
    {
      name: "DevHack Certificate",
      desc: "Python Certificate - 2018",
    },
  ];
</script>

<div
  class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-500 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-500 py-4"
>
  <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
  <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
    A <span class="poppins text-blue-400">little</span> bit about my
    <span class="poppins text-blue-400">experiences</span>.
  </h3>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full mx-auto max-w-[1200px]">
  {#each experiences as exp, index}
    <div class="flex gap-6 sm:gap-8">
      <p class="poppins text-4xl sm:text-5xl md:text-6xl text-zinc-500 font-semibold">
        0{index + 1}
      </p>

      <div class="flex flex-col">
        <h3 class="text-2xl sm:text-2xl md:text-4xl poppins">{exp.name}</h3>
        <p class="italic">{exp.desc}</p>
      </div>
    </div>
  {/each}
</div>
