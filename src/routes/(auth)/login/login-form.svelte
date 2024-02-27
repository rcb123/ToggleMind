<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { formSchema, type FormSchema } from "./schema";
  import SuperDebug, {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <Form.Field {form} name="email">
    <Form.Control let:attrs>
      <Form.Label>Email</Form.Label>
      <Input type="email" class="rounded-xl" autocomplete="email" placeholder="you@example.com" {...attrs} bind:value={$formData.email} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="password" class="mt-4">
    <Form.Control let:attrs>
      <Form.Label>Password</Form.Label>
      <Input type="password" class="rounded-xl" autocomplete="current-password" placeholder="Password" {...attrs} bind:value={$formData.password} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <a href="/forgot-password" class="underline text-sm text-slate-500">Forgot password?</a>
  <Form.Button class="bg-sky-500 w-full rounded-xl mt-4">Log in</Form.Button>
</form>
