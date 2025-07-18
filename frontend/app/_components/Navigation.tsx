import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  return (
    <nav className="max-w-[1400px] w-full mx-auto flex items-center justify-between bg-primary px-6 py-2 rounded-xl mt-4.5 z-[100]">
      <div>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="Native Memo Logo"
        />
      </div>
      <div className="text-white flex items-center gap-8">
        <Link
          href="/wall"
          className="px-4 py-1.5 rounded-full hover:bg-primary-light transition-colors duration-300 ease-in-out"
        >
          Wall
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 rounded-full hover:bg-primary-light transition-colors duration-300 ease-in-out"
        >
          My Memo
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 rounded-full hover:bg-primary-light transition-colors duration-300 ease-in-out"
        >
          All Memo
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 rounded-full hover:bg-primary-light transition-colors duration-300 ease-in-out"
        >
          Create Memo
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 rounded-full hover:bg-primary-light transition-colors duration-300 ease-in-out"
        >
          About Us
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button type="button">
          <MagnifyingGlassCircleIcon className="size-8 text-white" />
        </button>
        <button type="button">
          <BellIcon className="size-8 text-white" />
        </button>
        <button
          type="button"
          className="relative rounded-full size-8 overflow-hidden"
        >
          <Image
            src="/user_5.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute"
            alt="User Profile Login Image"
          />
        </button>
      </div>
    </nav>
  );
}
