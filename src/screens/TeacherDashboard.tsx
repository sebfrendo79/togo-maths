import { FactCard } from "../components/InfoCards";
import {
  ACTIVITY_WINDOW_DAYS,
  CLASS_STUDENTS,
  INACTIVITY_ALERT_DAYS,
  schoolLabel,
  TEACHER_CLASS,
} from "../data/demo";
import { useApp } from "../store/useApp";

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-2xl border border-sand-deep bg-paper px-2.5 py-3 text-center">
      <p className="m-0 font-display text-[1.3rem] font-extrabold text-clay-dark">{value}</p>
      <p className="m-0 text-[0.7rem] font-bold text-muted">{label}</p>
    </div>
  );
}

export function TeacherDashboard() {
  const { fact } = useApp();

  const total = CLASS_STUDENTS.length;
  const active = CLASS_STUDENTS.filter((student) => student.daysSinceActive <= ACTIVITY_WINDOW_DAYS).length;
  const toFollowUp = CLASS_STUDENTS.filter((student) => student.daysSinceActive > INACTIVITY_ALERT_DAYS);

  return (
    <>
      <h2 className="m-0 font-display text-[1.3rem] font-extrabold">
        Ma classe — {TEACHER_CLASS.label}, {schoolLabel(TEACHER_CLASS.schoolId)}
      </h2>

      <div className="mb-4 mt-3 flex gap-2.5">
        <StatBox value={String(total)} label="élèves" />
        <StatBox value={`${Math.round((active / total) * 100)}%`} label={`actifs ${ACTIVITY_WINDOW_DAYS}j`} />
        <StatBox value={String(toFollowUp.length)} label="à relancer" />
      </div>

      <section className="card">
        <h2 className="card-title">Suivi élève par élève</h2>
        {CLASS_STUDENTS.map((student) => {
          const alert = student.daysSinceActive > INACTIVITY_ALERT_DAYS;
          return (
            <div key={student.id} className="flex items-center gap-2.5 border-b border-sand-deep px-1 py-2.5 last:border-b-0">
              <span
                className={`h-[9px] w-[9px] shrink-0 rounded-pill ${alert ? "bg-wrong" : "bg-green"}`}
                title={alert ? "À relancer" : "Actif"}
              />
              <div className="min-w-0 flex-1">
                <p className="m-0 truncate text-[0.88rem] font-bold">{student.name}</p>
                <p className="m-0 text-[0.72rem] text-muted">
                  🔥 {student.streak} j ·{" "}
                  {alert
                    ? `inactif depuis ${student.daysSinceActive} jours`
                    : student.daysSinceActive === 0
                      ? "actif aujourd'hui"
                      : `vu il y a ${student.daysSinceActive} j`}
                </p>
              </div>
              <div className="track h-2 w-[70px] shrink-0" title={`Progression : ${student.progress} %`}>
                <div className="h-full rounded-pill bg-green" style={{ width: `${student.progress}%` }} />
              </div>
            </div>
          );
        })}
      </section>

      <FactCard fact={fact} />
    </>
  );
}
