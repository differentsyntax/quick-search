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
  const [displayList, setDisplayList] = useState<User[]>(users);
  const [roleType, setRoleType] = useState<string>("User");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrSearchVal(e.target.value);
  };

  useEffect(() => {
    setDisplayList(
      users
        .filter((item) =>
          item.name.toLowerCase().includes(currSearchVal.toLowerCase())
        )
        .filter((item) => item.role === roleType)
    );
  }, [currSearchVal, roleType]);

  return (
    <div className="searchBarAndListContainer">
      <div className="searchBarContainer">
        <input value={currSearchVal} onChange={handleChange} />

        <select
          value={roleType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setRoleType(e.target.value)
          }
        >
          <option value={`Admin`}>{`Admin`}</option>
          <option value={`User`}>{`User`}</option>
          <option value={`Moderator`}>{`Moderator`}</option>
        </select>

        {displayList ? (
          <ul>
            {displayList.map((item, index) => (
              <li key={index}>
                <span>{`${item.name}`}</span>
                <span className="email">{`${item.email}`}</span>
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
