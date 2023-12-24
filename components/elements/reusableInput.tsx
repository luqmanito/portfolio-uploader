import React, { ChangeEventHandler } from "react";
import { Input, Typography } from "antd";
import type { InputProps } from "antd/lib/input";

interface CustomInputProps extends InputProps {
  label?: string;
  margin?: number;
}

const { Text } = Typography;

const ReusableInput: React.FC<CustomInputProps> = ({
  label,
  margin,

  ...inputProps
}) => {
  return (
    <div style={{ marginTop: margin }}>
      {label && <Text>{label}</Text>}
      <Input {...inputProps} />
    </div>
  );
};

export default ReusableInput;
