import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RankingPageLayout from '../../layouts/RankingPageLayout';
import RankingContent from '../../components/rankings/RankingContent';
import { getRankingBySlug } from '../../services/mockData';

export default function RankingPage() {
    const { slug } = useParams();
    const [ranking, setRanking] = useState(null);

    useEffect(() => {
        const data = getRankingBySlug(slug);
        setRanking(data);
    }, [slug]);

    if (!ranking) {
        return (
            <RankingPageLayout>
                <div className="flex justify-center items-center h-[50vh]">
                    <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">Loading or Ranking not found...</p>
                </div>
            </RankingPageLayout>
        );
    }

    return (
        <RankingPageLayout>
            <RankingContent {...ranking} />
        </RankingPageLayout>
    );
}
