import Data from "../../mock_data/flights";

export const AutoFillOrigin = (searchString, name) => {
  if (name === "origin") {
    return Data.filter((list) => {
      const regex = new RegExp(`^${searchString.toLowerCase()}`, "i");
      return regex.test(list.source.toLowerCase());
    });
  } else {
    return Data.filter((list) => {
      const regex = new RegExp(`^${searchString.toLowerCase()}`, "i");
      return regex.test(list.destination.toLowerCase());
    });
  }
};

export const SearchFilter = (source, destination) => {
  if (!source) {
    return alert("please enter the Source");
  }
  if (!destination) {
    return alert("please enter the Destination");
  }
  if (!destination && !source) {
    return alert("please enter the both Source & Destination");
  }
  return Data.filter((list) => {
    return (
      list.source.toLowerCase() === source.toLowerCase() &&
      list.destination.toLowerCase() === destination.toLowerCase()
    );
  });
};

export const CalculatedFare = (fare) => {
  const splitedValue = fare.split(" ");
  return `${splitedValue[0]}. ${Number(splitedValue[1]).toFixed(2)}`;
};
