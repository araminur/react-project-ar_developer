import React from "react";
import Card from "../Components/Card";
import Cdata from "../Cdata";

export default function SERVICE() {
  return (
    <>
      <div className="container serviceDiv my-5">
        <div className=" pt-5">
          <h1 className="text-center fw-bold service "> Our Services </h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4 py-4">
                {Cdata.map((value, index) => {
                  return (
                    <Card
                      key={index}
                      imgsrc={value.imgsrc}
                      title={value.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
