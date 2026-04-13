"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DemoPage() {
  const [loading, setLoading] = useState(false);
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  const handleDemo = async () => {
    setLoading(true);
    await fetch("/api/demo/blocking", {
      method: "POST",
    });
    setLoading(false);
  };

  const handleBackground = async () => {
    setBackgroundLoading(true);
    await fetch("/api/demo/background", {
      method: "POST",
    });
    setBackgroundLoading(false);
  };
  return (
    <div>
      <Button onClick={handleDemo} disabled={loading}>
        {loading ? "Loading..." : "Demo"}
      </Button>
      <Button onClick={handleBackground} disabled={backgroundLoading}>
        {backgroundLoading ? "Loading..." : "Background"}
      </Button>
    </div>
  );
}
