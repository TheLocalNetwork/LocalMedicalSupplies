import Image from "next/image";
import icon from "./icon.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12">
      <Image src={icon} alt={"logo"} width={256} height={256} />
      <h1 className="text-center text-4xl font-thin">Local Medical Supplies</h1>
    </main>
  );
}
