import React from "react";
import { useParams } from "react-router-dom";
import trainersMock from "./TrainerMock";
function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainersMock.find((trainer) => trainer.trainerId === id);
  if (!trainer) {
    return <h3>Trainer not found</h3>;
  }
  return (
    <div>
      <h3>Trainer Details</h3>
      <h4>
        {trainer.name} ({trainer.technology})
      </h4>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default TrainerDetails;

