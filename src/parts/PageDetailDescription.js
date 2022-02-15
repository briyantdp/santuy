import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main className="text-secondary">
      <h1 className="h1 mb-2 font-weight-bold">About the Place</h1>
      {ReactHtmlParser(data.description)}
      <h1 className="h1 mb-4 font-weight-bold">Facilities</h1>
      <div className="row">
        {data.features.map((item, index) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-6 text-center"
              key={`features-${index}`}
            >
              <img src={item.imageUrl} alt={item.name} width="40" />{" "}
              <p className="mt-2">
                {item.qty} {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
