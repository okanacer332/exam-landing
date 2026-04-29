import Link from "next/link";
import { isAdminRequest } from "@/lib/admin-auth";
import { getSiteContent } from "@/lib/content";
import { AdminConsole } from "./admin-console";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [isAuthenticated, content] = await Promise.all([isAdminRequest(), getSiteContent()]);

  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <Link className="brand-mark" href="/">
          <span className="brand-orbit" />
          <span>
            <strong>{content.brand.name}</strong>
            <small>Landing kontrol paneli</small>
          </span>
        </Link>
        <Link className="button ghost" href="/">
          Landing’e dön
        </Link>
      </header>

      <AdminConsole initialContent={content} isAuthenticated={isAuthenticated} />
    </main>
  );
}
