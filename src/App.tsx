import React from "react";
import { NewNoteInput } from "./NewNoteInput";

import "./App.css";

function App() {
	return (
		<>
			<NewNoteInput addNote={alert} />
			<ul>
				<li>some note</li>
			</ul>
		</>
	);
}

export default App;
