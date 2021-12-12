import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Button, Container, Row, Col } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar";
const MenRanking = () => {
  const [players, setplayerlist] = useState({});

  useEffect(() => {
    Axios.get("http://absc-snooker.herokuapp.com/ReadMenPlayersList/").then(
      (response) => {
        setplayerlist([...response.data]);
      }
    );
  }, []);

  return (
    <div>
      <DemoNavbar />
      <div className="align-items-center justify-content-center">
        {/* < */}
        <section className="section section-hero section-shaped">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>

          <div ClassName="d-flex align-items-center justify-content-center">
            <Container fluid className="d-flex align-items-center py-lg">
              <div className="col align-items-center justify-content-center">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center">
                    <div id="RankingTable">
                      <table>
                        <thead>
                          <tr>
                            <th>N°</th>
                            <th>Players</th>
                            <th>Matches Won</th>
                            <th>Frames Won</th>
                            <th>Frames Lost</th>
                            <th>Bilan Frames</th>
                            <th>Frame Average</th>
                            <th>No Losses</th>
                            <th>Place In Group</th>
                            <th>Group</th>
                            <th>Place In Knockout</th>
                          </tr>
                        </thead>
                        <tbody>
                          {players.sort((a, b) =>
                              ((a.fw - a.fl) / a.mp) > ((b.fw - b.fl) / b.mp)
                                ? -1
                                : 1
                            )
                            .map((p, i) => (
                              <tr>
                                <td> {i + 1}</td>
                                <td>{p.player}</td>
                                <td>{p.mp}</td>
                                <td>{p.fw}</td>
                                <td>{p.fl}</td>
                                <td>{p.fw - p.fl}</td>
                                <td>{(p.fw - p.fl) / p.mp}</td>
                                <td>___</td>
                                <td>0</td>
                                <td>1</td>
                                <td>{p.group}</td>
                                <td>{i + 1}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenRanking;
