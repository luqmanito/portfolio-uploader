"use client";
import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const PageFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center", marginTop: 10 }}>
      <Text  type="secondary" className="block text-xs">
        &copy; 2023 Luqman Grahito. All rights reserved.
      </Text>
      <div>
        <Text type="secondary" className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), Ant Design, TypeScript.
        </Text>
      </div>
    </Footer>
  );
};

export default PageFooter;
