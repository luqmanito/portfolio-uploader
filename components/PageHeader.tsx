"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/data";

const { Header } = Layout;

const PageHeader: React.FC = () => {
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);

  return (
    <Header style={{ background: "white", marginBottom: 16 }}>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        selectedKeys={[activeKey]}
      >
        {links.map((item, index) => (
          <Menu.Item key={`/${item.name}`}>
            <Link href={`/${item.name}`}>{item.hash}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default PageHeader;
