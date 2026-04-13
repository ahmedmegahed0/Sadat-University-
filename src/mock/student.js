export const MOCK_USER = {
  id: 'st_12345',
  name: 'Ahmed Student',
  email: 'student@university.com',
  password: '123456',
  major: 'Computer Science',
  enrollmentYear: 2024
};

export const loginMock = (email, password) => {
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const { password, ...userWithoutPassword } = MOCK_USER;
    localStorage.setItem('student_auth', JSON.stringify(userWithoutPassword));
    return { success: true, user: userWithoutPassword };
  }
  return { success: false, message: 'Invalid credentials' };
};

export const logoutMock = () => {
  localStorage.removeItem('student_auth');
};

export const getStudentAuth = () => {
  const auth = localStorage.getItem('student_auth');
  return auth ? JSON.parse(auth) : null;
};
