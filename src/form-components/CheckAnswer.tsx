import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="check-answer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                />
            </Form.Group>

            <p role="status">{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}