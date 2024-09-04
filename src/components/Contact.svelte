<script>
  let name = "";
  let email = "";
  let message = "";

  function handleSubmit() {
    console.log({ name, email, message });
  }
</script>

<div class="mx-auto flex flex-col md:flex-row gap-8 h-[90%] items-center">
  <div class="md:w-1/2">
    <button class="md:text-2xl lg:text-xl bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full mb-5 cursor-default">
      CONTACT
    </button>
    <h2 class="text-3xl md:text-4xl sm:text-5xl font-bold mb-4">Got a problem to solve?</h2>
    <p class="text-zinc-400 text-base">
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      Whether you have a question, a proposal, or just want to say hello, feel free to reach out.
    </p>
  </div>

  <form class="md:w-1/2 space-y-4" on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="name" class="block text-sm font-medium text-zinc-400"
        >NAME</label
      >
      <input
        type="text"
        id="name"
        bind:value={name}
        required
        class="mt-1 px-3 block w-full bg-zinc-800 border-zinc-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-zinc-400"
        >EMAIL</label
      >
      <input
        type="email"
        id="email"
        bind:value={email}
        required
        class="mt-1 px-3 block w-full bg-zinc-800 border-zinc-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-400"
        >MESSAGE</label
      >
      <textarea
        id="message"
        rows="4"
        bind:value={message}
        required
        class="mt-1 px-3 py-2 block w-full h-[200px] bg-zinc-800 border-zinc-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      ></textarea>
    </div>

    <div class="flex justify-between items-center gap-1">
      <span class="text-zinc-400 text-sm">
        <i class="fa-solid fa-envelope pr-1 text-zinc-50"/>
        luisalfredo9905@gmail.com
      </span>

      <button
        type="submit"
        class="relative isolate flex justify-center items-center select-none overflow-hidden border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:before:scale-x-100 focus-visible:before:scale-x-100 active:scale-[1.01] disabled:opacity-70 after:border-zinc-50 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base hover:text-zinc-50 focus-visible:text-zinc-900 text-zinc-900 before:bg-zinc-900 rounded-full bg-zinc-50"
      >
        Send <i class="fa-solid fa-paper-plane pl-1"/>
      </button>
    </div>
  </form>
</div>
