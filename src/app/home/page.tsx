"use client";


import url from "../../../utils/url";
import useAsync from "../hooks/useAsync";
import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon, Button } from '@mantine/core';
import { TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useState } from "react";
import { useRouter } from "next/navigation";

interface IMentor {
  course: string,
  gradyear: number;
  headline: string;
  is_mentor: boolean;
  name: string;
  profile_pic: string;
  school: string;
  uid: number;
}

const getAllMentors = async () => {
  const authorization = localStorage.getItem("token") || "";

  const response = await fetch(url + "/users/all_mentors", {
    method: "GET",
    headers: {
      "Authorization": authorization,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log("response is", response);
  }

  const data = await response.json();
  return data;
}

const assignMentor = async (mentorId: number, router: any) => {
  const user = localStorage.getItem("user");

  let uid = user === null 
  ? ""
  : user !== "string"
  ? user.uid
  : "";

  const response = await fetch(url + "/users/assign_mentor" + `/${uid}/${mentorId}`, {
    method: "POST", 
  })

  const data = await response.json();
  console.log("data is", data);

  router.push("/chat");

  return data;
}

const CardComponent = (mentor: IMentor, router: any) => {
  return (
    <Card withBorder padding="lg" radius="md" >
      <Group position="apart">
        <Text fz="lg" fw={500}>
          {mentor.name}
        </Text>
        <Button size="xs" onClick={() => assignMentor(mentor.uid, router)}>
          Join Group
        </Button>
      </Group>
      <Text fz='sm' fw={400} mt={"sm"} c="blue">
        {mentor.course} | Batch of {mentor.gradyear}
      </Text>
      <Text c="dimmed" fz="sm" mt="md">
        Availability:{' '}
        <Text
          span
          fw={500}
          sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
        >
          2/6 slots taken
        </Text>
      </Text>
      <Progress value={(2 / 6) * 100} mt={5} />

      <Text fz="sm" c="dimmed" mt={"lg"}>
        {mentor.headline}
      </Text>
    </Card>
  );
}

const SearchBarComponent = ({onPressSearch}: {
  onPressSearch: (searchQuery: string) => void;
}) => {
  const theme = useMantineTheme();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onPressSearch(searchQuery);
    console.log("search clicked");
  };


  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={handleSearchClick}>
          {theme.dir === 'ltr' ? (
            <IconArrowRight size="1.1rem" stroke={1.5} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Search for mentors"
      rightSectionWidth={42}
    />
  );
}



export default function HomePage() {
  const {status, value: mentors} = useAsync(() => getAllMentors());
  const [filterText, setFilterText] = useState<string>("");
  const router = useRouter();

  console.log("filterText", filterText);

  console.log(mentors);
  return (
    <div style={{padding: 40}}>
      <Group mb={28} position="apart"> 
        <h1>Find Your Mentor</h1>
        <SearchBarComponent onPressSearch={setFilterText} />
      </Group>
      {
        status == "pending"
        ? <div>Loading...</div>
        : (
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-between"}}>
          {
            mentors === null
            ? <></> 
            : mentors.filter((mentor: IMentor) => mentor.course.toLowerCase().includes(filterText.toLowerCase())
              || mentor.name.toLowerCase().includes(filterText.toLowerCase())
              || mentor.gradyear.toString().toLowerCase().includes(filterText.toLowerCase())
            ) .map((mentor: IMentor) => (
            <div key={mentor.uid} style={{width: '32%'}}>
              {CardComponent(mentor, router)}
            </div>))
          }
        </div>
        )
      }
    </div>      
  )
}