import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";

import "./App.css";
import { addNote } from "./actions";

function App() {
	const notes = useSelector<NotesState, NotesState["notes"]>(
		state => state.notes
	);

	const dispatch = useDispatch();

	const onAddNote = (note: string) => {
		dispatch(addNote(note));
	};

	return (
		<>
			<NewNoteInput addNote={onAddNote} />
			<ul>
				{notes.map(note => {
					return <li key={note}>{note}</li>;
				})}
			</ul>
		</>
	);
}

export default App;
