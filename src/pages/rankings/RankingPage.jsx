import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RankingPageLayout from '../../layouts/RankingPageLayout';
import RankingContent from '../../components/rankings/RankingContent';
import { useGlobalData } from '../../context/GlobalDataContext';

export default function RankingPage() {
    const { slug } = useParams();
    const { rankings } = useGlobalData();
    const [ranking, setRanking] = useState(null);

    useEffect(() => {
        const data = (rankings || []).find(r => r.slug === slug);
        setRanking(data);
    }, [slug, rankings]);

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
