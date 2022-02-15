import React from "react";

export default function Meta({ data, current }) {
  return (
    <div className="text-center text-secondary" style={{ marginBottom: 30 }}>
      <h1 className="h2 font-weight-bold">
        {data[current] && data[current].title}
      </h1>
      <p className="font-weight-normal">
        {data[current] && data[current].description}
      </p>
    </div>
  );
}
