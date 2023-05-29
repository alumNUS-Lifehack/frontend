import React, { useState, FormEvent } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Button } from '@mantine/core';
import styles from "../page.module.css";


interface UserProps {
  user: {
    name: string;
    id: string;
  };
}

const SendMessage: React.FC<UserProps> = (user) => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const docRef = doc(db, "groups", user.user.id);
    await addDoc(collection(docRef, "messages"), {
      text: message,
      createdAt: serverTimestamp(),
      sentBy: user.user.name,
    });
    setMessage("");
  };

  const theme = useMantineTheme();

  return (
    // <form style={{length: 200px, }}onSubmit={sendMessage} className="send-message">
    //   <label htmlFor="messageInput" hidden>
    //     Enter Message
    //   </label>
    //   <input
    //     id="messageInput"
    //     name="messageInput"
    //     type="text"
    //     className="form-input__input"
    //     placeholder="type message..."
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //   />
    //   <button type="submit">Send</button>
    // </form>
    <TextInput
    radius="xl"
    size="md"
    rightSection={
      <Button className = "submit" onClick={sendMessage}>Send</Button>
    }
    placeholder="Type your message here..."
    rightSectionWidth={42}
    onChange={(e) => setMessage(e.target.value)}

  />
  );
};

export default SendMessage;
