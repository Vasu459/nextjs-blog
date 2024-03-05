import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonGreen } from "./ButtonGreen";
import { WhiteButton } from "./WhiteButton";
import * as _utils from "./utils";
import _styles from "./Main.module.css";

export function Main({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "backdrop-images", "top")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65e5c854cfd04f15c7029acc/65e6243fd25d64f98ea22fc8_path-top.svg"
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "backdrop-images", "bottom")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65e5c854cfd04f15c7029acc/65e6243f4b95bdfa2cf176d7_path-bottom.svg"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "master-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tab-progress-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "progress-tabs", "active")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "progress-tabs")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "progress-tabs")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "progress-tabs")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "progress-tabs")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "logo-wrapper")}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65e5c854cfd04f15c7029acc/65e625abbe6e04d189a35d12_100s-logo-main.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-wrapper")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "h3-heading")}
            tag="h1"
          >
            {"The most "}
            <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
              {"trusted"}
            </_Builtin.Span>
            {" betting marketplace"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-wrapper")}
            tag="div"
          >
            <ButtonGreen />
            <WhiteButton />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
