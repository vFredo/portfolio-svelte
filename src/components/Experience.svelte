<script>
  let experiences = [
    {
      name: "Self-taught developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
    },
    {
      name: "A product designer & UX fanatic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
    },
    {
      name: "Excelent Comunicator",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error facere culpa, blanditiis praesentium voluptatibus neque maiores magni odio perspiciatis excepturi illum nostrum id impedit. Repellendus reprehenderit distinctio aut.",
    },
  ];
</script>

<div
  class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-700 py-4"
>
  <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
  <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
    A <span class="poppins text-blue-400">little</span> bit about my <span class="poppins text-blue-400">experiences</span>.
  </h3>
</div>
<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
  {#each experiences as exp, index}
    <div class="flex gap-6 sm:gap-8">
      <p class="poppins text-4xl sm:text-5xl md:text-6xl text-zinc-500 font-semibold" >
        0{index + 1}
      </p>

      <div class="flex flex-col gap-6 sm:gap-8">
        <h3 class="text-2xl sm:text-2xl md:text-4xl">{exp.name}</h3>
        <p>{exp.desc}</p>
      </div>
    </div>
  {/each}
</div>
