import { TopUtilityStrip } from '@/components/layout/TopUtilityStrip';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ProjectsLayout({ children }: LayoutProps<'/projects'>) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <TopUtilityStrip />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
