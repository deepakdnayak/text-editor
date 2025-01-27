"use client";

import { useEffect, useState } from "react";

const about = () => {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600">{message || "Loading..."}</h1>
    </div>
  )
}

export default about