import headFcaiImage from '../assets/head_fcai.jpeg';
import headTourismImage from '../assets/head_TOURISM.jpeg';
import headPharmacyImage from '../assets/head_MEDICINE.jpeg';

export const INITIAL_COLLEGE_DATA = {
    'computer-science': {
        id: 'computer-science',
        name: 'Faculty of Computer Science & AI',
        nameAr: 'كلية الحاسبات والذكاء الاصطناعي',
        deanSection: {
            name: 'Dean of FCAI',
            nameAr: 'عميد كلية الحاسبات',
            message: 'Welcome to the Faculty of Computers & Artificial Intelligence at Sadat Smart University. Our mission is to cultivate leadership and innovation in the ever-evolving tech sector. We combine theoretical excellence with practical global perspectives to prepare our students for rewarding careers in the world\'s most dynamic industry.',
            messageAr: 'مرحباً بكم في كلية الحاسبات والذكاء الاصطناعي في جامعة السادات الذكية. مهمتنا هي تنمية القيادة والابتكار في قطاع التكنولوجيا المتطور باستمرار. نحن نجمع بين التميز النظري وجهات النظر العالمية العملية لإعداد طلابنا لشغل وظائف مجزية في الصناعة الأكثر ديناميكية في العالم.',
            image: headFcaiImage
        },
        departments: [
            {
                id: 'cs-dept-1',
                name: 'Artificial Intelligence',
                nameAr: 'الذكاء الاصطناعي',
                description: 'Master the art of machine learning and neural networks.',
                descriptionAr: 'أتقن فن التعلم الآلي والشبكات العصبية.',
                icon: 'smart_toy'
            },
            {
                id: 'cs-dept-2',
                name: 'Computer Science',
                nameAr: 'علوم الحاسب',
                description: 'Study algorithms, data structures, and software development.',
                descriptionAr: 'دراسة الخوارزميات وهياكل البيانات وتطوير البرمجيات.',
                icon: 'code'
            },
            {
                id: 'cs-dept-3',
                name: 'Information System',
                nameAr: 'نظم المعلومات',
                description: 'Learn how to use information systems to solve business problems.',
                descriptionAr: 'تعلم استخدام نظم المعلومات لحل مشاكل الأعمال.',
                icon: 'security'
            }
        ],
        programs: [
            {
                id: 'cs-prog-1',
                name: 'B.Sc. in Artificial Intelligence',
                nameAr: 'بكالوريوس في الذكاء الاصطناعي',
                description: 'A comprehensive undergraduate program focusing on AI fundamentals.',
                descriptionAr: 'برنامج جامعي شامل يركز على أساسيات الذكاء الاصطناعي.'
            }
        ],
        staff: [
            {
                id: 'F-1029',
                name: 'Dr. Ahmed Ali',
                nameAr: 'د. أحمد علي',
                role: 'Head of Dept.',
                roleAr: 'رئيس القسم',
                departmentId: 'cs-dept-2',
                email: 'ahmed.ali@ssu.edu',
                status: 'active'
            }
        ]
    },
    'tourism': {
        id: 'tourism',
        name: 'Faculty of Tourism & Hotels',
        nameAr: 'كلية السياحة والفنادق',
        deanSection: {
            name: 'Dean of Tourism',
            nameAr: 'عميد كلية السياحة',
            message: 'Welcome to the Faculty of Tourism. We prepare our students for the global hospitality industry.',
            messageAr: 'مرحباً بكم في كلية السياحة. نحن نعد طلابنا لصناعة الضيافة العالمية.',
            image: headTourismImage
        },
        departments: [
            {
                id: 'tour-dept-1',
                name: 'Tourism Studies',
                nameAr: 'الدراسات السياحية',
                description: 'Explore global tourism trends and management.',
                descriptionAr: 'استكشف اتجاهات وإدارة السياحة العالمية.',
                icon: 'travel_explore'
            }
        ],
        programs: [],
        staff: []
    },
    'pharmacy': {
        id: 'pharmacy',
        name: 'Faculty of Pharmacy',
        nameAr: 'كلية الصيدلة',
        deanSection: {
            name: 'Dean of Pharmacy',
            nameAr: 'عميد كلية الصيدلة',
            message: 'Welcome to the Faculty of Pharmacy. Innovating healthcare through pharmaceutical sciences.',
            messageAr: 'مرحباً بكم في كلية الصيدلة. الابتكار في الرعاية الصحية من خلال العلوم الصيدلانية.',
            image: headPharmacyImage
        },
        departments: [
            {
                id: 'phar-dept-1',
                name: 'Clinical Pharmacy',
                nameAr: 'الصيدلة الإكلينيكية',
                description: 'Focus on patient care and medication management.',
                descriptionAr: 'التركيز على رعاية المرضى وإدارة الأدوية.',
                icon: 'medical_services'
            }
        ],
        programs: [],
        staff: []
    }
};

export const getInitialCollegeData = () => {
    const stored = localStorage.getItem('college_db');
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            // Migrate old mock data image placeholders to the new local assets
            ['computer-science', 'tourism', 'pharmacy'].forEach(col => {
                if (parsed[col]?.deanSection?.image && parsed[col].deanSection.image.includes('lh3.googleusercontent.com')) {
                    parsed[col].deanSection.image = INITIAL_COLLEGE_DATA[col].deanSection.image;
                }
            });
            return parsed;
        } catch (e) {
            console.error('Error parsing college db', e);
            return INITIAL_COLLEGE_DATA;
        }
    }
    return INITIAL_COLLEGE_DATA;
};

export const saveCollegeData = (data) => {
    localStorage.setItem('college_db', JSON.stringify(data));
};
