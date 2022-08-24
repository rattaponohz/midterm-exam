import React, { useState, useEffect } from "react";

const Table = ({ Countries }) => {
  const [sortCountries, setSortCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(APIData)
    }
}

  const onConfSortClick = () => {
    const tempCountries = [...Countries];

    const res = tempCountries.sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });

    setSortCountries(res);
  };
  const onRecovSortClick = () => {
    const tempCountries = [...Countries];

    const res = tempCountries.sort((a, b) => {
      return b.TotalRecovered - a.TotalRecovered;
    });

    setSortCountries(res);
  };

  const onRestoreClick = () => {
    setSortCountries(Countries);
  };

  useEffect(() => {
    setSortCountries(Countries);
  }, [Countries]);

  const onDdSortClick = () => {
    const tempCountries = [...Countries];

    const res = tempCountries.sort((a, b) => {
      return b.TotalDeaths - a.TotalDeaths;
    });

    setSortCountries(res);
  };
  return (
    <div className="py-4">
      <div className="text-center">
      
      <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />

        <button
          className="btn btn-outline-primary  mx-3 rounded-pill"
          onClick={onRestoreClick}
        >
          default
        </button>
        <button
          className="btn btn-warning mx-3  rounded-pill"
          onClick={onConfSortClick}
        >
          High Total Confirmed
        </button>
       
        <button className="btn btn-danger mx-3 rounded-pill"
        onClick={onDdSortClick}
        >
          High of Deaths
          </button>

          <button
          className="btn btn-info mx-3  rounded-pill"
          onClick={onRecovSortClick}
        >
          High Total Recovered
        </button>

      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">TotalConfirmed</th>
            <th scope="col">TotalDeaths</th>
            <th scope="col">TotalRecovered</th>
          </tr>
        </thead>
        <tbody>
          {sortCountries.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
               
                <td>{item.Country}</td>
                <td>{item.TotalConfirmed}</td>
                <td>{item.TotalDeaths}</td>
                <td>{item.TotalRecovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
