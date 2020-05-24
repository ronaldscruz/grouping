import React, { useState, useEffect } from "react";
import "./styles.css";

function SubjectTabs({ onSubjectChange }) {
  const [currentSubject, setCurrentSubject] = useState("history");

  useEffect(() => {
    if (onSubjectChange) onSubjectChange(currentSubject);
  });

  function changeCurrentSubject(newValue) {
    if (newValue === currentSubject) return;
    setCurrentSubject(newValue);
  }

  return (
    <div className="subject-tabs">
      <input
        type="radio"
        name="filterBySubject"
        id="only-history"
        value="history"
        defaultChecked={true}
        onChange={(e) => changeCurrentSubject(e.target.value)}
      />
      <label htmlFor="only-history" className="subject-tab">
        História
      </label>

      <input
        type="radio"
        name="filterBySubject"
        id="only-portuguese"
        value="portuguese"
        onChange={(e) => changeCurrentSubject(e.target.value)}
      />
      <label htmlFor="only-portuguese" className="subject-tab">
        Português
      </label>

      <input
        type="radio"
        name="filterBySubject"
        id="only-essay"
        value="essay"
        onChange={(e) => changeCurrentSubject(e.target.value)}
      />
      <label htmlFor="only-essay" className="subject-tab">
        Redação
      </label>

      <input
        type="radio"
        name="filterBySubject"
        id="only-physics"
        value="physics"
        onChange={(e) => changeCurrentSubject(e.target.value)}
      />
      <label htmlFor="only-physics" className="subject-tab">
        Física
      </label>

      <input
        type="radio"
        name="filterBySubject"
        id="only-geography"
        value="geography"
        onChange={(e) => changeCurrentSubject(e.target.value)}
      />
      <label htmlFor="only-geography" className="subject-tab">
        Geografia
      </label>
    </div>
  );
}

export default SubjectTabs;
