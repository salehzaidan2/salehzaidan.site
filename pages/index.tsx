import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-center sm:gap-8">
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

      <section className="space-y-2 py-4">
        <h2 className="text-2xl font-medium sm:text-3xl">About Me</h2>
        <div className="space-y-4">
          <p>
            I&apos;m an engineer with great interest in Internet of Things,
            Artificial Intelligence, and Website Development. In my spare time I
            like to learn the latest things related to digital technology and do
            some hobby projects related to it.
          </p>
          <p>
            I&apos;m currently working as an IoT Application Engineer at an IT
            services & consulting company specialized in Industry 4.0 solutions.
          </p>
        </div>
      </section>
    </>
  );
}
