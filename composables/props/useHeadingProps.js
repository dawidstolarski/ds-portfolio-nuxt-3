export const useHeadingProps = () => {
  const defineHeadingProps = () => {
    return {
      tag: {
        type: String,
        default: "h1",
      },
      size: {
        type: String,
        default: "xl",
        validator: (value) => {
          return [
            "5xl",
            "4xl",
            "3xl",
            "2xl",
            "xl",
            "lg",
            "md",
            "sm",
            "xs",
          ].includes(value);
        },
      },
      sizeMobile: {
        type: String,
        default: "3xl",
        validator: (value) => {
          return [
            "5xl",
            "4xl",
            "3xl",
            "2xl",
            "xl",
            "lg",
            "md",
            "sm",
            "xs",
          ].includes(value);
        },
      },
      weight: {
        type: String,
        default: "bold",
        validator: (value) => {
          return [
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
          ].includes(value);
        },
      },
    };
  };

  const createTag = (props) => props.tag;

  const createSize = (props) => {
    switch (props.size) {
      case "5xl":
        return "text-5xl";
      case "4xl":
        return "text-4xl";
      case "3xl":
        return "text-3xl";
      case "2xl":
        return "text-2xl";
      case "xl":
        return "text-xl";
      case "lg":
        return "text-lg";
      case "md":
        return "text-md";
      case "sm":
        return "text-sm";
      case "xs":
        return "text-xs";
      default:
        return "text-xl";
    }
  };

  const createSizeMobile = (props) => {
    switch (props.sizeMobile) {
      case "5xl":
        return "xs:max-sm:text-3xl";
      case "4xl":
        return "xs:max-sm:text-2xl";
      case "3xl":
        return "xs:max-sm:text-xl";
      case "2xl":
        return "xs:max-sm:text-lg";
      case "xl":
        return "xs:max-sm:text-md";
      case "lg":
        return "xs:max-sm:text-md";
      case "md":
        return "xs:max-sm:text-sm";
      case "sm":
        return "xs:max-sm:text-xs";
      case "xs":
        return "xs:max-sm:text-[8px]";
      default:
        return "xs:max-sm:text-md";
    }
  };

  const createWeight = (props) => {
    switch (props.weight) {
      case "light":
        return "font-light";
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      case "extrabold":
        return "font-extrabold";
      case "black":
        return "font-black";
      default:
        return "font-medium";
    }
  };

  const createCTag = (props) => computed(() => createTag(props));

  const createCSizeDesktop = (props) => computed(() => createSize(props));

  const createCSizeMobile = (props) => computed(() => createSizeMobile(props));

  const createCWeight = (props) => computed(() => createWeight(props));

  return {
    defineHeadingProps,
    createCTag,
    createCSizeDesktop,
    createCSizeMobile,
    createCWeight,
  };
};
