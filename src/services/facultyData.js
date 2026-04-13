export const INITIAL_FACULTY_DATA = [
    {
        id: 'fac-1',
        name: 'Dr. Ahmed El-Sayed',
        role: 'doctor',
        specialization: 'Artificial Intelligence & Machine Learning',
        languages: ['Arabic', 'English'],
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        cv: 'https://example.com/cv.pdf',
        portfolio: 'https://example.com/portfolio',
        colleges: ['computer-science']
    },
    {
        id: 'fac-2',
        name: 'Dr. Sarah Hassan',
        role: 'doctor',
        specialization: 'Clinical Pharmacy',
        languages: ['Arabic', 'English', 'French'],
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
        cv: 'https://example.com/cv.pdf',
        portfolio: '',
        colleges: ['pharmacy']
    },
    {
        id: 'fac-3',
        name: 'Eng. Omar Tarek',
        role: 'assistant',
        specialization: 'Software Engineering',
        languages: ['Arabic', 'English'],
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200',
        cv: '',
        portfolio: 'https://github.com/omartarek',
        colleges: ['computer-science']
    },
    {
        id: 'fac-4',
        name: 'Dr. Mona Ali',
        role: 'doctor',
        specialization: 'Tourism Management',
        languages: ['Arabic', 'English', 'German'],
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
        cv: 'https://example.com/cv.pdf',
        portfolio: '',
        colleges: ['tourism']
    },
    {
        id: 'fac-5',
        name: 'Assam Nabil',
        role: 'assistant',
        specialization: 'Pharmacognosy',
        languages: ['Arabic'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
        cv: '',
        portfolio: '',
        colleges: ['pharmacy']
    }
];

export const getInitialFacultyData = () => {
    const stored = localStorage.getItem('stitch_faculty');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing faculty mock data', e);
            return INITIAL_FACULTY_DATA;
        }
    }
    return INITIAL_FACULTY_DATA;
};

export const saveFacultyData = (data) => {
    localStorage.setItem('stitch_faculty', JSON.stringify(data));
};
