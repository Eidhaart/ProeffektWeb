import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class TeamBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center" />
        {this.props.teams.map((team, key) =>
          <Col key={key} lg={12} sm={12}>
            <div className="team-box text-center hover-effect">
              <div className="team-wrapper">
                <div className="team-member">
                  <img
                    alt="team"
                    src={team.image}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <h4 className="team-name">
                {team.title}
              </h4>
              <p className="text-uppercase team-designation">
                {team.desc}
              </p>
            </div>
          </Col>
        )}
      </React.Fragment>
    );
  }
}

export default TeamBox;
