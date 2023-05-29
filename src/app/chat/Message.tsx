import { Timestamp } from "firebase/firestore";
import './chat.css';
import { Card , Text, Paper, Group, Avatar, } from '@mantine/core';

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
      {/* <Card shadow="MantineShadow" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Text size="sm" color="dimmed">
            {message.sentBy}
          </Text>
          <Text>
            {message.text}
          </Text>
      </Card.Section>
    </Card> */}
    <Paper withBorder radius="lg">
      <Group>
        <Avatar src={'./man.png'} radius="xl" />
        <div>
          <Text fz="sm"c="dimmed">Naren</Text>
          <Text fz="sm">
          {message.text}
          </Text>
        </div>
      </Group>
    </Paper>
    </div>
  );
};

export default Message;

