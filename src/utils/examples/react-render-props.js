// https://medium.com/geekculture/using-jsdoc-to-enable-intellisense-for-render-props-in-vscode-e655ae4e64c1
// https://forums.expo.dev/t/registerrootcomponent-typescript-whats-the-correct-parameter-type/52799

import React, { useState } from "react";
import PropTypes from "prop-types";

/**
* @callback ChildrenFn
* @param {{ open: boolean }} props - whether the toggle is open or not
* @returns {React.ReactNode}
*/

/**
 * @param {Object} props
 * @param {ChildrenFn} props.children
 * @returns {React.ReactElement}
 */
function Toggle(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
     <button type="button" onClick={() => setOpen(!open)}>
      {" "}
      Toggle
      {" "}
     </button>
     {props.children({ open })}
    </div>
  );
}
Toggle.propTypes = {
  children: PropTypes.func.isRequired
};


function usage() {
  return (
    <Toggle>
      {({ open }) => {
        return open ? <div>xyz</div> : null 
      }}
    </Toggle>
  )
}

export default Toggle;