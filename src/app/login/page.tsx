"use client";

import styles from "../page.module.css";

import { useForm } from "@mantine/form";
import {
  Button,
  Text,
  TextInput,
  Box,
  Container,
  Title,
  Paper,
  Space,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

import url from "../../../utils/url";

const postLogin = async (
  values: { email: string; password: string },
  router: any
) => {
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
    if (data.user.is_mentor) {
      router.push("/chat");
    } else {
      if (data.user.assigned_mentor) {
        router.push("/chat");
      } else {
        router.push("/home");
      }
    }
  }
};

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontWeight: 900,
        })}
      >
        Login
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet? <Link href="/signup">Signup.</Link>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => postLogin(values, router))}>
          <TextInput
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <Space h="sm" />
          <TextInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />
          <Space h="md" />
          <Button type="submit">Login</Button>
        </form>
      </Paper>
    </Container>
  );
}
