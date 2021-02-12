import React from "react";
import Filters from "../Filters/";
import { SortedFlights } from "../SortedFlights/";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: "test",
      latestSearch: "Please refresh your search to see the latest price",
    };
  }

  render() {
    const {
      flightList: {
        filteredList = [],
        formData: { origin = "", destination = "" } = {},
      } = {},
    } = this.props;
    const { latestSearch = "" } = this.state;
    return (
      <div className="container">
        <div className="wrap-two-col">
          <h2 className="title">Flight Search Engine</h2>
          <div className="row">
            <div className="col-sm-4 left-filter">
              <div className="filters">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active">One Way</a>
                  </li>
                </ul>
                <Filters {...this.props} />
              </div>
            </div>
            <div className="col-sm-8 sorted-list">
              {filteredList.length > 0 ? (
                <div>
                  <h4 className="from-to">{`${origin} > ${destination}`}</h4>
                  <SortedFlights {...this.props} />
                </div>
              ) : origin && destination ? (
                <h4 className="from-to"> No Flights available </h4>
              ) : (
                <h4 className="from-to"> {latestSearch} </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
