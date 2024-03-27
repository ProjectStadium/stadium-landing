import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center relative overflow-hidden">
      <main className="flex items-center text-center px-8 flex-col gap-2 mt-10">
        <p className="text-[#66757f]/50 font-geist uppercase text-lg md:text-2xl font-medium">
          Re-enter the
        </p>
        <p className="leading-none font-planar-30 font-black text-7xl md:text-9xl text-[#66757f] uppercase">
          Stadium
        </p>
        <p className="font-geist uppercase text-[#213D52] tracking-wider font-bold text-lg mt-2">
          April 2024
        </p>
        <div className="flex mt-5 gap-16 justify-center">
          <Link
            href="https://discord.gg/wQJyc3vaB6"
            target="_blank"
            className="text-[#1F2A32] hover:text-[#FF005C] hover:bg-[#66757f]/5 transition-colors bg-[#66757f]/20 p-2 rounded-xl"
          >
            <SiDiscord size="2em" />
          </Link>
          <Link
            href="https://twitter.com/projectstadium"
            target="_blank"
            className="text-[#1F2A32] hover:text-[#FF005C]  hover:bg-[#66757f]/5 transition-colors bg-[#66757f]/20 p-2 rounded-xl"
          >
            <BsTwitterX size="2em" />
          </Link>
        </div>
      </main>
      {/* <Image
        width={3000}
        height={2000}
        alt="stadium icon"
        src={"/stadium-icon.svg"}
        className="opacity-10 absolute -z-10 "
      /> */}
      <div className="bg-[url('/stadium-icon.svg')] bg-no-repeat bg-center bg-cover -z-10 opacity-10 fixed h-screen w-screen" />
    </div>
  );
}
