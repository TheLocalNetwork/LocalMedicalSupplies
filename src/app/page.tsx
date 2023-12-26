export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12">
      <img src={'/icon.svg'} alt={'logo'} width={256} height={256} />
      <h1 className="text-center text-4xl font-thin">Local Medical Supplies</h1>
    </main>
  );
}
