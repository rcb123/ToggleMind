<script lang="ts">
  import Ellipsis from "$lib/svgs/Ellipsis.svelte";
</script>

<div class="h-full w-full max-w-4xl flex flex-col gap-9 py-12">
  <h1 class="text-4xl font-bold">My Feed</h1>
  <div class="flex flex-col w-full gap-6">
    <h2 class="text-2xl font-semibold">Recommended For You</h2>
    <div class="flex flex-col gap-6 text-xl">
      <a class="flex flex-row justify-between" href="/learn/TheLostJournal">
        <div class="flex gap-2 items-center">
          <img
            src="/images/stories/lost_journal.webp"
            alt="The Lost Journal"
            class="w-12 h-12 rounded-md"
          />
          <h3>The Lost Journal</h3>
        </div>
        <Ellipsis />
      </a>
      <a class="flex flex-row justify-between" href="/learn/AWhisperInTheForest">
        <div class="flex gap-2 items-center">
          <img
            src="/images/stories/forest_whisper.webp"
            alt="A Whisper in the Forest"
            class="w-12 h-12 rounded-md"
          />
          <h3>A Whisper in the Forest</h3>
        </div>
        <Ellipsis />
      </a>
      <a
        class="flex flex-row justify-between"
        href="/learn/StarsOverTheSea"
      >
        <div class="flex gap-2 items-center">
          <img
            src="/images/stories/stars_over_sea.webp"
            alt="Stars Over the Sea"
            class="w-12 h-12 rounded-md"
          />
          <h3>Stars Over the Sea</h3>
        </div>
        <Ellipsis />
      </a>
    </div>
    <h2 class="text-2xl font-semibold">Continue Learning</h2>
    <div class="flex flex-col gap-6 text-xl">
      <a
        class="flex flex-row justify-between"
        href="/learn/EchoesOfTheFuture"
      >
        <div class="flex gap-2 items-center">
          <img
            src="/images/stories/echoes_future.webp"
            alt="Echoes of the Future"
            class="w-12 h-12 rounded-md"
          />
          <h3>Echoes of the Future</h3>
        </div>
        <Ellipsis />
      </a>
      <a class="flex flex-row justify-between" href="/learn/TheChefsSecret">
        <div class="flex gap-2 items-center">
          <img
            src="/images/stories/chefs_secret.webp"
            alt="The Chef's Secret"
            class="w-12 h-12 rounded-md"
          />
          <h3>The Chef's Secret</h3>
        </div>
        <Ellipsis />
      </a>
    </div>
  </div>
</div>
