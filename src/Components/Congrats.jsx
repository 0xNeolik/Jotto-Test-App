import React from "react";

export default function Congrats({ success }) {
  return success ? (
    <div data-test="congrats-component">
      <div data-test="congrats-message">Congrats</div>
    </div>
  ) : (
    <div data-test="congrats-component" />
  );
}

const berlinTime = getBerlinTime(seconds, minutes, hours);
const digitalTime = `${hours} : ${minutes} : ${seconds}`;

<div className="row">
  <div data-test="berlin-time-converter">
    <span>{digitalTime}</span>is{" "}
    <span data-test="berlin-time-value">{berlinTime}</span>
  </div>
</div>;
