const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'src/pages/universities/UniversitiesPage.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" },
      { from: "import { getUniversitiesByCategory } from '../services/mockData';", to: "import { getUniversitiesByCategory } from '../../services/mockData';" },
      { from: "import PublicLayout from '../layouts/PublicLayout';", to: "import MainLayout from '../../layouts/MainLayout';" },
      { from: "<PublicLayout>", to: "<MainLayout>" },
      { from: "</PublicLayout>", to: "</MainLayout>" }
    ]
  },
  {
    file: 'src/pages/rankings/RankingPage.jsx',
    replaces: [
      { from: "import RankingPageLayout from '../layouts/RankingPageLayout';", to: "import RankingPageLayout from '../../layouts/RankingPageLayout';" },
      { from: "import RankingContent from '../components/RankingContent';", to: "import RankingContent from '../../components/rankings/RankingContent';" },
      { from: "import { getRankingBySlug } from '../services/mockData';", to: "import { getRankingBySlug } from '../../services/mockData';" }
    ]
  },
  {
    file: 'src/pages/home/Home.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" }
    ]
  },
  {
    file: 'src/pages/dashboard/SuperAdminDashboard.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" },
      { from: "import { getUniversities, addUniversity, deleteUniversity, getRankings, addRanking, deleteRanking } from '../services/mockData';", to: "import { getUniversities, addUniversity, deleteUniversity, getRankings, addRanking, deleteRanking } from '../../services/mockData';" }
    ]
  },
  {
    file: 'src/pages/dashboard/CollegeAdminDashboard.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" }
    ]
  },
  {
    file: 'src/pages/auth/Login.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" },
      { from: "import loginBanner from '../assets/login-banner.png';", to: "import loginBanner from '../../assets/login-banner.png';" }
    ]
  },
  {
    file: 'src/pages/auth/Register.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" },
      { from: "import registerBanner from '../assets/register-banner.png';", to: "import registerBanner from '../../assets/register-banner.png';" },
      { from: "import loginBanner from '../assets/login-banner.png';", to: "import loginBanner from '../../assets/login-banner.png';" }
    ]
  },
  {
    file: 'src/layouts/RankingPageLayout.jsx',
    replaces: [
      { from: "import PublicLayout from './PublicLayout';", to: "import MainLayout from './MainLayout';" },
      { from: "<PublicLayout>", to: "<MainLayout>" },
      { from: "</PublicLayout>", to: "</MainLayout>" }
    ]
  },
  {
    file: 'src/components/rankings/RankingDropdown.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" }
    ]
  },
  {
    file: 'src/components/rankings/RankingContent.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" }
    ]
  },
  {
    file: 'src/components/navbar/NavDropdown.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" }
    ]
  },
  {
    file: 'src/components/navbar/Navbar.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" },
      { from: "import RankingDropdown from './RankingDropdown';", to: "import RankingDropdown from '../rankings/RankingDropdown';" }
    ]
  },
  {
    file: 'src/components/footer/Footer.jsx',
    replaces: [
      { from: "import { useThemeContext } from '../context/ThemeContext';", to: "import { useThemeContext } from '../../context/ThemeContext';" }
    ]
  }
];

replacements.forEach(({ file, replaces }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replaces.forEach(({ from, to }) => {
      content = content.split(from).join(to); // Replaces all instances
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
