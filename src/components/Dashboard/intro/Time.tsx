"use client";

import { useState, useEffect, useMemo } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = useMemo(() => {
    return currentTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
      timeZone: "America/New_York",
    });
  }, [currentTime]);

  return <>{formattedTime}</>;
};

export default Time;
