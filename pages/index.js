import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

export default function Home() {
  const [NumberOfUsers, setNumberOfUsers] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (NumberOfUsers < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${NumberOfUsers}`
    );

    const NewUsers = [];
    for (const x of resp.data.results) {
      NewUsers.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }

    setUsers(NewUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setNumberOfUsers(event.target.value);
          }}
          value={NumberOfUsers}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((x) => (
        <UserCard key={x.name} {...x} />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Channarong Duangsupa 640612084
      </p>
    </div>
  );
}
