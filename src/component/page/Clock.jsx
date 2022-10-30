import React, { useEffect, useState } from "react";

const option = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
};

export default function Clock() {
  let [time, setTime] = useState(
    new Date().toLocaleTimeString("ko-KR", option)
  );
  useEffect(() => {
    setInterval(
      () => setTime(new Date().toLocaleTimeString("ko-KR", option)),
      1000
    );
  });

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}
