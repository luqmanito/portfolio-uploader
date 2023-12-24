import { useState, useEffect } from "react";
import { formValidation } from "@/utils/formValidation";

export const useForm = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      name: "",
      position: "",
      company: "",
      workDate: [],
      description: "",
    },
  ]);

  const [profile, setProfile] = useState({
    name: "",
    position: "",
    description: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = formValidation(profile, portfolioItems);
    setIsFormValid(isValid);
  }, [profile, portfolioItems]);

  const handleAddPortfolio = () => {
    setPortfolioItems((prevItems) => [
      ...prevItems,
      {
        name: "",
        position: "",
        company: "",
        workDate: [],
        description: "",
      },
    ]);
  };

  const handleRemovePortfolio = (index: number) => {
    setPortfolioItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handlePortfolioChange = (
    index: number,
    field: keyof PortfolioItem,
    value: string | string[]
  ) => {
    setPortfolioItems((prevItems) => {
      const updatedItems = prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: value };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  return {
    portfolioItems,
    setPortfolioItems,
    profile,
    setProfile,
    isFormValid,
    handleAddPortfolio,
    handleRemovePortfolio,
    handlePortfolioChange,
    handleProfileChange,
  };
};

type PortfolioItem = {
  name: string;
  position: string;
  company: string;
  workDate: never[];
  description: string;
};
