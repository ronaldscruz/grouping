import React, { useState, useEffect } from "react";
import "./styles.css";

function SubjectTabs({ onSubjectChange }) {
  const [currentSubject, setCurrentSubject] = useState(1);

  const disciplines = [
    {
      id: 1,
      name: "Historia",
    },
    {
      id: 2,
      name: "Português",
    },
    {
      id: 3,
      name: "Redação",
    },
    {
      id: 4,
      name: "Geografia",
    },
    {
      id: 5,
      name: "Fisica",
    },
    {
      id: 6,
      name: "Matematica",
    },
  ];

  useEffect(() => {
    if (onSubjectChange) onSubjectChange(currentSubject);
  });

  function changeCurrentSubject(newValue) {
    if (newValue === currentSubject) return;
    setCurrentSubject(newValue);
  }

  return (
    <div className="subject-tabs">
      {disciplines.map((d) => {
        return (
          <div key={d.id}>
            <input
              type="radio"
              name="filterBySubject"
              id={`only-${d.name}`}
              value={d.id}
              onChange={() => changeCurrentSubject(d.id)}
              checked={currentSubject === d.id}
            />
            <label htmlFor={`only-${d.name}`} className="subject-tab">
              {d.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectTabs;
