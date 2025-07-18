import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28">
      <div className="absolute w-full h-[300px] -z-[100]">
        <Image
          src="/footer_bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Native Memo Logo"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <section>
        <div className="w-full h-full relative">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Native Memo Logo"
            className="absolute inset-0"
          />
        </div>
        <h1 className="text-white">Crafting Clear Memos, Simply.</h1>
      </section>
      <section className="text-white">
        <div>
          <h4>Quick Links</h4>
          <Link href="#">All Memos</Link>
          <Link href="#">Create Memo</Link>
          <Link href="#">Memo Wall</Link>
          <Link href="#">About Us</Link>
        </div>
        <div>
          <h4>Social</h4>
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">X</Link>
          <Link href="#">YouTube</Link>
        </div>
      </section>
    </footer>
  );
}
