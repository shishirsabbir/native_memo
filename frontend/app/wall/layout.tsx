import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';

export default function WallLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <Navigation />
            </header>
            {children}
            <Footer />
        </>
    );
}
