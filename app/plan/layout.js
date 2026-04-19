import PlanNav from "./PlanNav";

export const metadata = {
  title: "VitaStax — Partner Portal",
  robots: "noindex, nofollow",
};

export default function PlanLayout({ children }) {
  return (
    <>
      <style>{`
        .plan-shell {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
          font-family: 'Inter', 'Arial', sans-serif;
          background: #F9FAFB;
        }
        .plan-main {
          flex: 1;
          padding: 2.5rem;
          max-width: 860px;
          box-sizing: border-box;
          overflow-x: hidden;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .plan-shell {
            flex-direction: column;
          }
          .plan-main {
            padding: 1.25rem 1rem;
            max-width: 100%;
          }
        }
      `}</style>
      <div className="plan-shell">
        <PlanNav />
        <main className="plan-main">
          {children}
        </main>
      </div>
    </>
  );
}
