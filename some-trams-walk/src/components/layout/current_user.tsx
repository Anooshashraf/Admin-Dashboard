import { Button, Popover } from "antd";

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }} // to make sure the pop up appears on top
      >
        TEST
      </Popover>
    </>
  );
};

export default CurrentUser;
