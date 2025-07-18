'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    console.log(error);

    return (
        <html>
            <body>
                <h2>Error Loading Page</h2>
                <p>Check browser console log for details...</p>
                <button type="button" onClick={() => reset()}>
                    Reset
                </button>
            </body>
        </html>
    );
}
