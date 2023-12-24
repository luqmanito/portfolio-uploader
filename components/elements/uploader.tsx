import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { List, Space, message, Upload } from "antd";

const { Dragger } = Upload;

interface UploadProps {
  onChange?: (value: string) => void;
  onRemove?: (value: string) => void;
}

const Uploader: React.FC<UploadProps> = ({
  onChange,
  onRemove,
  ...uploadProps
}) => {
  const beforeUpload = (file: File) => {
    const isImage =
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg";

    if (!isImage) {
      message.error("You can only upload PNG/JPG/JPEG files!");
    }
    const isSizeValid = file.size / 1024 / 1024 < 2;
    if (!isSizeValid) {
      message.error("Image must be smaller than 2MB!");
    }
    return isImage && isSizeValid;
  };

  const [fileList, setFileList] = useState<any[]>([]);
  const customRequest = (info: any) => {
    message.success(`${info.file.name} file uploaded successfully.`);
    setFileList((prevList) => [...prevList, info.file]);

    if (onChange) {
      onChange(info.file);
    }
  };

  const removeFile = (file: any) => {
    if (onRemove) {
      onRemove(file);
    }

    setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid));
  };

  const handleDrop = (e: any) => {
    if (onChange) {
      onChange(e.dataTransfer.files);
    }
  };

  return (
    <>
      <Dragger
        multiple={false}
        disabled={fileList.length !== 0}
        {...uploadProps}
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={customRequest}
        onDrop={handleDrop}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support format: png, jpg, jpeg with max size: 2MB.
        </p>
      </Dragger>
      {fileList.length !== 0 && (
        <List
          dataSource={fileList}
          renderItem={(item) => (
            <List.Item>
              <Space>
                <span>{item.name}</span>
                <a onClick={() => removeFile(item)}>Remove</a>
              </Space>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default Uploader;
