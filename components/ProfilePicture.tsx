import { Image } from "antd";
import React from "react";
import styles from "../styles/ProfilePicture.module.css";

interface ProfilePictureProps {
  coverImage: string;
  avatarImage: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  coverImage,
  avatarImage,
}) => {
  return (
    <div className={styles.profileContainer}>
      {coverImage ? (
        <Image
          src={coverImage}
          alt="Cover"
          width={"100%"}
          height={"100%"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <img src={"/computer.jpg"} className={styles.coverImage} />
      )}

      {avatarImage ? (
        <div className={styles.avatarContainer}>
          <Image
            width={200}
            height={200}
            src={avatarImage}
            alt="Avatar"
            className={styles.avatarImage}
          />
        </div>
      ) : (
        <div className={styles.noAvatarContainer}>
          <img src={"/book.jpg"} className={styles.avatarImage} />
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
