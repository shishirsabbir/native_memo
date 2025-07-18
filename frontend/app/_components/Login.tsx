import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <main>
            <section>
                <div>
                    <h3>Welcome back!</h3>
                    <p>&quot;An idea not written down is an idea lost.&quot; — Henry Ford</p>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <Image src="/logo.svg" width={40} height={40} alt="Native Memo Logo" />
                        <Link href="/auth/register">Register &rarr;</Link>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="user_name">User Name</label>
                            <input type="text" name="user_name" id="user_name" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <div>
                                <Link href="/auth/forget">Forget Password?</Link>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                        <div>
                            <p>
                                Don&apos;t have account?&nbsp;<Link href="/auth/register">Create account</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
