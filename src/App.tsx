import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UM COS420 with React Hooks and TypeScript
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Name: Zachary Bailey &quot;Hello
                    World&quot;
                </p>
            </div>
            <div className="Task-1">
                <h1>Task 1</h1>
                <img src="images/Task1.png" alt="Task 1" />
                To-Do for Task 1:
                <ol>
                    <li>Add a Heading</li>
                    <li>Add and Image with Alt text</li>
                    <li>
                        Change the background color of the header area (edit the
                        CSS class in App.css that the &quot;header&quot; on your
                        page already uses, review the CSS rules section of the
                        textbook if you need help)
                    </li>
                    <li>
                        Add a bootstrap button with the text &quot;Log Hello
                        World&quot;
                    </li>
                    <li>
                        Make the button log &quot;Hello, World!&quot; when
                        clicked
                    </li>
                    <li>
                        Put a red-filled rectangle in each column using a div
                        tag with width, height, and backgroundColor styles.
                        (Note that the test will not pass if you use a CSS
                        class, you’ll need to directly style the element as in
                        the example code above.){" "}
                    </li>
                </ol>
            </div>
        </>
    );
}

export default App;
