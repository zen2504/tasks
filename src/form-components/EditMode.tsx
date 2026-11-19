import React, { useState } from "react";
import { Form } from "react-bootstrap"
const DEFAULT_NAME = "Your Name"

export function EditMode(): React.JSX.Element {

    const[isEditing, setisEditing] = useState<boolean>(false);
    const[name, setName] = useState<string>(DEFAULT_NAME);
    const[isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditing}
                onChange={(event) => setisEditing(event.target.checked)}
            />

            {isEditing ? (
                <div>
                    <Form.Group controlId="edit-mode-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={DEFAULT_NAME}
                            defaultValue={name === DEFAULT_NAME ? "" : name}
                            onChange={(event) => setName(event.target.value)}
                            />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="edit-mode-student"
                        label="Student"
                        checked={isStudent}
                        onChange={(event) => setIsStudent(event.target.checked)}
                        />
                </div>
            ) : (
                <p>{name} {isStudent ? "is a Student" : "is not a student"}</p>
            )}
            <h3>Edit Mode</h3>
        </div>
    );
}
