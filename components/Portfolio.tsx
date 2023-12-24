import React from "react";
import { Button, Card, DatePicker, Flex, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ReusableInput from "./elements/reusableInput";
import { PortfolioItem } from "@/models/dataModel";
import ReusableTextArea from "./elements/reusableTextArea";

const { Text } = Typography;

interface PortfolioItemCardProps {
  index: number;
  item: PortfolioItem;
  handleRemove: (index: number) => void;
  handlePortfolioChange: (
    index: number,
    field: keyof PortfolioItem,
    value: string | string[]
  ) => void;
}

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({
  index,
  item,
  handleRemove,
  handlePortfolioChange,
}) => (
  <Card
    key={index}
    title={
      <Flex style={{ justifyContent: "space-between", textAlign: "center" }}>
        {index === 0 ? "Main Portfolio" : `Portfolio ${index + 1}`}
        {index !== 0 ? (
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => handleRemove(index)}
          />
        ) : null}
      </Flex>
    }
  >
    <div key={index}>
      <ReusableInput
        placeholder="Nama"
        label="Name"
        value={item.name}
        onChange={(event) =>
          handlePortfolioChange(index, "name", event.target.value)
        }
      />
      <ReusableInput
        placeholder="Title / Posisi"
        margin={16}
        label="Posisi"
        value={item.position}
        onChange={(event) =>
          handlePortfolioChange(index, "position", event.target.value)
        }
      />
      <ReusableInput
        placeholder="Perusahaan"
        margin={16}
        label="Perusahaan"
        value={item.company}
        onChange={(event) =>
          handlePortfolioChange(index, "company", event.target.value)
        }
      />
      <Flex vertical style={{ marginTop: 16 }}>
        <Text>Waktu Bekerja</Text>
        <DatePicker.RangePicker
          onChange={(dates, dateStrings) =>
            handlePortfolioChange(index, "workDate", dateStrings)
          }
        />
      </Flex>
      <ReusableTextArea
        placeholder="Deskripsi"
        label="Deskripsi"
        value={item.description}
        onChange={(event) =>
          handlePortfolioChange(index, "description", event.target.value)
        }
      />
    </div>
  </Card>
);

export default PortfolioItemCard;
