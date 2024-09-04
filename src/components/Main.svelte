<script>
  import IntroPage from "../components/IntroPage.svelte";
  import ProductView from "../components/ProductView.svelte";
  import Experience from "../components/Experience.svelte";
  import Contact from "../components/Contact.svelte";
  import About from "../components/About.svelte";
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 lg:py-32"
  >
    <IntroPage />
  </section>

  <section
    id="about"
    class="pt-3 lg:pt-4 pb-20 lg:pb-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <About />
  </section>

  <section
    id="experience"
    class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <Experience />
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <ProductView />
  </section>

  <section
    id="contact"
    class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <Contact />
  </section>
</main>
