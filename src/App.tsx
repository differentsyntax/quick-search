import { ChangeEvent, useEffect, useState } from "react";

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Moderator",
  },
  { id: 4, name: "Bob Brown", email: "bob.brown@example.com", role: "User" },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    role: "Admin",
  },
  { id: 6, name: "David Lee", email: "david.lee@example.com", role: "User" },
  {
    id: 7,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "Moderator",
  },
  {
    id: 8,
    name: "Frank Harris",
    email: "frank.harris@example.com",
    role: "User",
  },
  {
    id: 9,
    name: "Grace Taylor",
    email: "grace.taylor@example.com",
    role: "Admin",
  },
  {
    id: 10,
    name: "Henry Clark",
    email: "henry.clark@example.com",
    role: "User",
  },
  { id: 11, name: "Ivy Lewis", email: "ivy.lewis@example.com", role: "Admin" },
  {
    id: 12,
    name: "Jack Robinson",
    email: "jack.robinson@example.com",
    role: "Moderator",
  },
  { id: 13, name: "Lily Scott", email: "lily.scott@example.com", role: "User" },
  {
    id: 14,
    name: "Mason Walker",
    email: "mason.walker@example.com",
    role: "Admin",
  },
  { id: 15, name: "Nina Young", email: "nina.young@example.com", role: "User" },
  {
    id: 16,
    name: "Oscar King",
    email: "oscar.king@example.com",
    role: "Moderator",
  },
  {
    id: 17,
    name: "Paul Martinez",
    email: "paul.martinez@example.com",
    role: "Admin",
  },
  {
    id: 18,
    name: "Quinn Perez",
    email: "quinn.perez@example.com",
    role: "User",
  },
  {
    id: 19,
    name: "Rachel Sanchez",
    email: "rachel.sanchez@example.com",
    role: "Moderator",
  },
  {
    id: 20,
    name: "Sam Taylor",
    email: "sam.taylor@example.com",
    role: "Admin",
  },
];

function App() {
  const [currSearchVal, setCurrSearchVal] = useState<string>("");
  const [displayList, setDisplayList] = useState<string[]>(
    users.map((item) => item.name)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrSearchVal(e.target.value);
  };

  useEffect(() => {
    setDisplayList(
      users
        .map((item) => item.name)
        .filter((item) =>
          item.toLowerCase().includes(currSearchVal.toLowerCase())
        )
    );
  }, [currSearchVal]);

  return (
    <>
      <div className="searchBarAndListContainer">
        <div className="searchBarContainer">
          <input value={currSearchVal} onChange={handleChange} />
        </div>
        <div>
          <ul>
            {displayList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
