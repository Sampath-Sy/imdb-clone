import React, { useState } from "react";

const WatchList = ({ watchlist, setWatchList, handleRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const sortIncreasingOrder = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };
  const sortDecreasingOrder = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400/50 rounded-xl text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4">
          Comedy
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search For Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortDecreasingOrder} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortIncreasingOrder} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h=[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>Action</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-800 hover:cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
