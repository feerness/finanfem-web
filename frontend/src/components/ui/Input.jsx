import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return(
    <input
    {...props}
    ref={ref}
    className="w-full bg-purple-200 text-white px-4 py-2 rounded-md"
  />
  );
});

Input.displayName = 'Input';
export default Input;