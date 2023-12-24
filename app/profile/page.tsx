"use client";

import React, { useEffect, useState } from "react";
import ProfilePicture from "@/components/ProfilePicture";
import { Card, Flex, Typography } from "antd";
import { DataModel } from "@/models/dataModel";
import formatDate from "@/utils/dateFormatter";

const { Text, Title } = Typography;
const ProfilePage: React.FC = () => {
  const [data, setData] = useState<DataModel>();
  const [imageProfile, setImageProfile] = useState("");
  const [imageBg, setImageBg] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("profileData");
    const imageProfile = localStorage.getItem("profile");
    const imageBackground = localStorage.getItem("background");

    if (data) {
      setData(JSON.parse(data));
    }
    if (imageProfile) {
      setImageProfile("data:image/png;base64," + imageProfile);
    }
    if (imageBackground) {
      setImageBg("data:image/png;base64," + imageBackground);
    }
  }, []);

  return (
    <>
      <ProfilePicture coverImage={imageBg} avatarImage={imageProfile} />
      <Flex
        vertical
        justify={"center"}
        align={"center"}
        style={{ marginTop: 150 }}
      >
        <Title style={{ margin: 0 }}>{data?.profile?.name}</Title>
        <Title type="secondary" style={{ margin: 0 }} level={3}>
          {data?.profile?.position}
        </Title>
        <div style={{ textAlign: "center", width: "500px" }}>
          <Text style={{}}>{data?.profile?.description}</Text>
        </div>
      </Flex>
      <Flex vertical style={{ padding: "0px 50px" }}>
        <Title>
          {data === undefined ? "No Portfolio Data Found" : "Portfolio"}
        </Title>
        {data?.portfolioItems?.map((item, index) => {
          return (
            <Card
              key={index}
              style={{ marginBottom: 20 }}
              title={item?.position}
            >
              <Flex vertical>
                <Text
                  strong
                  style={{ margin: 0, fontSize: 17 }}
                  type={"secondary"}
                >
                  {item?.name}
                </Text>
                <Title style={{ margin: 0 }} level={5} type={"secondary"}>
                  {`${formatDate(item?.workDate[0])} - ${formatDate(
                    item?.workDate[1]
                  )}`}
                </Title>
                <Text style={{ marginTop: 10 }}>{item?.description}</Text>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

export default ProfilePage;
