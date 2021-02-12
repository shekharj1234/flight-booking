import React from "react";
import flightIcon from "../../Assets/images/flight.png";
import { CalculatedFare } from "../Shared/";

export const SortedFlights = ({ flightList: { filteredList = [] } = {} }) =>
  filteredList.map(
    (
      {
        fare = "",
        flight_id = "",
        source_code = "",
        destination_code = "",
        departs_at = "",
        arrives_at = "",
      },
      i
    ) => {
      return (
        <div className="card" key={`${i}-${flight_id}`}>
          <h5 className="card-header">Flight</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-8">
                <h5 className="card-title">{CalculatedFare(fare)}</h5>
                <p className="card-text">
                  <small className="text-muted">{flight_id}</small>
                </p>
                <p className="card-text">
                  <strong>
                    {source_code} {">"} {destination_code}
                  </strong>
                </p>
                <p className="card-text">Depart: {departs_at}</p>
                <p className="card-text">Arrive: {arrives_at}</p>
              </div>
              <div className="col-sm-4 flight-book">
                <div className="card margin-0">
                  <img src={flightIcon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <a className="btn btn-primary">Book this flight</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
