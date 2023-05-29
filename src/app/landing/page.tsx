"use client";

import styles from "./page.module.css";

import { useForm } from "@mantine/form";
import { Button, TextInput, Box } from "@mantine/core";
import { HeroText } from "./hero";
import { HeroBullets } from "./features";
import { FooterSocial } from "./footer";
import { HeaderSimple } from "./header";
import { HeroBulletsMentor } from "./featuresMentor";

export default function Page() {
  return (
    <main>
      <header className={styles.header}>
        <HeaderSimple />
        <HeroText />
        <HeroBullets />
        <HeroBulletsMentor />
      </header>
      <footer>
        <FooterSocial />
      </footer>
    </main>
  );
}
