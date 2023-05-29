"use client";

import React from 'react';
import ChatBox from "@/app/chat/ChatBox";

const user = {
  name : "Navneeth",
  id : "e00000000",
}

export default function Page() {
  return (
    <main>
    <div>
    <ChatBox user={user} />
  </div>
    </main>
  )
}
