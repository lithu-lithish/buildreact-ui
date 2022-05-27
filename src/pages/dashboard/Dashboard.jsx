import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import "./Dashboard.scss";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { userData } from "../../dummyData";
import stat from "../../svg/stat.svg";
import arrow from "../../svg/arrow.svg";

const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="featured">
            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  marginLeft: "1%",
                  marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  padding: "4%",
                }}
              >
                <div
                  className="featuredTitle"
                  style={
                    {
                      // paddingLeft: "26.5%",
                    }
                  }
                >
                  Total Trainers
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={
                      {
                        // paddingLeft: "26.5%",
                      }
                    }
                  >
                    25
                  </span>
                </div>
              </div>
            </div>

            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  marginLeft: "1%",
                  marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div>
                <div
                  className="featuredTitle"
                  style={
                    {
                      // paddingLeft: "26.5%",
                    }
                  }
                >
                  Total Customers
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={
                      {
                        // paddingLeft: "26.5%",
                      }
                    }
                  >
                    25
                  </span>
                </div>
              </div>
            </div>

            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  marginLeft: "1%",
                  marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div>
                <div
                  className="featuredTitle"
                  style={
                    {
                      // paddingLeft: "26.5%",
                    }
                  }
                >
                  Present Average
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={
                      {
                        // paddingLeft: "26.5%",
                      }
                    }
                  >
                    25
                  </span>
                </div>
              </div>
            </div>

            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  marginLeft: "1%",
                  marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div>
                <div
                  className="featuredTitle"
                  style={
                    {
                      // paddingLeft: "26.5%",
                    }
                  }
                >
                  Abesent Average
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={
                      {
                        // paddingLeft: "26.5%",
                      }
                    }
                  >
                    25
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Chart
            data={userData}
            title="6165 total views"
            dataKey="Active User"
          />

          <span>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "MonumentExtended",
                  color: "#011627",
                  fontStyle: "Normal",
                  fontWeight: "400",
                  forntSize: "30.5px",
                  lineHeight: "37px",

                  paddingTop: "3%",
                  paddingLeft: "2.5%",
                  paddingBottom: "1%",
                }}
              >
                shortcut
              </h1>
            </div>
          </span>

          <div className="featured-bottom">
            <div
              className="featuredItem2"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "400px",
                minWidth: "400px",
                // padding: "2.5%",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  // marginLeft: "3%",
                  // marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div
                className="featuredTitle"
                style={{
                  paddingRight: "9%",
                  padding: "2.5% 4.4%",
                }}
              >
                <h3>New</h3> <h3>Registration</h3>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: "#D0FD3E",
                  borderRadius: "0 28px 28px 0",
                  maxWidth: "100px",
                  // padding: "0 6%",
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // marginLeft: "1%",
                    // marginRight: "11%",
                    // margin: "auto 0",
                    alignSelf: "center",
                    display: "block",
                    backgroundColor: "#D0FD3E",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div
              className="featuredItem2"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "400px",
                minWidth: "400px",
                // padding: "2.5%",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  // marginLeft: "3%",
                  // marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div
                className="featuredTitle"
                style={{
                  paddingRight: "19%",
                  padding: "2.5% 4.4%",
                }}
              >
                <h3>Packages</h3>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: "#D0FD3E",
                  borderRadius: "0 28px 28px 0",
                  // padding: "0 6%",
                  maxWidth: "100px",
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // marginLeft: "1%",
                    // marginRight: "11%",
                    // margin: "auto 0",
                    alignSelf: "center",
                    display: "block",
                    backgroundColor: "#D0FD3E",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div
              className="featuredItem2"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "400px",
                minWidth: "400px",
                // justifyContent: "space-between",
                // padding: "2.5%",
              }}
            >
              <img
                src={stat}
                alt=""
                srcset=""
                className="image"
                style={{
                  // marginLeft: "3%",
                  // marginRight: "11%",
                  backgroundColor: "#FDFFF7",
                  padding: "6%",
                  borderRadius: "50%",
                }}
              />
              <div
                className="featuredTitle"
                style={{
                  paddingRight: "9%",
                  padding: "2.5% 4.4%",
                }}
              >
                <h3>User Dettails</h3>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: "#D0FD3E",
                  borderRadius: "0 28px 28px 0",
                  maxWidth: "100px",
                  // padding: "0 6%",
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // marginLeft: "1%",
                    // marginRight: "11%",
                    // margin: "auto 0",
                    alignSelf: "center",
                    display: "block",
                    backgroundColor: "#D0FD3E",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
