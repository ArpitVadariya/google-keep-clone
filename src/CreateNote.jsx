import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });

    console.log(note);
  };

  const addEvent = () => {
    props.passnote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const btonormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={btonormal}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a Note here"
            onClick={expandIt}
          ></textarea>

          {expand ? (
            <Button onClick={addEvent}>
              <h1 className="Mui-Button-root plus_sign">+</h1>
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
