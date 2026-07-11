import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSettings } from "@/lib/content";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar ticketUrl={settings.ticketUrl} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
