import { Timestamp } from "firebase/firestore";
import './chat.css';
import { Card } from '@mantine/core';

interface MessageProps {
  message: {
    text: string;
    sentBy: string;
    createdAt: Timestamp;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {

  return (
    // <div className={`chat-bubble ${message.sentBy=== user?.uid ? "right" : ""}`}>
      <div className={"message-wrapper"}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
        <p className="user-name">{"User"}</p>
        <p className="user-message">{message.text}</p>
        </Card.Section>
    </Card>
    </div>
  );
};

export default Message;

