import React from "react";
import { Input, Typography } from "antd";
import type { TextAreaProps } from "antd/lib/input";

interface ReusableTextAreaProps extends TextAreaProps {
  // You can add any additional props specific to your custom textarea component
  label?: string;
}
const { Text } = Typography;

const ReusableTextArea: React.FC<ReusableTextAreaProps> = ({
  label,
  ...textAreaProps
}) => {
  return (
    <div style={{ marginTop: 16 }}>
      {label && <Text>{label}</Text>}
      <Input.TextArea style={{ height: 80 }} {...textAreaProps} />
    </div>
  );
};

export default ReusableTextArea;
