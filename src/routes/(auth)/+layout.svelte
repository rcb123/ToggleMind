<script>
  import Navbar from "$components/Navbar.svelte";
</script>

<Navbar>
  <div slot="user-actions" class="flex gap-2 sm:gap-4 font-bold">
    <a
      href="/signup"
      class="py-2 w-16 md:w-20 bg-sky-500 text-white rounded-xl text-sm text-center md:text-base"
      >Sign up</a
    >
    <a
      href="/login"
      class="py-2 w-16 md:w-20 bg-slate-200 text-black rounded-xl text-sm text-center md:text-base"
      >Log in</a
    >
  </div>
</Navbar>
<div class="w-full h-full flex flex-col">
  <main
    class="flex flex-col items-center px-10 sm:px-16 py-5 min-h-[calc(100vh-8rem)]"
  >
    <slot />
  </main>
  <footer
    class="w-full h-16 border-t border-gray-200 flex justify-between items-center"
  />
</div>
