"use client";

import styles from "../page.module.css";

import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput, Box, Checkbox } from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";

import url from "../../../utils/url";

const postSignup = async (values: {
  email: string;
  password: string;
  name: string;
  linkedin: string;
  headline: string;
  gradyear: any;
  course: string;
  is_mentor: boolean;
}) => {
  const formInput = {
    email: values.email,
    password: values.password,
    name: values.name,
    linkedin: values.linkedin,
    headline: values.headline,
    gradyear: values.gradyear.getFullYear(),
    course: values.course,
    is_mentor: values.is_mentor,
  };
  const response = await fetch(url + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formInput),
  });
  if (response.ok) {
    console.log(response);
    window.location.href = "/login"; // Redirect to login after successful signup
  }
};

export default function MentorSignup() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      linkedin: "",
      headline: "",
      gradyear: "",
      course: "",
      is_mentor: false,
    },
    validate: {
      email: (value) =>
        /^e\d{7}@u\.nus\.edu$/.test(value) ? null : "Invalid email", // add e0xxxxxx validation later
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 characters" : null,
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      linkedin: (value) =>
        value.length < 2 ? "Please enter a valid linkedin" : null,
      headline: (value) =>
        value.length < 2 ? "Please enter a valid headline" : null,
      course: (value) =>
        value.length < 2 ? "Please enter a valid course" : null,
    },
  });

  // States for checking error
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit((values) => postSignup(values))}>
        <TextInput
          label="Email"
          placeholder="Email"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          withAsterisk
          {...form.getInputProps("password")}
        />
        <TextInput
          label="Name"
          placeholder="Name"
          withAsterisk
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Linkedin"
          placeholder="Linkedin"
          {...form.getInputProps("linkedin")}
        />
        <TextInput
          label="Headline"
          placeholder="Headline"
          withAsterisk
          {...form.getInputProps("headline")}
        />
        <YearPickerInput
          label="Pick graduation year"
          withAsterisk
          {...form.getInputProps("gradyear")}
        />
        <TextInput
          label="Course"
          placeholder="Course"
          withAsterisk
          {...form.getInputProps("course")}
        />
        <Checkbox label="I am a mentor" {...form.getInputProps("is_mentor")} />
        <Button type="submit">Sign up</Button>
      </form>
    </Box>
  );
}
