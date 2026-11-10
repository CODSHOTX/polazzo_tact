import { TopUtilityStrip } from '@/components/layout/TopUtilityStrip';
import { Header } from '@/components/layout/Header';
import { AboutSubNav } from '@/components/layout/AboutSubNav';
import { Footer } from '@/components/layout/Footer';

export default function AboutLayout({ children }: LayoutProps<'/about'>) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <TopUtilityStrip />
      <Header />
      <AboutSubNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
