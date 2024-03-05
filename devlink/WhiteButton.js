import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WhiteButton.module.css";

export function WhiteButton({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "contact-button", "white")}
      button={false}
      block=""
      options={{
        href: "#",
      }}
    >
      {"Log In"}
    </_Component>
  );
}
