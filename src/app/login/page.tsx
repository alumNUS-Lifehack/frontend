"use client";

import styles from "../page.module.css";

import { useForm } from "@mantine/form";
import { Button, TextInput, Box } from "@mantine/core";

import url from "../../../utils/url";

const postLogin = async (values: { email: string; password: string }) => {
  const formInput = {
    email: values.email,
    password: values.password,
  };
  const response = await fetch(url + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formInput),
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", "Bearer " + data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }
};

export default function login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

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
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
}
