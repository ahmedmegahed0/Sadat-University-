export const INITIAL_COLLEGE_DATA = {
    'computer-science': {
        id: 'computer-science',
        name: 'Faculty of Computer Science & AI',
        nameAr: 'كلية الحاسبات والذكاء الاصطناعي',
        deanSection: {
            name: 'Prof. Dr. Ibrahem Selim',
            nameAr: 'أ.د. ابراهيم سليم',
            message: 'Welcome to the Faculty of Computers & Artificial Intelligence at Sadat Smart University. Our mission is to cultivate leadership and innovation in the ever-evolving tech sector. We combine theoretical excellence with practical global perspectives to prepare our students for rewarding careers in the world\'s most dynamic industry.',
            messageAr: 'مرحباً بكم في كلية الحاسبات والذكاء الاصطناعي في جامعة السادات الذكية. مهمتنا هي تنمية القيادة والابتكار في قطاع التكنولوجيا المتطور باستمرار. نحن نجمع بين التميز النظري وجهات النظر العالمية العملية لإعداد طلابنا لشغل وظائف مجزية في الصناعة الأكثر ديناميكية في العالم.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqVQG4Ze0I0MM3eHUBsm4pQF0C9s4bVE6OA5IoMZKys08hEX2Lyvqdn4cvOF8sBBv73gLq3OWsTfu-TuvPOfsjVZxB6NuNASOyITbCs5N0Vn6ENV823RU5FKgVT17y_Zta7DxKHZpK8YjJzIhbdciNkkXc0P5kNvllHUTNQbNGx28GWhT6E5Rllbhn047c8cD0WOOJ1wQU9uwFkxbvKN8DVi0GTcpvABAYlgNnX0xBj9gnBQvCboUMu4VaZdro6cLwLtWLDIpR6q8x'
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
            name: 'Prof. Dr. Neha Mahmoud',
            nameAr: 'أ.د. نهى محمود',
            message: 'Welcome to the Faculty of Tourism. We prepare our students for the global hospitality industry.',
            messageAr: 'مرحباً بكم في كلية السياحة. نحن نعد طلابنا لصناعة الضيافة العالمية.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQe89QpQ4nZ-7v_9WQKxH3M9vVXVrC95t-qA_Lw6kHjQpX8_pQKq54mK-H_H9_7VqkCgK5W4lU1sWJm4VHQ6JQqK5wYnF4K7vGQ5HQpT9vQK8vH-H9_7VqK5wYnF4K7vGQ5HQpT9vQK8vH'
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
            name: 'Prof. Dr. Khaled Hassan',
            nameAr: 'أ.د. خالد حسن',
            message: 'Welcome to the Faculty of Pharmacy. Innovating healthcare through pharmaceutical sciences.',
            messageAr: 'مرحباً بكم في كلية الصيدلة. الابتكار في الرعاية الصحية من خلال العلوم الصيدلانية.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_vQ9q_jKQ4wH_XQK_X_9V_Q9q_jKQ4wH_XQK_X_9V_Q9q_jKQ4wH_XQK_X_9V_Q9q_jKQ4wH_XQK_X_9V'
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
            return JSON.parse(stored);
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
