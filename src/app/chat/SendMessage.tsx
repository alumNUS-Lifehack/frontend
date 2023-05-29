import React, { useState, FormEvent } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const docRef = doc(db, "groups", "e0000000");
    await addDoc(collection(docRef, "messages"), {
      text: message,
      createdAt: serverTimestamp(),
      sentBy: "e0000000"
    });
    setMessage("");
  };

  return (
    <form onSubmit={sendMessage} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;