// src/components/IgWidget.tsx
"use client";
import { useEffect } from "react";

interface IgWidgetProps {
  widgetId: string;
  /** px-arvo tai esim. "520px". Oletus 600 */
  height?: number | string;
}

export default function IgWidget({ widgetId, height = 600 }: IgWidgetProps) {
  useEffect(() => {
    if (!document.getElementById("lightwidget-script")) {
      const s = document.createElement("script");
      s.id = "lightwidget-script";
      s.src = "//cdn.lightwidget.com/widgets/lightwidget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <iframe
        src={`//lightwidget.com/widgets/${widgetId}.html`}
        scrolling="no"
        className="lightwidget-widget w-full border-0 overflow-hidden"
        style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}
      />
    </div>
  );
}
