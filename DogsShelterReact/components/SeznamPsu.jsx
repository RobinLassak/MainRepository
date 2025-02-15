import React, { useState } from "react";
import "./SeznamPsu.css";

function SeznamPsu({ data, smazaniPsa }) {
  return (
    <div className="list">
      {data.map((jedenPes) => (
        <div className="item" key={jedenPes.id}>
          <span>
            {jedenPes.name} / {jedenPes.breed} / {jedenPes.age}
          </span>
          <button
            className="btn-delete"
            onClick={() => smazaniPsa(jedenPes.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default SeznamPsu;
