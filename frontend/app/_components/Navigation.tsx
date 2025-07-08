import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassCircleIcon, BellIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
    return (
        <nav>
            <div>
                <Image src="/logo.svg" width={20} height={20} alt="Native Memo Logo" />
            </div>
            <div>
                <Link href="/wall">Wall</Link>
                <Link href="#">My Memo</Link>
                <Link href="#">All Memo</Link>
                <Link href="#">Create Memo</Link>
                <Link href="#">About Us</Link>
            </div>
            <div>
                <button type="button">
                    <MagnifyingGlassCircleIcon className="size-6 text-white" />
                </button>
                <button type="button">
                    <BellIcon className="size-6 text-white" />
                </button>
                <button type="button">
                    <Image src="/user_5.jpg" width={20} height={20} alt="User Profile Login Image" />
                </button>
            </div>
        </nav>
    );
}
