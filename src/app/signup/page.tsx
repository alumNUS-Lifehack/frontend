"use client";

import styles from "../page.module.css";

import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput, Box, Checkbox } from "@mantine/core";
import { YearPicker } from "@mantine/dates";

import url from "../../../utils/url";

const postLogin = async (values: {
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
  console.log(response);
};

export default function mentorSignup() {
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
    },
  });

  // States for checking error
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit((values) => postLogin(values))}>
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <TextInput
          label="Name"
          placeholder="Name"
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
          {...form.getInputProps("headline")}
        />
        <YearPicker {...form.getInputProps("gradyear")} />
        <TextInput
          label="Course"
          placeholder="Course"
          {...form.getInputProps("course")}
        />
        <Checkbox label="I am a mentor" {...form.getInputProps("is_mentor")} />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
