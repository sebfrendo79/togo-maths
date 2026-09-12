import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";
import { SchoolRanking } from "./screens/SchoolRanking";
import { StudentHome } from "./screens/StudentHome";
import { StudentRanking } from "./screens/StudentRanking";
import { TeacherChallenges } from "./screens/TeacherChallenges";
import { TeacherContest } from "./screens/TeacherContest";
import { TeacherDashboard } from "./screens/TeacherDashboard";
import { useApp } from "./store/useApp";

function CurrentView() {
  const { view } = useApp();

  switch (view) {
    case "accueil":
      return <StudentHome />;
    case "classement":
      return <StudentRanking />;
    case "ecoles":
      return <SchoolRanking />;
    case "dashboard":
      return <TeacherDashboard />;
    case "defis":
      return <TeacherChallenges />;
    case "concours":
      return <TeacherContest />;
  }
}

export default function App() {
  const { view } = useApp();

  return (
    // Format téléphone : l'app est pensée mobile, centrée sur grand écran.
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-sand shadow-[0_0_40px_rgba(0,0,0,0.15)]">
      <div className="kente shrink-0" aria-hidden="true" />
      <AppHeader />
      <main key={view} className="flex-1 animate-fade-up overflow-y-auto px-4 pb-6 pt-[18px]">
        <CurrentView />
      </main>
      <div className="sticky bottom-0">
        <BottomNav />
      </div>
    </div>
  );
}
