import React from "react";
import { AutoFillOrigin, SearchFilter } from "../Shared/";
import InputRange from "react-input-range";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillOrigin: [],
      formData: {
        origin: "",
        destination: "",
      },
      cities: [],
      currentTargetName: "",
      listHide: false,
      value: { min: 0, max: 1000 },
      flag: false,
      filteredList: [],
    };
  }
  uniqueArray = (cities) => {
    return cities.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };
  handlekeyUp = (event) => {
    const { currentTarget: { value = "", name = "" } = {} } = event;
    if (value.length > 1) {
      const list = AutoFillOrigin(value, name);
      const cities = list.map((list) => {
        return name === "origin" ? list.source : list.destination;
      });
      this.setState({
        fillOrigin: list,
        cities: this.uniqueArray(cities),
        currentTargetName: name,
        formData: {
          ...this.state.formData,
          [name]: value,
        },
      });
    } else {
      this.setState({
        listHide: false,
      });
    }
  };
  selectedText = (e, item) => {
    const { formData = {}, currentTargetName = "" } = this.state;
    this.setState({
      formData: {
        ...formData,
        [currentTargetName]: item,
      },
      listHide: true,
      cities: [],
    });
  };
  autoComplete = () => {
    const { listHide = false, flag = false, cities = [] } = this.state;
    if (cities.length < 0) {
      return null;
    } else {
      // const city = ['pune', 'mumbai', 'delhi',]
      return (
        <ul
          className={`list-group ${flag ? "custom" : ""} ${
            listHide ? "list-hide" : ""
          } `}
        >
          {this.state.cities.map((item, index) => (
            <li
              className="list-group-item list-group-item-light"
              key={`${index}-${item}`}
              onClick={(e) => this.selectedText(e, item)}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
  };

  handleSearch = () => {
    const { origin, destination } = this.state.formData;

    const list = SearchFilter(origin, destination);
    const filterListForSlider = list.map((item) => {
      return item.fare.split(" ");
    });
    var objs = filterListForSlider.map(function (x) {
      return {
        priceIn: x[0],
        price: x[1],
      };
    });
    const maxValue = Math.max.apply(
      Math,
      objs.map(function (p) {
        return p.price;
      })
    );
    const props = {
      filteredList: list,
      formData: this.state.formData,
    };

    this.props.flightListAction(props);
    this.setState({
      listHide: true,
      cities: [],
      filteredList: objs,
      value: {
        max: maxValue,
        min: 0,
      },
    });
  };
  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleOnFocusDestination = () => {
    this.setState({
      flag: true,
    });
  };
  handleOnFocusOrigin = () => {
    this.setState({
      flag: false,
    });
  };

  render() {
    const {
      value = {},
      formData: { origin = "", destination = "" } = {},
    } = this.state;
    return (
      <div className="filter-wrap">
        <div className="filter-section">
          <div className="control-wrap">
            {" "}
            <input
              type="text"
              placeholder="Enter Origin City"
              name="origin"
              onChange={(e) => this.handleChange(e)}
              onKeyUp={(event) => this.handlekeyUp(event)}
              onFocus={this.handleOnFocusOrigin}
              value={origin}
              className="form-control"
            />
          </div>
          <div className="control-wrap">
            <input
              type="text"
              placeholder="Enter Destination City"
              name="destination"
              onChange={(e) => this.handleChange(e)}
              onKeyUp={(event) => this.handlekeyUp(event)}
              onFocus={this.handleOnFocusDestination}
              value={destination}
              className="form-control"
            />
          </div>
          <input
            type="date"
            placeholder="Date"
            name="date"
            onChange={(e) => this.handleChange(e)}
            className="form-control"
          />
          <div className="form-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => this.handleChange(e)}
            >
              <option>Passengers</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleSearch}
          >
            Search
          </button>

          {this.autoComplete()}
        </div>
        <div className="range-slider-wrap">
          <h5>Refine Flight Search</h5>
          <InputRange
            formatLabel={(value) => `${value}`}
            maxValue={value.max}
            minValue={value.min}
            value={value}
            onChange={() => this.setState({ value })}
          />
        </div>
      </div>
    );
  }
}
export default Filters;
