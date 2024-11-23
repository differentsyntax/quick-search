import { ChangeEvent, useEffect, useState } from "react";
import { users } from "./utilities";
import "./App.css";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

function App() {
  const [currSearchVal, setCurrSearchVal] = useState<string>("");
  const [displayList, setDisplayList] = useState<User[]>([]);
  const [filterType, setFilterType] = useState<string>("name");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrSearchVal(e.target.value);
  };

  useEffect(() => {
    setDisplayList(
      users.filter((item) =>
        item[filterType as keyof Pick<User, "name" | "role" | "email">]
          .toLowerCase()
          .includes(currSearchVal.toLowerCase())
      )
    );
  }, [currSearchVal, filterType]);

  return (
    <div className="searchBarAndListContainer">
      <div className="searchBarContainer">
        <input value={currSearchVal} onChange={handleChange} />
        <select
          value={filterType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setFilterType(e.target.value)
          }
        >
          <option value={`name`}>{`Name`}</option>
          <option value={`email`}>{`Email`}</option>
          <option value={`role`}>{`Role`}</option>
        </select>
        {displayList ? (
          <ul>
            {displayList.map((item, index) => (
              <li key={index}>
                <span>{`${item.name}`}</span>
                <span className="filter-category">
                  {filterType !== "name" ? item[filterType as keyof User] : ""}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div>{`No results found!`}</div>
        )}
      </div>
    </div>
  );
}

export default App;
