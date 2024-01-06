import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-salmon h-screen flex flex-col">
      <div className="flex gap-5 p-5 items-center justify-center h-full flex-grow">
        <div>
          <Image
            src="/logo_icon.svg"
            width={300}
            height={300}
            alt="Binary Sails Logo"
          />
        </div>
        <div
          className="font-bold text-6xl underline"
          style={{
            textDecorationColor: "#ffa500",
          }}
        >
          BinarySails
        </div>
      </div>

      <footer className="bg-black text-white p-10 flex flex-col gap-5 w-full mt-auto h-[25%]">
        <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
          <div className="w-full flex flex-col justify-between gap-24">
            <h2 className="text-2xl uppercase font-bold">
              Navega con nosotros en el
              <br />
              oceano de soluciones{" "}
              <span className="text-[#ffa500]">inteligentes</span>.
            </h2>
          </div>
          <div className="flex flex-col gap-1 w-52">
            <a className="hover:text-orange" href="mailto:ricardo@bianrysails.com">
              ricardo@binarysails.com
            </a>
            <a className="hover:text-orange" href="https://joger.app/">
              Joger App
            </a>
          </div>
        </div>
        <div className="w-full">
          <span className="text-sm">&copy; 2024 BinarySails</span>
        </div>
      </footer>
    </main>
  );
}
