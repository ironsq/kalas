import { KeyboardEvent } from "react";

function Glyph(props: { id: string }) {
  function focusNext(e: KeyboardEvent<HTMLInputElement>) {
    console.log(e.key);
    if (!e.key.match(/^[\w\W]$/gm)) {
      return;
    }

    const id = +props.id;
    const nextId = id + 1;
    const nextElement = document.getElementById(`${nextId}`);
    if (nextElement) {
      nextElement.focus();
    }
  }

  return (
    <input
      {...props}
      type="text"
      maxLength={1}
      minLength={1}
      onKeyUp={(e) => focusNext(e)}
    />
  );
}

export default Glyph;
