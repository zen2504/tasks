import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice-answer">
                <Form.Label>Answer</Form.Label>
                <Form.Select
                    value={selectedAnswer ?? ""}
                    onChange={(event) => setSelectedAnswer(event.target.value)}                
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <p role="status">
                {selectedAnswer === expectedAnswer ? "✔️" : "❌"}
            </p>
        </div>
    );
}
