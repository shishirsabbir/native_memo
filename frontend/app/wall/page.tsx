import Image from 'next/image';
import Link from 'next/link';

export default function WallPage() {
    return (
        <main>
            <section>
                <h3>Your Memo Hub</h3>
                <div>
                    <div>
                        <p>New Memos</p>
                        <div>
                            <p>18</p>
                            <div>
                                <Image src="/icons/dashboard_card_1.png" width={40} height={40} alt="New Memo Icon" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Total Memos</p>
                        <div>
                            <p>48</p>
                            <div>
                                <Image src="/icons/dashboard_card_2.png" width={40} height={40} alt="New Memo Icon" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>My Memos</p>
                        <div>
                            <p>8</p>
                            <div>
                                <Image src="/icons/dashboard_card_3.png" width={40} height={40} alt="New Memo Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>All Memos</h2>
            </section>
            <section>
                <div>
                    <div>
                        <Link href="#">All Memos</Link>
                        <Link href="#">Newest</Link>
                        <Link href="#">Oldest</Link>
                    </div>
                    <div>
                        <form>
                            <input type="search" name="search" id="search" />
                            <button type="button">Search</button>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <h2>Innovative Memo Tool</h2>
                        <p>
                            A stylish journaling application that allows users to record track their moods. Start
                            creating memos to note down important things, that you don&apos;t want to forget!
                        </p>
                        <div>
                            <span>Shishir Sabbir</span>
                            <span>13 Mar 2025</span>
                        </div>
                    </div>
                    <div>
                        <h2>Innovative Memo Tool</h2>
                        <p>
                            A stylish journaling application that allows users to record track their moods. Start
                            creating memos to note down important things, that you don&apos;t want to forget!
                        </p>
                        <div>
                            <span>Shishir Sabbir</span>
                            <span>13 Mar 2025</span>
                        </div>
                    </div>
                    <div>
                        <h2>Innovative Memo Tool</h2>
                        <p>
                            A stylish journaling application that allows users to record track their moods. Start
                            creating memos to note down important things, that you don&apos;t want to forget!
                        </p>
                        <div>
                            <span>Shishir Sabbir</span>
                            <span>13 Mar 2025</span>
                        </div>
                    </div>
                </div>
                <div>Pagination</div>
            </section>
        </main>
    );
}
