<script lang="ts">
  import type { PageData } from "./$types";
  import SignupForm from "./signup-form.svelte";
  export let data: PageData;
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<section class="pt-12 flex flex-col w-full max-w-sm gap-4">
  <h1 class="text-3xl font-bold text-center">Create an account</h1>

  <SignupForm data={data.form} />
</section>
