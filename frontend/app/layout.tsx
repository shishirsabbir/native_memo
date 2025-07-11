import React from 'react';
import '@/app/_styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
