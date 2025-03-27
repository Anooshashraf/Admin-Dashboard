import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & {
  name?: string;
};

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={"Anoosha Ashraf"}
      style={{
        backgroundColor: "#87d069",
        display: "flex",
        alignItems: "center",
        border: "non",
        ...style,
      }}
      {...rest}
    >
      {name}
    </AntdAvatar>
  );
};

export default CustomAvatar;
