import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
    return (
        <main>
            <section>
                <div>
                    <h3>Create account</h3>
                    <p>
                        &quot;Great things are not done by impulse, but by a series of small things brought
                        together.&quot; — Vincent Van Gogh
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <Image src="/logo.svg" width={40} height={40} alt="Native Memo Logo" />
                        <Link href="/auth/login">Login &rarr;</Link>
                    </div>
                    <form>
                        <div>
                            <div>
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" name="first_name" id="first_name" />
                            </div>
                            <div>
                                <label htmlFor="last_name">First Name</label>
                                <input type="text" name="last_name" id="last_name" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="user_name">Username</label>
                            <input type="text" name="user_name" id="user_name" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input type="password" name="confirm_password" id="confirm_password" />
                        </div>
                        <div>
                            <input type="checkbox" name="agree" id="agree" />
                            <label htmlFor="agree">I agree to the Terms of Service and Privacy Policy</label>
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                        <div>
                            <p>
                                Already have an account&nbsp;<Link href="/auth/login">Login Now</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
