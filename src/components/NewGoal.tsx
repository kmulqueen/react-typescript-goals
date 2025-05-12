import type { FormEvent } from "react";
import { useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSumbit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //! Alternate way to get inputs of form elements
    // const data = new FormData(e.currentTarget);

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSumbit}>
      <p>
        <label htmlFor="goal">My goal</label>
        <input type="text" name="goal" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" name="summary" id="summary" ref={summary} />
      </p>
      <button type="submit">Add Goal</button>
    </form>
  );
}
