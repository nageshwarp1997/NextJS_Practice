import { ButtonTypes } from "../navbar/types";

export const Button = ({
  content,
  type = "primary",
  style,
  onClick,
  id,
  wrapperClassName,
  className,
  leftIcon,
  rightIcon,
  loadingContent,
  submit,
  disabled,
}: ButtonTypes) => {
  // This will return className according to conditions
  const buttonCss = () => {
    if (type === "primary") {
      return "primaryBtn";
    } else if (type === "solid") {
      return "solidBtn";
    } else if (type === "outline") {
      return "outlineBtn";
    } else {
      return "";
    }
  };
  const buttonClassName = buttonCss();
  return (
    <div
      className={`buttonWrap ${
        type === "primary"
          ? "bg-button-border shadow-primary-btn hover:shadow-primary-btn-hover p-0.5"
          : type === "solid"
          ? "bg-[#CCCCCC] shadow-solid-btn hover:shadow-solid-btn-hover p-0.5"
          : "bg-white p-px"
      } z-[1] ${wrapperClassName}`}
    >
      <button
        id={id}
        type={submit ? "submit" : "button"}
        onClick={onClick}
        style={style}
        className={`${buttonClassName} ${className} ${
          loadingContent || disabled ? "pointer-events-none" : ""
        }`}
        disabled={loadingContent ? true : false}
      >
        {loadingContent ? (
          loadingContent
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {content}
            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    </div>
  );
};
