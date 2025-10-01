// components/IgWidget.tsx
"use client";

import { useEffect } from "react";

export default function IgWidget() {
  useEffect(() => {
    // Lataa LightWidgetin skripti vain kerran
    if (!document.getElementById("lightwidget-script")) {
      const s = document.createElement("script");
      s.id = "lightwidget-script";
      s.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <iframe
        src="//lightwidget.com/widgets/e1ccf377903a5b96bc48d1556421e78b.html"
        scrolling="no"
        className="lightwidget-widget w-full"
        style={{
          border: 0,
          overflow: "hidden",
          width: "100%",
          height: "600px", // ✅ anna korkeus, esim. 500–700px
        }}
      />
    </div>
  );
}
