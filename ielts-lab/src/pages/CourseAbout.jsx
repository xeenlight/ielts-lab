// src/pages/CourseAbout.jsx
import CourseComponent from '../components/Course/Course';  // ← Импортируем настоящий компонент
import { useTranslation } from 'react-i18next';

export default function CourseAbout() {
  const { t } = useTranslation();

  return <CourseComponent />;
}