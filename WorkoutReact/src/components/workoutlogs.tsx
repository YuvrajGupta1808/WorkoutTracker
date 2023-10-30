import React, { useState } from "react";

type WorkoutLog = {
  exercise: string;
  reps: string;
  sets: string;
  id: number;
};

const WorkoutLogs: React.FC = () => {
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  const addLog = () => {
    if (exercise && reps && sets) {
      const newLog: WorkoutLog = {
        exercise,
        reps,
        sets,
        id: Date.now(),
      };
      setLogs([...logs, newLog]);
      setExercise("");
      setReps("");
      setSets("");
    }
  };

  return (
    <div>
      <h1>Workout Logs</h1>

      <div>
        <input
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Exercise"
        />
        <input
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="Reps"
        />
        <input
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          placeholder="Sets"
        />
        <button onClick={addLog}>Add Log</button>
      </div>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            Exercise: {log.exercise}, Reps: {log.reps}, Sets: {log.sets}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutLogs;
