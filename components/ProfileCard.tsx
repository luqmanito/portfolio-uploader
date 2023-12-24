import React from "react";
import { Card } from "antd";
import ReusableInput from "./elements/reusableInput";
import ReusableTextArea from "./elements/reusableTextArea";

interface ProfileCardProps {
  profile: {
    name: string;
    position: string;
    description: string;
  };
  handleProfileChange: (field: string, value: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  handleProfileChange,
}) => (
  <Card title={"Profile"}>
    <ReusableInput
      placeholder="Nama"
      label="Name"
      value={profile.name}
      onChange={(event) => handleProfileChange("name", event.target.value)}
    />
    <ReusableInput
      placeholder="Title / Posisi"
      margin={16}
      label="Posisi"
      value={profile.position}
      onChange={(event) => handleProfileChange("position", event.target.value)}
    />
    <ReusableTextArea
      placeholder="Deskripsi"
      label="Deskripsi"
      value={profile.description}
      onChange={(event) =>
        handleProfileChange("description", event.target.value)
      }
    />
  </Card>
);

export default ProfileCard;
