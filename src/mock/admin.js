export const MOCK_ADMINS = [
    {
        id: 'admin_cs',
        email: 'cs@admin.com',
        password: '123456',
        name: 'CS Admin',
        collegeId: 'computer-science',
        role: 'admin'
    },
    {
        id: 'admin_tour',
        email: 'tourism@admin.com',
        password: '123456',
        name: 'Tourism Admin',
        collegeId: 'tourism',
        role: 'admin'
    },
    {
        id: 'admin_pha',
        email: 'pharmacy@admin.com',
        password: '123456',
        name: 'Pharmacy Admin',
        collegeId: 'pharmacy',
        role: 'admin'
    },
    {
        id: 'super_admin',
        email: 'admin@university.com',
        password: '123456',
        name: 'Super Admin',
        role: 'SUPER_ADMIN',
        collegeId: null
    }
];

export const getStoredAdmins = () => {
    try {
        const stored = localStorage.getItem('stitch_global_data');
        if (stored) {
            const data = JSON.parse(stored);
            if (data && data.admins && data.admins.length > 0) {
                return data.admins;
            }
        }
    } catch (e) {
        console.error('Failed to parse global admins for auth', e);
    }
    return MOCK_ADMINS; // fallback
};

export const loginAdminMock = (email, password) => {
    const admins = getStoredAdmins();
    const admin = admins.find(a => a.email === email && (a.password === password || (!a.password && password === '123456')));
    if (admin) {
        const { password: _pw, ...adminWithoutPassword } = admin;
        // Normalize role for app context
        if (adminWithoutPassword.role === 'Super Admin') adminWithoutPassword.role = 'SUPER_ADMIN';
        if (adminWithoutPassword.role === 'College Admin') adminWithoutPassword.role = 'admin';
        
        localStorage.setItem('admin_auth', JSON.stringify(adminWithoutPassword));
        return { success: true, user: adminWithoutPassword };
    }
    return { success: false, message: 'Invalid admin credentials' };
};

export const logoutAdminMock = () => {
    localStorage.removeItem('admin_auth');
};

export const getAdminAuth = () => {
    const auth = localStorage.getItem('admin_auth');
    return auth ? JSON.parse(auth) : null;
};
