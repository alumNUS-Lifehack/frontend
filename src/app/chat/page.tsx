"use client";

import React from "react";
import ChatBox from "@/app/chat/ChatBox";

const user = {
  name : "Navneeth",
  id : "e00000000",
}

export default function Page() {
  if (typeof window !== "undefined") {
    const saved_user = JSON.parse(
      localStorage.getItem("user") || '{name:"default", id:"e0000000"}'
    );
    user.name = saved_user.name;
    user.id = saved_user.uid;
  }

  return (
    <main>
      <div>
        <ChatBox user={user} />
      </div>
    </main>
  );
}
