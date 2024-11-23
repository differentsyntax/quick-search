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
  const [roleType, setRoleType] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrSearchVal(e.target.value);
  };

  useEffect(() => {
    setDisplayList(
      users
        .filter((item) =>
          item.name.toLowerCase().includes(debouncedValue.toLowerCase())
        )
        .filter((item) => (roleType.length ? item.role === roleType : 1 === 1))
    );
  }, [debouncedValue, roleType]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(currSearchVal);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [currSearchVal]);

  return (
    <div className="searchBarAndListContainer">
      <div className="searchBarContainer">
        <input value={currSearchVal} onChange={handleChange} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="roleSelect">{`Role:`}</label>
          <select
            value={roleType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setRoleType(e.target.value)
            }
          >
            <option value={``}>{`Any`}</option>
            <option value={`Admin`}>{`Admin`}</option>
            <option value={`User`}>{`User`}</option>
            <option value={`Moderator`}>{`Moderator`}</option>
          </select>
        </div>

        {displayList.length ? (
          <ul>
            {displayList.map((item, index) => (
              <li key={index}>
                <span>{`${item.name}`}</span>
                <span className="email">{`${item.email}`}</span>
              </li>
            ))}
          </ul>
        ) : (
          <h2>{`No results found!`}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
