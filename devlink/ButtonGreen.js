import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonGreen.module.css";

export function ButtonGreen({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "contact-button")}
      button={false}
      block=""
      options={{
        href: "#",
      }}
    >
      {"Register"}
    </_Component>
  );
}
