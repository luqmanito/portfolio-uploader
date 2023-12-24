"use client";

import React from "react";
import { Button, Card, Flex, message, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "@/hooks/useForm";
import PortfolioItemCard from "./Portfolio";
import ProfileCard from "./ProfileCard";
import Uploader from "./elements/uploader";
import { useRouter } from "next/navigation";
export default function Body() {
  const {
    portfolioItems,
    profile,
    isFormValid,
    handleAddPortfolio,
    handleRemovePortfolio,
    handlePortfolioChange,
    handleProfileChange,
  } = useForm();
  const router = useRouter();
  const handleImageChange = (field: string, value: string | File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = (reader?.result as string)?.split(",")[1];
      localStorage.setItem(field, base64Data);
    };

    if (typeof value === "string") {
      reader.readAsDataURL(new Blob([value], { type: "text/plain" }));
    } else if (value instanceof File) {
      reader.readAsDataURL(value);
    } else {
      console.error("Invalid file or data URL provided");
    }
  };

  const handleImageRemove = (field: string) => {
    localStorage.removeItem(field);
  };

  function submit() {
    const dataToSave = { profile, portfolioItems };
    const serializedData = JSON.stringify(dataToSave);
    localStorage.setItem("profileData", serializedData);
    message.success(`Berhasil menambahkan data`);
    router.push("/profile");
  }

  return (
    <section>
      <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
        <Card title={"Background Image"}>
          <Uploader
            onChange={(value) => handleImageChange("background", value)}
            onRemove={() => handleImageRemove("background")}
          />
        </Card>
        <Card title={"Profile Image"}>
          <Uploader
            onChange={(value) => handleImageChange("profile", value)}
            onRemove={() => handleImageRemove("profile")}
          />
        </Card>
        <ProfileCard
          profile={profile}
          handleProfileChange={handleProfileChange}
        />
        {portfolioItems.map((item, index) => (
          <PortfolioItemCard
            key={index}
            index={index}
            item={item}
            handleRemove={handleRemovePortfolio}
            handlePortfolioChange={handlePortfolioChange}
          />
        ))}
        <Flex gap={"middle"} justify={'center'}>
          <Button icon={<PlusOutlined />} onClick={handleAddPortfolio}>
            Add Portofolio
          </Button>
          <Button disabled={!isFormValid} onClick={submit}>
            Simpan Perubahan
          </Button>
        </Flex>
      </Space>
    </section>
  );
}
