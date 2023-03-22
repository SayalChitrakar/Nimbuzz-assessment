import React from "react";
import axios from "axios";
import "./../css/completionRate.css";

const CompletionRate = ({ forceRender }) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "http://localhost:3001/api/todo/task/completion-rate"
      );
      setData(data.data.data);
    };
    getData();
  }, [forceRender.forceRender]);
  return (
    <div
      className="container mainContainer"
      style={{
        height: "100%",
        width: "100%",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
      <div className="todoContainer" style={{ height: "100%" }}>
        <h4
          style={{
            color: "orange",
            borderBottom: "1px solid lightgray",
            paddingBottom: "20px",
          }}
        >
          Daily Completion Rate
        </h4>
        <div style={{ padding: "10px 0px 0px 0px" }} className="row">
          <div className="col-5">
            <p
              style={{
                textAlign: "center",
                color: "gray",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Day
            </p>
          </div>
          <div className="col-7">
            <p
              style={{
                textAlign: "center",
                color: "gray",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              CR/day
            </p>
          </div>
        </div>
        <div className="completionRateList">
          <div style={{ width: "100%", margin: "0px" }} className="row">
            {data.map((item) => {
              return (
                <>
                  <div style={{ padding: "0px" }} className="col-6">
                    <p
                      style={{
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {item._id}
                    </p>
                  </div>
                  <div style={{ padding: "0px" }} className="col-6">
                    <p style={{ textAlign: "right" }}>
                      {Math.round(item.completionRate)} %
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionRate;
