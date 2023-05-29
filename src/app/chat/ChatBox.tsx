import "./chat.css";
import { useState, useEffect } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { Timestamp } from "firebase/firestore/lite";

interface MessageData {
  text: string;
  sentBy: string;
  createdAt: string;
  id: any;
}

interface UserProps {
  user: {
    name: string;
    id: string;
  };
}

const ChatBox: React.FC<UserProps> = (user) => {
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "groups", user.user.id);
      console.log(docRef);
      const q = query(
        collection(docRef, "messages"),
        orderBy("createdAt"),
        limit(50)
      );
      const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot) => {
        const messages: MessageData[] = [];
        snapshot.forEach((doc) => {
          messages.push({
            ...doc.data(),
            id: doc.id,
          } as unknown as MessageData);
        });
        setMessages(messages);
        console.log(messages);
        console.log(user.user.id);
      });
      return () => unsubscribe();
    };
    fetchData();
  }, []);

  return (
    <main className="chat-box">
      <div>
        {messages?.map((message) => (
          <Message
            key={message.id}
            message={message}
            class="media media-chat"
          />
        ))}
      </div>
      <SendMessage key={user.user.id} user={user.user} />
    </main>
  );
};

export default ChatBox;
