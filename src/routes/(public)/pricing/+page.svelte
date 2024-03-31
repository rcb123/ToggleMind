<script lang="ts">
  import { CheckMark, X } from "$components/icons/index";
</script>

<section class="w-full max-w-4xl flex flex-col items-start gap-2 mt-16">
  <h1 class="font-black text-4xl">Pricing</h1>
  <p class="text-gray-500">All plans come with a 7-day free trial</p>
  <section class="flex flex-row items-start justify-between w-full gap-2 pt-2">
    <div
      class="flex flex-col w-1/3 h-full border border-gray-200 rounded-xl p-4"
    >
      <h2 class="font-bold text-lg">Basic</h2>
      <p class="font-bold text-lg">
        <strong class="text-3xl font-extrabold">$0</strong>/month
      </p>
      <button class="bg-gray-200 rounded-xl p-2 font-bold text-sm my-4"
        >Start free</button
      >
      <ul class="flex flex-col gap-2 text-sm">
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>1 language</p>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>5 stories per day</p>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2">
            <X />
            <p>Ads between stories</p>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="flex flex-col w-1/3 h-full border border-gray-200 rounded-xl p-4"
    >
      <h2 class="font-bold text-lg">Pro</h2>
      <p class="font-bold text-lg">
        <strong class="text-3xl font-extrabold">$10</strong>/month
      </p>
      <button class="bg-gray-200 rounded-xl p-2 font-bold text-sm my-4"
        >Start learning</button
      >
      <ul class="flex flex-col gap-2 text-sm">
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>Ad free</p>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>All languages</p>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>50 stories per day</p>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="flex flex-col w-1/3 h-full border border-gray-200 rounded-xl p-4"
    >
      <h2 class="font-bold text-lg">Unlimited</h2>
      <p class="font-bold text-lg">
        <strong class="text-3xl font-extrabold">$30</strong>/month
      </p>
      <button class="bg-gray-200 rounded-xl p-2 font-bold text-sm my-4"
        >Become fluent</button
      >
      <ul class="flex flex-col gap-2 text-sm">
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>Unlimited access</p>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>Generate new stories</p>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2">
            <CheckMark />
            <p>AI personal tutor</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <div class="flex w-full justify-center pt-2">
    <p class="text-sm text-gray-500">
      By registering you agree to our Terms of Use, our Privacy Policy, and our
      Information Collection Notice
    </p>
  </div>
</section>
