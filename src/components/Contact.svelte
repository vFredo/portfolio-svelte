<script>
  let name = "";
  let email = "";
  let message = "";

  function handleSubmit() {
    // Handle form submission logic here
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
      Get your space suit ready and tell me your ideas to develop your dream
      website.
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
        class="mt-1 block w-full bg-zinc-800 border-zinc-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2"
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
        class="mt-1 block w-full bg-zinc-800 border-zinc-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2"
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
        class="mt-1 block w-full bg-zinc-800 border-zinc-700 rounded-md shadow-sm focus:blue-indigo-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      ></textarea>
    </div>

    <div class="flex justify-between items-center">
      <span class="text-zinc-400 text-sm">
        <i class="fa-solid fa-envelope pr-1 text-zinc-50"/>
        luisalfredo9905@gmail.com
      </span>

      <button
        type="submit"
        class="bg-zinc-50 text-zinc-900 px-2 py-2 rounded-md hover:bg-zinc-200 transition-colors transition-500"
      >
        Hit me up <i class="fa-solid fa-rocket"/>
      </button>
    </div>
  </form>
</div>
