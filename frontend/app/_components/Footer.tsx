import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <Image src="/logo.svg" width={20} height={20} alt="Native Memo Logo" />
                </div>
                <h1>Crafting Clear Memos, Simply.</h1>
            </section>
            <section>
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
