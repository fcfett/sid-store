import React from "react";

import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as Magnify } from "../../../assets/icons/magnify.svg";
import { ReactComponent as AngleDown } from "../../../assets/icons/angle-down.svg";

export default props => (
  <svg id="svg-defs">
    <symbol id="svg-icon-logo">
      <Logo />
    </symbol>

    <symbol id="svg-icon-close">
      <Plus />
    </symbol>

    <symbol id="svg-icon-next">
      <AngleDown />
    </symbol>

    <symbol id="svg-icon-prev">
      <AngleDown />
    </symbol>

    <symbol id="svg-icon-magnify">
      <Magnify />
    </symbol>
  </svg>
);
