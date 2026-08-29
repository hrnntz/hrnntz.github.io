import { ImageResponse } from "next/og";

export const alt = "Hernán | Estudiante de Ingeniería de Sistemas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF9F6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          borderTop: "16px solid #00509E",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#1A1A1A",
              fontFamily: "sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Hernán.
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#1A1A1A",
              opacity: 0.8,
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ color: "#00509E", fontWeight: "bold" }}>{">_"}</span>
            <span>Estudiante de Ingeniería de Sistemas</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
