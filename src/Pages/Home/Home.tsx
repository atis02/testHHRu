import { useEffect, useState } from "react";
import StyledBox from "../../Components/utils/StyledBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Data {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
}
interface SitesData {
  id: number;
  url: string;
}
const Home = () => {
  const [data, setData] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sitesData, setSitesData] = useState<SitesData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rotate, setRotate] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Data | "site";
    direction: "ascending" | "descending";
  } | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:3100/tests");
        const responseSites = await axios.get("http://localhost:3100/sites");
        setSitesData(responseSites.data);
        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    let results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig !== null) {
      results = sortData(results, sortConfig);
    }
    setFilteredData(results);
  }, [searchTerm, data, sortConfig]);

  const sortData = (
    dataToSort: Data[],
    sortConfig: {
      key: keyof Data | "site";
      direction: "ascending" | "descending";
    }
  ) => {
    return [...dataToSort].sort((a, b) => {
      let aValue, bValue;
      if (sortConfig.key === "site") {
        const aSite = sitesData.find((site) => site.id === a.siteId)?.url || "";
        const bSite = sitesData.find((site) => site.id === b.siteId)?.url || "";
        aValue = aSite;
        bValue = bSite;
      } else {
        aValue = a[sortConfig.key];
        bValue = b[sortConfig.key];
      }

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };

  const handleSort = (key: keyof Data | "site") => {
    let direction: "ascending" | "descending" = "ascending";

    if (key == "type") {
      setRotate(!rotate);
    }
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <StyledBox>
        <h1
          style={{ color: "#222222", marginTop: 20, fontFamily: "Montserrat" }}
        >
          Dashboard
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "14px",
              padding: "4px",
              width: "100%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: 16, marginLeft: 13 }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="What test are you looking for?"
              style={{
                border: "none",
                outline: "none",
                flexGrow: 1,
                height: 45,
                width: "100%",
                padding: "4px",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p
              style={{
                width: "5%",
                color: "#D1D1D1",
                fontFamily: "Montserrat",
              }}
            >
              {" "}
              {filteredData.length} tests
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            marginTop: 30,
          }}
        >
          {loading ? (
            <div className="circular-progress"></div>
          ) : error ? (
            <p style={{ color: "red" }}>Ошибка</p>
          ) : filteredData.length ? (
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <p
                  style={{
                    color: "#999999",
                    minWidth: "42.7%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("type")}
                >
                  NAME
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 150,
                  }}
                >
                  <p
                    style={{ color: "#999999", cursor: "pointer" }}
                    onClick={() => handleSort("type")}
                  >
                    TYPE{" "}
                    <img
                      src="/Chevron.png"
                      style={{
                        marginLeft: 10,
                        marginBottom: 1,
                        ...(rotate
                          ? {
                              transform: "rotate(180deg)",
                              transition: "transform 0.3s ease",
                            }
                          : { transition: "transform 0.3s ease" }),
                      }}
                      alt=""
                    />
                  </p>
                  <p
                    style={{ color: "#999999", cursor: "pointer" }}
                    onClick={() => handleSort("status")}
                  >
                    STATUS
                  </p>
                  <p
                    style={{ color: "#999999", cursor: "pointer" }}
                    onClick={() => handleSort("site")}
                  >
                    SITE
                  </p>
                </div>
                <p style={{ color: "#999999", minWidth: 155 }}></p>
              </div>
              <div>
                {filteredData.map((elem: any) => (
                  <div
                    key={elem.id}
                    style={{
                      height: 70,
                      alignItems: "center",
                      display: "flex",
                      cursor: "pointer",
                      borderRadius: 5,
                      borderLeft: "5px solid #E14165",
                      marginTop: 10,
                      transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "2px 2px 19px 2px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h2
                      style={{
                        minWidth: 590,
                        color: "#474747",
                        fontSize: 15,
                        marginLeft: 11,
                      }}
                    >
                      {elem.name}
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 110,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          minWidth: 100,
                        }}
                      >
                        {elem.type}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          minWidth: 100,
                          ...(elem.status == "ONLINE"
                            ? { color: "#1BDA9D" }
                            : elem.status == "STOPPED"
                            ? { color: "#FE4848" }
                            : elem.status == "PAUSED"
                            ? { color: "#FF8346" }
                            : { color: "#5C5C5C" }),
                          textTransform: "revert",
                        }}
                      >
                        {elem.status}
                      </p>
                      <p style={{ fontSize: 12, minWidth: 160 }}>
                        {sitesData.map((site) => {
                          if (site.id === elem.siteId)
                            return site.url?.replace(/https?:\/\/(www\.)?/, "");
                        })}
                      </p>
                      <button
                        style={{
                          borderRadius: 10,
                          width: 95,
                          height: 30,
                          cursor: "pointer",
                          border: "none",
                          color: "#fff",
                          backgroundColor:
                            elem.status == "DRAFT" ? "#7D7D7D" : "#2EE5AC",
                        }}
                        onClick={() =>
                          navigate(
                            elem.status == "DRAFT"
                              ? `/finalize/${elem.id}`
                              : `/results/${elem.id}`
                          )
                        }
                      >
                        {elem.status == "DRAFT" ? "Finalize" : "Results"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                height: "60vh",
              }}
            >
              <p style={{ fontSize: 24 }}>
                Your search did not match any results.
              </p>
              <button
                style={{
                  borderRadius: 10,
                  width: 95,
                  height: 30,
                  cursor: "pointer",
                  fontSize: 20,
                  border: "none",
                  color: "#fff",
                  backgroundColor: "#2EE5AC",
                }}
                onClick={() => setSearchTerm("")}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </StyledBox>
    </>
  );
};

export default Home;

// import { useEffect, useState } from "react";
// import StyledBox from "../../Components/utils/StyledBox";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress"; // Import MUI CircularProgress

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); // Initial loading state
//   const [error, setError] = useState(null); // Store error messages

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3100/test");
//         setData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message || "An error occurred.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <StyledBox>
//         <h1
//           style={{ color: "#222222", marginTop: 50, fontFamily: "Montserrat" }}
//         >
//           Dashboard
//         </h1>
//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             marginTop: 40,
//             justifyContent: "space-between",
//           }}
//         >
//           <div className="search-input-container">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="11" cy="11" r="8"></circle>
//               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//             </svg>
//             <input
//               type="text"
//               placeholder="What test are you looking for?"
//               className="search-input"
//             />
//           </div>
//           <p style={{ color: "#D1D1D1", fontFamily: "Montserrat" }}>7 tests</p>
//         </div>
//         <div className="data-display">
//           {loading ? (
//             <CircularProgress /> // Use MUI CircularProgress
//           ) : error ? (
//             <p>Error: {error}</p>
//           ) : (
//             <ul>
//               {data.map((item) => (
//                 <li key={item.id}>{item.name}</li> // Replace with your data structure
//               ))}
//             </ul>
//           )}
//         </div>
//       </StyledBox>
//     </>
//   );
// };

// export default Home;
