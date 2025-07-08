// imports
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';

export default function LandingPage() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <section>
                    <h2>
                        <span>Capture Your Thoughts,</span>
                        <span>Anytime, Anywhere</span>
                    </h2>
                    <Link href="#">Get Started</Link>
                </section>
                <section>
                    <h3>Insights_</h3>
                    <div>
                        <div>
                            <p>Satisfied Rate</p>
                            <p>99%</p>
                        </div>
                        <div>
                            <p>Happy Users</p>
                            <p>160k+</p>
                        </div>
                        <div>
                            <p>Monthly Active Users</p>
                            <p>10k+</p>
                        </div>
                        <div>
                            <p>Response Time</p>
                            <p>50ms</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>A Sneak Peek at Your Future Memos</h3>
                    <p>Writing memos has never been this simple. Take a look at how it works!</p>
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
                </section>
                <section>
                    <h3>What people think about us_</h3>
                    <div>
                        <div>
                            <div>
                                <Image src="/landing_user1.jpg" width={20} height={20} alt="User Photos 1" />
                            </div>
                            <div>
                                <p>Emma Janes</p>
                                <p>Web Designer</p>
                                <p>
                                    As a web designer, I appreciate the clean UI and customizable templates. It&apos;s
                                    rare to find tools that balance power and simplicity this well. 10/10.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src="/landing_user2.jpg" width={20} height={20} alt="User Photos 2" />
                            </div>
                            <div>
                                <p>Emil Sorense</p>
                                <p>CEO, GreenGrowth Apps</p>
                                <p>
                                    As a designer, I appreciate the clean UI and customizable templates. It&apos;s rare
                                    to find tools that balance power and simplicity this well. 10/10!
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src="/landing_user3.jpg" width={20} height={20} alt="User Photos 3" />
                            </div>
                            <div>
                                <p>Anders Nielsen</p>
                                <p>HR Manager (Remote/Hybrid)</p>
                                <p>
                                    Finally, a memo app that syncs instantly between my Copenhagen office and home. The
                                    shared team memos eliminated 90% of our miscommunications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <p>We are here for you today, tomorrow, and always.</p>
                    </div>
                    <div>
                        <p>
                            At N_memo, we&apos;re committed to providing exceptional support whenever you need it. Our
                            friendly, knowledgeable team is available around the clock to answer questions, troubleshoot
                            issues, and ensure you get the most out of our platform. Whether you prefer live chat,
                            email, or our comprehensive help center, we make it easy to find solutions—so you can focus
                            on what matters most. Your success is our success, and we&apos;re always just a click away.
                        </p>
                        <Link href="#">Contact Us</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
