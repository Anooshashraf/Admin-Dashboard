import { getNameInitials } from "@/utilities";
import type { AvatarProps } from "antd/lib";
import { Avatar as AntdAvatar } from "antd";

type Props = AvatarProps & {
  name?: string;
};

const CustomAvatar = ({ name = "", style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{
        backgroundColor: "#87d069",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name)}
    </AntdAvatar>
  );
};
 
export default CustomAvatar;
