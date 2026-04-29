"use client";

import { useState, useEffect } from "react";

export default function CountdownBar() {
  // 30 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{
      background: "var(--accent)",
      color: "#fff",
      textAlign: "center",
      padding: "8px 16px",
      fontSize: "0.85rem",
      fontWeight: 500,
      borderRadius: "8px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap"
    }}>
      <span>🚀 Fırsat: Ücretsiz deneme sürümüne katılmak için son şansınız!</span>
      <span style={{
        background: "rgba(0,0,0,0.2)",
        padding: "4px 8px",
        borderRadius: "4px",
        fontWeight: 700,
        fontVariantNumeric: "tabular-nums"
      }}>
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}
