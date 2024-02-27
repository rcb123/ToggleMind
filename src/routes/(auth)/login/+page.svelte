<script lang="ts">
  import type { PageData } from "./$types";
  import LoginForm from "./login-form.svelte";
  export let data: PageData;
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<section class="pt-12 flex flex-col text-left w-full max-w-sm gap-4">
  <h1 class="text-3xl font-bold">Welcome back</h1>

  <h3>Log in to your account</h3>

  <LoginForm data={data.form} />
</section>
