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
