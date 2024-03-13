import logo from './logo.svg';
import react,{useState} from 'react'
import './App.css';
import CreateDpr from './components/CreateDpr';
import ProjectList from './components/ProjectList';
import {ShellBar,StandardListItem,Table,TableRow,TableCell,TableColumn,Label,Avatar,Input,ShellBarItem,Icon } from '@ui5/webcomponents-react';
import jsonData from './components/data.json';

function App() {
  const [selectedDpr,setSelectedDpr]=useState(false)

  const handleDprSelect=(dprInfo)=>{
    setSelectedDpr(dprInfo)
  }
  return (
    <div className="App">
      <ShellBar
  // logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
  // menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item 3</StandardListItem></>}
  notificationsCount="10"
  onCoPilotClick={function _a(){}}
  onLogoClick={function _a(){}}
  onMenuItemClick={function _a(){}}
  onNotificationsClick={function _a(){}}
  onProductSwitchClick={function _a(){}}
  onProfileClick={function _a(){}}
  onSearchButtonClick={function _a(){}}
  primaryTitle="DPRs"
  // profile={<Avatar><img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-e8B6nScF.png" /></Avatar>}
  // searchField={<Input icon={<Icon interactive name="search"/>} showClearIcon/>}
  secondaryTitle=" DPRs"
  showCoPilot
  showNotifications
  showProductSwitch
>
  <ShellBarItem
    // count="3"
    icon="add"
    text="ShellBarItem"
  />
</ShellBar>

     <CreateDpr/>
   
     <Table
  accessibleName=""
  accessibleNameRef=""
  // busy
  busyDelay={0}
  columns={<><TableColumn style={{width: '12rem'}}><Label>Date</Label></TableColumn><TableColumn minWidth={800} popinText="Project ID"><Label>Project ID</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Project Name"><Label>Project Name</Label></TableColumn></>}
  mode="SingleSelect"
  onLoadMore={function _a(){}}
  onPopinChange={function _a(){}}
  onRowClick={function _a(){}}
  onSelectionChange={function _a(){}}
>
{
      jsonData.project_data.map((dpr)=>(
        <TableRow onClick={()=>handleDprSelect(dpr)}>
           <TableCell>
          <Label>
            {dpr.date}
          </Label>
        </TableCell>
        <TableCell>

          <Label>
            {dpr.project_id}
          </Label>
        </TableCell>
        <TableCell>
          <Label>
            {dpr.project_name}
          </Label>
        </TableCell>
     
      
      </TableRow>
      ))

     }
 

</Table>
    </div>
  );
}

export default App;
