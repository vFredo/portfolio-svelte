<script>
  import IntroPage from "../components/IntroPage.svelte";
  import ProjectView from "../components/ProjectView.svelte";
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <IntroPage />
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <ProjectView />
  </section>

  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <About />
    <p class="mx-auto">So why not invest?</p>
  </section>

  <section id="contact">
    <Contact />
  </section>
</main>
