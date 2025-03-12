import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img
      src="https://ipfs.io/ipfs/bafybeia7oc3dakoaajdvuenirppwugsdbzwwiqngkbeffi46btp52ecvbq/new-logo-8390.svg" // Replace with the path to your PNG file
      alt="Logo" // Provide an appropriate alt text for accessibility
      {...props} // Spread any additional props passed to the component
    />
  );
};

export default Icon;
