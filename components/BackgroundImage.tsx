import Image from "next/image";

export default function BackgroundImage({ src }) {
  return (
    <div
      style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: -1 }}
    >
      <div
        style={{
          zIndex: -9,
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundImage:
            "linear-gradient(to bottom, rgba(200, 180, 160, 0.22), rgba(150, 120, 110, 0.43))",
        }}
      />
      <Image
        alt=""
        src={src}
        layout="fill"
        objectFit="cover"
        quality={50}
        style={{
          zIndex: -10,
          opacity: 0.25,
        }}
      />
    </div>
  );
}
