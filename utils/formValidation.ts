type PortfolioItem = {
  name: string;
  position: string;
  company: string;
  workDate: never[];
  description: string;
};

type Profile = {
  name: string;
  position: string;
  description: string;
};

export const formValidation = (
  profile: Profile,
  portfolioItems: PortfolioItem[]
) => {
  const hasEmptyFields =
    !profile.name ||
    !profile.position ||
    !profile.description ||
    portfolioItems.some(
      (item) =>
        !item.name || !item.position || !item.company || !item.description
    );

  return !hasEmptyFields;
};
