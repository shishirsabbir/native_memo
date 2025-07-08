'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgetPassword() {
    const [email, setEmail] = useState<string>('');
    const [confirm, setConfirm] = useState<boolean>(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setConfirm(true);
    }

    return (
        <main>
            <section>
                <div>
                    <div>
                        <Image src="/logo.svg" width={40} height={40} alt="Native Memo Logo" />
                        <Link href="/auth/login">Login &rarr;</Link>
                    </div>
                    {confirm ? (
                        <div>Confirmed</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div>
                                <p>
                                    A password reset link will be sent to your email address if it is associated with an
                                    account.
                                </p>
                            </div>
                            <div>
                                <button type="submit">Send Link</button>
                            </div>
                            <div>
                                <p>
                                    Don&apos;t have account?&nbsp;<Link href="/auth/register">Create account</Link>
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </section>
            <section>
                <div>
                    <h3>Forgot Your Password?</h3>
                    <p>
                        Enter your username or email and we&apos;ll send you instructions to reset your password.
                        Don&apos;t worry, it happens to the best of us!
                    </p>
                </div>
            </section>
        </main>
    );
}
