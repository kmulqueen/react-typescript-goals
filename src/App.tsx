import { useState } from "react";
import goalsImg from "./assets/react.svg";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        title: goal,
        id: Math.random(),
        description: summary,
      };
      return [...prevState, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "React logo." }}>
        <h1>React + TypeScript Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
