import Image from "next/image";

export default function Home() {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src="azuki.mp4" type="video/mp4"/>
    </video>
  );
}
