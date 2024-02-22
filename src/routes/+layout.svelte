<script>
  import Navbar from "$components/Navbar.svelte";
  import "../app.css";
</script>

<Navbar />
<div class="w-full h-full flex flex-col">
  <main class="flex flex-col items-center px-10 sm:px-16 py-5 min-h-[calc(100vh-8rem)]">
    <slot />
  </main>
  <footer
    class="w-full h-16 border-t border-gray-200 flex justify-between items-center"
  />
</div>
