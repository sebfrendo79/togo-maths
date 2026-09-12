import { CountdownCard } from "../components/CountdownCard";
import { DailyExercise } from "../components/DailyExercise";
import { LeaderboardRow } from "../components/LeaderboardRow";
import { LessonCard } from "../components/InfoCards";
import { MascotBanner } from "../components/MascotBanner";
import { SeasonBar } from "../components/SeasonBar";
import { CURRENT_STUDENT_ID, schoolLabel, STUDENTS } from "../data/demo";
import { studentRanking } from "../lib/rankings";
import { useApp } from "../store/useApp";

export function StudentHome() {
  const { daysLeft, lesson, progress, role, setView } = useApp();

  const me = STUDENTS.find((student) => student.id === CURRENT_STUDENT_ID);
  const podium = studentRanking(progress.seasonPoints).slice(0, 3);

  return (
    <>
      <MascotBanner
        title={role === "parent" ? `Le parcours de ${me?.name}` : `Salut ${me?.name} !`}
        subtitle={role === "parent" ? "Suivi en lecture seule" : "Prêt à relever ton défi du jour ?"}
      />

      <CountdownCard eyebrow="Grand Concours National" title="Rendez-vous à Lomé !" days={daysLeft} />

      <SeasonBar />

      <DailyExercise />

      <section className="card">
        <h2 className="card-title">🏆 Podium du moment</h2>
        {podium.map((entry) => (
          <LeaderboardRow
            key={entry.item.id}
            rank={entry.rank}
            avatar={entry.item.avatar}
            name={entry.isMe ? `${entry.item.name} (toi)` : entry.item.name}
            subtitle={schoolLabel(entry.item.schoolId)}
            points={entry.points}
            highlight={entry.isMe}
          />
        ))}
        <button onClick={() => setView("classement")} className="cta cta-secondary">
          Voir le classement complet
        </button>
      </section>

      <LessonCard lesson={lesson} />
    </>
  );
}
