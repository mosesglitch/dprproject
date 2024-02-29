import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import {ShellBar,StandardListItem,Avatar,Input,ShellBarItem,Icon } from '@ui5/webcomponents-react';

function App() {
  return (
    <div className="App">
      <ShellBar
  logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
  menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item 3</StandardListItem></>}
  notificationsCount="10"
  onCoPilotClick={function _a(){}}
  onLogoClick={function _a(){}}
  onMenuItemClick={function _a(){}}
  onNotificationsClick={function _a(){}}
  onProductSwitchClick={function _a(){}}
  onProfileClick={function _a(){}}
  onSearchButtonClick={function _a(){}}
  primaryTitle="Shell Bar"
  profile={<Avatar><img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-e8B6nScF.png" /></Avatar>}
  searchField={<Input icon={<Icon interactive name="search"/>} showClearIcon/>}
  secondaryTitle="Fiori 3 Shell Bar"
  showCoPilot
  showNotifications
  showProductSwitch
>
  <ShellBarItem
    count="3"
    icon="add"
    text="ShellBarItem"
  />
</ShellBar>
     <ProjectList/>
    </div>
  );
}

export default App;
