import Image from 'next/image';
import icon from './icon.svg';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-12 min-h-screen">
      <Image src={icon} alt={'logo'} width={256} height={256} />
      <h1 className="text-4xl font-thin text-center">
        Local Medical Supplies
      </h1>
    </main>
  );
}
