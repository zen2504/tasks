import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    let message = "";

    if (type === "multiple_choice_question") {
        message = "Multiple Choice";
    } else {
        message = "Short Answer";
    }

    return (
        <div>
            <Button
                onClick={() =>
                    setType(
                        type === "multiple_choice_question" ?
                            "short_answer_question"
                        :   "multiple_choice_question",
                    )
                }
            >
                Change Type
            </Button>
            <p>{message}</p>
        </div>
    );
}
