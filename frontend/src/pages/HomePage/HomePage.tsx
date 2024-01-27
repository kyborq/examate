import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../assets/icons";
import { ActionButton } from "../../components";
import { Logo } from "../../layouts";
import { InviteField } from "./components";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/editor");
  };

  return (
    <>
      <Logo />
      <InviteField />
      <ActionButton
        icon={<LeftIcon />}
        title="Создать"
        onClick={handleCreate}
      />
    </>
  );
};
