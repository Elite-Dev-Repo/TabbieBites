const descriptionByNumber = {
  1: "Small chops",
  2: "Pancakes",
  3: "Birthday cake",
  4: "Birthday cake",
  5: "Naked cake",
  6: "Wedding cake",
  7: "Office gathering cake",
  8: "Celebration cake",
  9: "Food platter",
  10: "Convocation cupcakes",
  11: "Vanilla cupcakes",
  12: "Chinchin",
  13: "Sign-out cake",
  14: "Birthday cake",
  15: "Birthday cake",
  16: "Birthday cake",
  17: "Graduation cake",
  18: "Convocation cupcakes",
  19: "Celebration cake",
  20: "Bento cake",
  21: "50th birthday cake",
  22: "A cake for someone special",
  23: "Birthday cake",
  24: "Cheesecake",
  28: "Pearl ribbon birthday cake",
  29: "Money pull-away cake",
  30: "Bauble and gold leaf cake",
  31: "Lilac petal celebration cake",
  32: "Giveaway prize",
  33: "Blue ombré birthday cake",
};

const imageModules = {
  ...import.meta.glob("./image*.jpg", { eager: true, import: "default" }),
  ...import.meta.glob("./image*.jpeg", { eager: true, import: "default" }),
};

export const galleryImages = Object.entries(imageModules)
  .map(([path, image]) => {
    const number = Number(path.match(/image(\d+)\./)?.[1]);
    return {
      number,
      image,
      title: `image${number}`,
      description:
        descriptionByNumber[number] || "Fresh from the Tabbie Bakes kitchen",
    };
  })
  .filter(({ number }) => number && number !== 25)
  .sort((a, b) => a.number - b.number);
