import Login from '@/app/_components/Login';
import { notFound } from 'next/navigation';
import Register from '@/app/_components/Register';
import ForgetPassword from '@/app/_components/ForgetPassword';

export default async function AuthPage({ params }: { params: Promise<{ authType: 'login' | 'register' | 'forget' }> }) {
    const { authType } = await params;

    if (!['login', 'register', 'forget'].includes(authType)) {
        notFound();
    }

    return (
        <>
            {authType === 'login' && <Login />}
            {authType === 'register' && <Register />}
            {authType === 'forget' && <ForgetPassword />}
        </>
    );
}
