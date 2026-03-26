import React from 'react';

export default function RankingPageLayout({ children }) {
    return (
        <div className="flex-1 flex justify-center py-8 px-4 md:px-0">
            <div className="max-w-[1000px] w-full flex flex-col gap-8">
                {children}
            </div>
        </div>
    );
}
