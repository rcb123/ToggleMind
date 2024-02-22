<script lang="ts">
  import { Book, People, Time, Trophy, Search } from "$components/icons/index";
</script>

<div class="w-full h-full flex flex-col">
  <header
    class="w-full h-16 px-10 py-3 border-b border-gray-200 flex justify-between items-center"
  >
    <!-- ToggleMind Logo -->
    <div class="flex items-center gap-4">
      <div class="w-4 h-4">
        <!-- Future logo placeholder -->
      </div>
      <h1 class="font-bold text-base md:text-lg tracking-tight">ToggleMind</h1>
    </div>
    <!-- Navigation and user actions -->
    <nav class="flex justify-end items-center gap-1 md:gap-2 lg:gap-8">
      <!-- Navigation links -->
      <div class="flex items-center gap-2 lg:gap-9 font-medium text-sm md:text-base">
        <a href="/learn">Learn</a>
        <a href="/stories">Stories</a>
        <a href="/vocab">Vocab</a>
        <a href="/grammar">Grammar</a>
        <a href="/practice">Practice</a>
        <a href="/pricing">Pricing</a>
      </div>
      <!-- User actions -->
      <div class="flex gap-1 md:gap-2 lg:gap-4 font-bold">
        <button class="py-2 w-16 md:w-20 bg-sky-500 text-white rounded-xl text-sm md:text-base"
          >Sign up</button
        >
        <button class="py-2 w-16 md:w-20 bg-slate-200 text-black rounded-xl text-sm md:text-base"
          >Log in</button
        >
      </div>
    </nav>
  </header>
  <main class="flex flex-col items-center px-40 py-5">
    <section class="w-full max-w-4xl flex flex-col items-start">
      <div
        class="text-white bg-[url('/images/couple_reading_together.webp')] bg-cover bg-center w-full pt-[36%] rounded-xl"
      >
        <div
          class="flex flex-col gap-2 bg-gradient-to-b from-transparent via-black/80 via-40% to-black w-full h-full rounded-xl p-4"
        >
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold px-4 pt-4">
            Read and learn with stories
          </h2>
          <p class="px-4 text-sm md:text-base">
            Every story is written to help you understand and remember new
            words. You'll also get questions that test your comprehension.
          </p>
          <div class="flex items-center p-4">
            <div
              class="flex flex-grow md:flex-grow-[0.2] items-center gap-2 rounded-xl border border-gray-200 bg-white pl-4 p-1"
            >
              <span class="flex items-center">
                <Search />
              </span>
              <input
                type="email"
                placeholder="Enter your email to start learning"
                class="flex-1 pl-1 py-2 pr-2 bg-gray-50 text-neutral-900 rounded-xl text-xs md:text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-none outline-none bg-transparent"
              />
              <button class="bg-sky-500 text-white font-bold text-xs md:text-base py-2 md:py-3 px-4 rounded-xl"
                >Submit</button
              >
            </div>
          </div>
        </div>
      </div>
      <h3 class="font-bold text-2xl mt-5">Why learn with ToggleMind</h3>
      <div class="flex justify-center gap-3 mt-3">
        <div
          class="p-3 md:p-4 rounded-lg border border-gray-300 flex flex-col gap-3 w-1/4"
        >
          <div class="w-6 h-6">
            <Time />
          </div>
          <h4 class="font-bold text-sm md:text-base">Learn faster</h4>
          <p class="text-xs md:text-sm text-gray-500">
            Get fluent faster with our unique method
          </p>
        </div>
        <div
          class="p-3 md:p-4 rounded-lg border border-gray-300 flex flex-col gap-3 w-1/4"
        >
          <div class="w-6 h-6">
            <Trophy />
          </div>
          <h4 class="font-bold text-sm md:text-base">Develop skills</h4>
          <p class="text-xs md:text-sm text-gray-500">Useful lessons in every story</p>
        </div>
        <div
          class="p-3 md:p-4 rounded-lg border border-gray-300 flex flex-col gap-3 w-1/4"
        >
          <div class="w-6 h-6">
            <Book />
          </div>
          <h4 class="font-bold text-sm md:text-base">Personal</h4>
          <p class="text-xs md:text-sm text-gray-500">
            Curated for your level and interests
          </p>
        </div>
        <div
          class="p-3 md:p-4 rounded-lg border border-gray-300 flex flex-col gap-3 w-1/4"
        >
          <div class="w-6 h-6">
            <People />
          </div>
          <h4 class="font-bold text-sm md:text-base">Community</h4>
          <p class="text-xs md:text-sm text-slate-500">Connect with other learners</p>
        </div>
      </div>
      <div class="flex gap-3 mt-6">
        <div class="flex flex-col gap-3 w-1/3">
          <img
            src="/images/person_reading_cozy.webp"
            class="rounded-xl"
            alt="Beginner Lesson"
          />
          <div>
            <h5 class="text-sm md:text-base font-medium">Studying while cozy at home</h5>
            <p class="text-xs md:text-sm text-slate-500">Beginner</p>
          </div>
        </div>
        <div class="flex flex-col gap-3 w-1/3">
          <img
            src="/images/person_studying_park.webp"
            class="rounded-xl"
            alt="Intermediate Lesson"
          />
          <div>
            <h5 class="text-sm md:text-base font-medium">Reading in the park</h5>
            <p class="text-xs md:text-sm text-slate-500">Intermediate</p>
          </div>
        </div>
        <div class="flex flex-col gap-3 w-1/3">
          <img
            src="/images/person_studying_intensely.webp"
            class="rounded-xl"
            alt="Advanced Lesson"
          />
          <div>
            <h5 class="text-sm md:text-base font-medium">Studying for exams</h5>
            <p class="text-xs md:text-sm text-slate-500">Advanced</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer
    class="w-full h-16 border-t border-gray-200 flex justify-between items-center"
  ></footer>
</div>
