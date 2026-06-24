import { ImageResponse } from "next/og";

export const alt = "Café Tsiluba — Cafetería literaria en La Cisterna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(120% 120% at 75% 10%, #2f5848 0%, #183329 50%, #0f2019 100%)",
          color: "#FAF6EE",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "rgba(250,246,238,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            📚
          </div>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#D7C5A0",
            }}
          >
            La Cisterna · Santiago
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <span>Café</span>
            <span style={{ fontStyle: "italic", color: "#D7C5A0" }}>Tsiluba</span>
          </div>
          <div style={{ fontSize: 40, color: "rgba(250,246,238,0.85)" }}>
            Café, libros y buenos momentos
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 26, color: "rgba(250,246,238,0.75)" }}>
          <span>☕ Café de especialidad</span>
          <span>📚 Cafetería literaria</span>
          <span>🐾 Pet friendly</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
