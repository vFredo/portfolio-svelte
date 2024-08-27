<script>
    export let description = `
      , a passionate freelancer from Cali, Colombia bringing you web development
      and design from the future. My expertise is developing next-level
      websites and web applications including full frontend design.
    `;
</script>

<div class="flex h-screen border rounded-xl overflow-hidden border-transparent">
    <!-- Left Side: Image -->
    <div class="w-1/2">
        <img src={"assets/about.jpg"} alt="Personal About" class="w-full h-full object-cover" />
    </div>

    <!-- Right Side: Content -->
    <div class="w-1/2 bg-zinc-800/[.15] text-zinc-50 flex flex-col justify-center px-12" >
        <div class="mb-4">
            <span class="text-blue-400 text-xs tracking-widest">ABOUT ME</span>
        </div>
        <h1 class="text-5xl font-bold mb-4 poppins">I am ...</h1>
        <p class="text-lg leading-relaxed poppins">
            <span class="text-blue-400 tracking-widest">Luis Alfredo Rodriguez</span>
            {description}
        </p>
    </div>
</div>
