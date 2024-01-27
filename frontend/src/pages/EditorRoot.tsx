import { Outlet } from "react-router-dom";
import { Content, Header, Layout, Side } from "../layouts";
import { ActionButton, NavButton } from "../components";
import { ChatIcon, LeftIcon, SettingsIcon, ToolsIcon } from "../assets/icons";

export const EditorRoot = () => {
  return (
    <Layout>
      <Header>
        <ActionButton icon={<LeftIcon />} title="Опубликовать" />
      </Header>
      <Content>
        <Side>
          <NavButton icon={<ToolsIcon />} path="/new" title="Конструктор" />
          <NavButton
            icon={<SettingsIcon />}
            path="settings"
            title="Настройки"
          />
          <NavButton icon={<ChatIcon />} path="results" title="Результаты" />
        </Side>
        <Outlet />
      </Content>
    </Layout>
  );
};
