import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-center sm:gap-8">
      <Image
        src="/avatar.jpeg"
        alt="Saleh Zaidan"
        width={128}
        height={128}
        className="rounded-full"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-medium sm:text-4xl">
          Hi there, I&apos;m Zaidan
        </h1>
        <p className="text-lg sm:text-xl">IoT, AI, and Web Dev enthusiast</p>
      </div>
    </section>
  );
}
