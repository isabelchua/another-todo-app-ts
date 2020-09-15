import React, { useState } from "react";

interface NewNoteInputProps {
	addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote } = () => {
	const [note, setNote] = React.useState("");

	const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value);
	};

	const onAddNoteClick = () => {
		AddNote(note);
		setNote("");
	};

	return (
		<div>
			<input
				onChange={updateNote}
				type="text"
				value={note}
				name="note"
				id=""
			/>
			<button onClick={onAddNoteClick}>Add note</button>
		</div>
	);
});

export default NewNoteInput;
