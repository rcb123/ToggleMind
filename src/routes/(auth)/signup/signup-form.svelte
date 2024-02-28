<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import * as Select from "$lib/components/ui/select";
  import { languages, formSchema, type FormSchema } from "./schema";
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

  $: selectedLanguage = {
    label: languages[$formData.language],
    value: $formData.language,
  };
</script>

<form method="POST" use:enhance>
  <Form.Field {form} name="email">
    <Form.Control let:attrs>
      <Form.Label>Email address</Form.Label>
      <Input
        type="email"
        class="rounded-xl"
        autocomplete="email"
        placeholder="you@example.com"
        {...attrs}
        bind:value={$formData.email}
      />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="password" class="mt-4">
    <Form.Control let:attrs>
      <Form.Label>Password</Form.Label>
      <Input
        type="password"
        class="rounded-xl"
        autocomplete="current-password"
        placeholder="Password"
        {...attrs}
        bind:value={$formData.password}
      />
    </Form.Control>
    <Form.FieldErrors />
    <Form.Description>
      Use 8 or more characters with a mix of letters, numbers, and symbols
    </Form.Description>
  </Form.Field>
  <Form.Field {form} name="language" class="mt-4">
    <Form.Control let:attrs>
      <Form.Label>Language</Form.Label>
      <Select.Root
        selected={selectedLanguage}
        onSelectedChange={(s) => {
          s && ($formData.language = s.value);
        }}
      >
        <Select.Input name={attrs.name} />
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select a language" />
        </Select.Trigger>
        <Select.Content>
          {#each Object.entries(languages) as [value, label]}
            <Select.Item {value} {label} />
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="bg-sky-500 w-full rounded-xl mt-4">Sign up</Form.Button>
</form>
