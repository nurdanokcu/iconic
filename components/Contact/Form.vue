<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";
import { useToast } from "~/components/ui/toast/use-toast";
const { toast } = useToast();
import { pagePaths } from "~/config/paths";

const isLoading = ref(false);

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2, "Name is too short"),
    email: z.string().email(),
    message: z.string().min(10, "Message is too short"),
    terms: z
      .boolean()
      .refine((value) => value === true, {
        message: "Please accept the terms and conditions",
      }),
  })
);

const { handleSubmit, handleReset } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log(values);
    isLoading.value = true;
    // Simulate a request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      description: "Your message has been sent successfully!",
      variant: "success",
    });
    handleReset();
  } catch (error) {
    toast({
      description: "An error occurred while sending your message.",
      variant: "error",
    });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <h5 class="font-foglihten text-4xl uppercase font-medium leading-snug">
      Contact Form
    </h5>
    <FormField v-slot="{ componentField }" name="username">
      <FormItem v-auto-animate>
        <FormLabel class="uppercase">Your Name</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Name Lastname"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <FormItem v-auto-animate>
        <FormLabel class="uppercase">Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="info@iconic.com"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="message">
      <FormItem v-auto-animate>
        <FormLabel class="uppercase">Additional Message</FormLabel>
        <FormControl>
          <Textarea
            id="message"
            placeholder="Type your message here"
            v-bind="componentField"
          ></Textarea>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="terms">
      <FormItem v-auto-animate>
        <FormControl>
          <Checkbox
            :checked="componentField.modelValue"
            @update:checked="componentField.onChange"
          />
        </FormControl>
        <FormLabel class="font-montserrat leading-none">
          <span class="text-sm">
            I agree with the
            <NuxtLink
              target="_blank"
              :to="pagePaths.termsAndConditions"
              class="text-primary underline"
            >
              terms and conditions
            </NuxtLink>
          </span>
        </FormLabel>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button
      text="Submit"
      type="submit"
      class="w-fit"
      aria-label="Submit"
      title="Submit"
      :disabled="isLoading"
    >
      <span class="w-8 h-8 flex items-center justify-center">
        <IconsSpinner v-if="isLoading" class="animate-spin" />
        <IconsSend v-else />
      </span>
    </Button>
    <Toaster />
  </form>
</template>
