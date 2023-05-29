import { Header, Image, Group } from "@mantine/core";
import Link from "next/link";

export default function UnauthHeader() {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Group position="apart" align="center" grow>
        <Image src="./logo.svg" alt="Logo" height={48} width={48} />
        <Group align="center" spacing="xl" style={{ marginLeft: "auto" }}>
          <Link href="/">Home</Link>
          <Link href="/chat">Chat</Link>
          <Link href="/findMentor">Select mentor</Link>
        </Group>
      </Group>
    </Header>
  );
}
