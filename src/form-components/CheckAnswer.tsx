import React, { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { setOriginalNode } from "typescript";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("");
    const isCorrect = answer === expectedAnswer;

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        setFeedback("");
    }

    function checkAnswer() {
        if (feedback !== ""){
            setFeedback("");
            return;
        }
        setFeedback(isCorrect ? "✔️" : "❌");
    }

    return (
        <div>
            <Form.Group controlId="check-answer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <Button type="button" onClick={checkAnswer}>
                Check Answer
            </Button>
            <p role="status">{feedback}</p>
        </div>
    );
}
