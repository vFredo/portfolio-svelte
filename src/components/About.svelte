<script>
  export let description = `, a passionate programmer, avid reader and electronics hobbies from Cali, Colombia. Bringing your web development and design to another level. My expertise is developing next-level websites and web applications, including full frontend design and backend capabilities.
    `;

  let imgSrc = "/assets/persona.png";
</script>

<div class="flex h-screen border rounded-xl overflow-hidden border-transparent">
  <!-- Left Side: Image -->
  <div class="hidden md:block md:w-1/2">
    <img src={imgSrc} alt="Personal About" class="w-full h-full object-cover" />
  </div>

  <!-- Right Side: Content -->
  <div
    class="w-full md:w-1/2 bg-zinc-800/[.15] text-zinc-50 flex flex-col justify-center px-12 relative"
  >
    <!-- Background Image for Small Screens -->
    <div
      class="absolute inset-0 bg-cover bg-center md:hidden"
      style="background-image: url({imgSrc}); filter: blur(10px) brightness(0.5);"
    />

    <!-- Content -->
    <div class="relative z-10 text-zinc-50">
      <div class="mb-4">
        <span class="text-blue-400 text-xs tracking-widest"> ABOUT ME </span>
      </div>
      <h1 class="text-5xl font-bold mb-4 poppins">I am ...</h1>
      <p class="text-lg leading-relaxed poppins">
        <span class="text-blue-400 tracking-widest">Luis Alfredo Rodriguez</span
        >
        {description}
      </p>
    </div>
  </div>
</div>
