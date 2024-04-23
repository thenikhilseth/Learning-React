import React from "react";

//ref is by default added as an additional parameter to funtional component here. It is indirectly coming from parent component i.e
// FRefInput in this case. In other ref is being passed from parent component to child component.

const FRefInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default FRefInput;
