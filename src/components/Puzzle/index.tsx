import { useState } from "react";
import notSolvedIcon from "@/assets/not-ok.svg";
import solvedIcon from "@/assets/ok.svg";
import Glyph from "@/components/Glyph";

function Puzzle(props: { code: string[] }) {
  const { code } = props;
  const [isSolved, setIsSolved] = useState<boolean>();

  function correct() {
    for (let i = 1; i < 5; i++) {
      const element: HTMLInputElement = document.getElementById(
        `${i}`
      ) as HTMLInputElement;
      if (code[i - 1] !== element.value) {
        return false;
      }
    }
    return true;
  }
  return (
    <p>
      <section className="code">
        <Glyph id="1" />
        <Glyph id="2" />
        <Glyph id="3" />
        <Glyph id="4" />
      </section>
      <section className="answer">
        <button id="5" onClick={() => setIsSolved(correct())}>
          Klar!
        </button>
        {}
        {isSolved === undefined}
        {isSolved === true && <img src={solvedIcon} height={35} />}
        {isSolved === false && <img src={notSolvedIcon} height={35} />}
      </section>
    </p>
  );
}

export default Puzzle;
