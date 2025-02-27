import React, { useEffect, useState } from "react";
import StyledBox from "../utils/StyledBox";
import { useParams } from "react-router-dom";

interface Data {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
}

const Finalize: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:3100/tests/${params.id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
        console.error(
          "There has been a problem with your fetch operation:",
          err
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div className="circular-progress"></div>
      </div>
    );
  }

  if (error) {
    return (
      <StyledBox>
        <div>
          <div>
            <h1
              style={{
                color: "#222222",
                fontWeight: 700,
                marginTop: 20,
                fontFamily: "Montserrat",
              }}
            >
              Finalize
            </h1>
            <p
              style={{
                color: "#222222",
                fontWeight: 600,
                marginTop: 5,
                fontFamily: "Montserrat",
                marginBottom: 20,
              }}
            >
              Spring promotion
            </p>
          </div>
          Error: {error}
        </div>
      </StyledBox>
    );
  }

  return (
    <StyledBox>
      <div>
        <h1
          style={{
            color: "#222222",
            fontWeight: 700,
            marginTop: 20,
            fontFamily: "Montserrat",
          }}
        >
          Finalize
        </h1>
        <p
          style={{
            color: "#222222",
            fontWeight: 600,
            marginTop: 5,
            fontFamily: "Montserrat",
          }}
        >
          Spring promotion
        </p>
      </div>
      <div>
        <p style={{ fontSize: 20, marginTop: 20 }}>
          <span style={{ fontSize: 16, color: "gray" }}>Name:</span>{" "}
          {data?.name}
        </p>
        <p
          style={{
            fontSize: 20,
            marginTop: 20,
            ...(data?.status === "ONLINE"
              ? { color: "#1BDA9D" }
              : data?.status === "STOPPED"
              ? { color: "#FE4848" }
              : data?.status === "PAUSED"
              ? { color: "#FF8346" }
              : { color: "#5C5C5C" }),
          }}
        >
          <span style={{ fontSize: 16, color: "gray" }}>Status:</span>{" "}
          {data?.status}
        </p>
        <p
          style={{
            fontSize: 20,
            marginTop: 20,
          }}
        >
          <span style={{ fontSize: 16, color: "gray" }}>Type:</span>{" "}
          {data?.type}
        </p>
      </div>
    </StyledBox>
  );
};

export default Finalize;
