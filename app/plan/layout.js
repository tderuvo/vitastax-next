import PlanNav from "./PlanNav";

export const metadata = {
  title: "VitaStax — Partner Portal",
  robots: "noindex, nofollow",
};

export default function PlanLayout({ children }) {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Inter', 'Arial', sans-serif",
      background: "#F9FAFB",
    }}>
      <PlanNav />
      <main style={{
        flex: 1,
        padding: "2.5rem",
        maxWidth: 860,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}>
        {children}
      </main>
    </div>
  );
}
