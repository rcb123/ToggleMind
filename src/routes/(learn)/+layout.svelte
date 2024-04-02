<script>
  import * as Avatar from "$lib/components/ui/avatar/index";
  import { Button } from "$lib/components/ui/button/index";
  import Navbar from "$components/Navbar.svelte";
  import { Globe } from "lucide-svelte";
</script>

<Navbar>
  <div
    slot="nav-links"
    class="flex items-center gap-2 sm:gap-4 lg:gap-9 font-medium text-sm md:text-base"
  >
    <a href="/hub">Hub</a>
  </div>

  <div slot="user-actions" class="flex gap-2 sm:gap-4 font-bold">
    <Button class="bg-gray-300 rounded-lg w-10 h-full p-2">
      <Globe />
    </Button>
    <Avatar.Root>
      <Avatar.Image
        src="https://m.media-amazon.com/images/S/amzn-author-media-prod/dtmcudi7pna2v0oiogmm2l85bc._SX450_CR0%2C0%2C450%2C450_.jpg"
        alt="Profile Photo"
      />
      <Avatar.Fallback>TM</Avatar.Fallback>
    </Avatar.Root>
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
