<header
  class="w-full h-16 px-10 py-3 border-b border-gray-200 flex justify-between items-center"
>
  <!-- ToggleMind Logo -->
  <div class="flex items-center gap-0 sm:gap-2">
    <div class="max-sm:hidden w-4 h-4">
      <!-- Future logo placeholder -->
    </div>
    <h1 class="font-bold text-base md:text-lg tracking-tight">
      <a href="/">ToggleMind</a>
    </h1>
  </div>
  <!-- Navigation and user actions -->
  <nav class="flex justify-end items-center gap-2 sm:gap-4 lg:gap-8">
    <!-- Navigation links -->
    <slot name="nav-links" />
    <!-- User actions -->
    <slot name="user-actions" />
  </nav>
</header>
