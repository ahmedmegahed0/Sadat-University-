/**
 * Mock doctor accounts.
 * Each doctor's `id` must match a record in facultyData (FacultyContext)
 * so their dashboard can find and edit their own profile.
 */
export const MOCK_DOCTORS = [
  {
    id: 'fac-1',
    name: 'Dr. Ahmed El-Sayed',
    email: 'doctor@test.com',
    password: '123456',
    role: 'doctor'
  },
  {
    id: 'fac-2',
    name: 'Dr. Sarah Hassan',
    email: 'sarah@test.com',
    password: '123456',
    role: 'doctor'
  },
  {
    id: 'fac-4',
    name: 'Dr. Mona Ali',
    email: 'mona@test.com',
    password: '123456',
    role: 'doctor'
  }
];

export const loginDoctorMock = (email, password) => {
  const match = MOCK_DOCTORS.find(
    d => d.email === email && d.password === password
  );
  if (match) {
    const { password: _, ...userWithoutPassword } = match;
    localStorage.setItem('doctor_auth', JSON.stringify(userWithoutPassword));
    return { success: true, user: userWithoutPassword };
  }
  return { success: false, message: 'Invalid doctor credentials' };
};

export const logoutDoctorMock = () => {
  localStorage.removeItem('doctor_auth');
};

export const getDoctorAuth = () => {
  const auth = localStorage.getItem('doctor_auth');
  return auth ? JSON.parse(auth) : null;
};
