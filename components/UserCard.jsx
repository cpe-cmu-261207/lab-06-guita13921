import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [IsClick, setIsClick] = useState(false);

  return (
    <div
      className="border-bottom"
      onClick={() => {
        IsClick ? setIsClick(false) : setIsClick(true);
      }}
    >
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {IsClick ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {IsClick ? <UserCardDetail key={props.name} {...props} /> : ""}
    </div>
  );
}
