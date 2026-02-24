import HeroPage from './hero/page';
import AboutPage from './about/page';
import SkillsPage from './skills/page';
import ProjectPage from './projects/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <main>
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </main>
  );
}
