import react, { useState } from 'react';
import { Button, ObjectPage, DynamicPageHeader, List, StandardListItem, Table, TableColumn, TableRow, TableCell, Bar, MediaGallery, MediaGalleryItem, FlexBox, ObjectPageSection, Form, MessageStrip, ObjectStatus, BreadcrumbsItem, ObjectPageSubSection, Link, Label, Breadcrumbs, FormGroup, FormItem, Text, DynamicPageTitle } from '@ui5/webcomponents-react';
import Title from '@ui5/webcomponents/dist/Title';
export default function ProjectList() {
  return <ObjectPage
    footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Reject</Button></>} />}
    headerContent={<DynamicPageHeader>
      <FlexBox alignItems="Center" wrap="Wrap">
        <FlexBox direction="Column">
          {/* <Title>PROPOSED SUPPLY INSTALLATION  AND COMMISSIONING OF POWER LINE AND METERING SUBSTATION FOR LAMU PORT</Title> */}
        <Link>+33 6 4512 5158</Link>
        <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
        <Link href="https://github.com/SAP/ui5-webcomponents-react">https://github.com/SAP/ui5-webcomponents-react</Link>
        </FlexBox>
        <FlexBox direction="Column" style={{ padding: '10px' }}>
          <Label>San Jose</Label>
          <Label>California, USA</Label>
          </FlexBox>
          </FlexBox>
        

          </DynamicPageHeader>}
    headerContentPinnable
    // headerTitle={<DynamicPageTitle actions={<>
    // <Button design="Emphasized">Primary Action</Button>
    // <Button>Action</Button></>} 
    // breadcrumbs={<Breadcrumbs><BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
    // <BreadcrumbsItem>My Team</BreadcrumbsItem>
    // <BreadcrumbsItem>Employee Details</BreadcrumbsItem>
    // </Breadcrumbs>} 
    // expandedContent={<MessageStrip>Information (only visible if header content is expanded)</MessageStrip>} header="Denise Smith" showSubHeaderRight 
    // snappedContent={<MessageStrip>Information (only visible if header content is collapsed/snapped)</MessageStrip>} subHeader="Senior UI Developer">
    //   <ObjectStatus state="Success">employed</ObjectStatus></DynamicPageTitle>}
    image="https://sap.github.io/ui5-webcomponents-react/assets/Person-e8B6nScF.png"
    imageShapeCircle
    onPinnedStateChange={function _a() { }}
    onSelectedSectionChange={function _a() { }}
    onToggleHeaderContent={function _a() { }}
    selectedSectionId="goals"
    showHideHeaderButton
    style={{
      height: '700px',
      height: "100vh",
      position: "absolute",
      top: "0px",
      bottom: "0px",
    }}
  >
    <ObjectPageSection
      aria-label="Executed works, Observations and remarks"
      id="goals"
      titleText="Executed works, Observations and remarks"
    >
         <ObjectPageSubSection
        aria-label="Construction Activities"
        id="personal-payment-information"
        titleText="Construction Activities"
      >
      <Table
        columns={<><TableColumn style={{ width: '12rem' }}><Label>Product</Label></TableColumn><TableColumn minWidth={800} popinText="Supplier"><Label>Supplier</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Dimensions"><Label>Dimensions</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Weight"><Label>Weight</Label></TableColumn><TableColumn><Label>Price</Label></TableColumn></>}
        onLoadMore={function _a() { }}
        onPopinChange={function _a() { }}
        onRowClick={function _a() { }}
        onSelectionChange={function _a() { }}
      >
        <TableRow>
          <TableCell>
            <Label>
              Notebook Basic
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              Very Best Screens
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              30 x 18 x 3cm
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              4.2KG
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              956EUR
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Label>
              Notebook Basic 17HT-1001
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              Very Best Screens
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              29 x 17 x 3.1cm
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              4.5KG
            </Label>
          </TableCell>
          <TableCell>
            <Label>
              1249EUR
            </Label>
          </TableCell>
        </TableRow>
      </Table>
      </ObjectPageSubSection>
      <ObjectPageSubSection
        // actions={<><Button design="Emphasized" style={{ minWidth: '120px' }}>Custom Action</Button><Button design="Transparent" icon="action-settings" tooltip="settings" /><Button design="Transparent" icon="download" tooltip="download" /></>}
        aria-label="HSE ACTIVITIES"
        id="personal-connect"
        titleText="HSE ACTIVITIES"
      >
        <List
          growing="None"
          headerText="List with StandardListItems"
          mode="None"
          onItemClick={function _a() { }}
          onItemClose={function _a() { }}
          onItemDelete={function _a() { }}
          onItemToggle={function _a() { }}
          onLoadMore={function _a() { }}
          onSelectionChange={function _a() { }}
          separators="All"
        >
          <StandardListItem additionalText="3">
            List Item 1
          </StandardListItem>
          <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem>
        </List>
      </ObjectPageSubSection>
      <ObjectPageSubSection
        aria-label="Milestones"
        id="personal-payment-info"
        titleText="Milestones"
      >
        <List
          growing="None"
          headerText="List with StandardListItems"
          mode="None"
          onItemClick={function _a() { }}
          onItemClose={function _a() { }}
          onItemDelete={function _a() { }}
          onItemToggle={function _a() { }}
          onLoadMore={function _a() { }}
          onSelectionChange={function _a() { }}
          separators="All"
        >
          <StandardListItem additionalText="3">
            List Item 1
          </StandardListItem>
          <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem>
        </List>
      </ObjectPageSubSection>
      <ObjectPageSubSection
        aria-label="Summary of Lost Days "
        id="personal-payment-informatio"
        titleText="Summary of Lost Days "
      >
        <List
          growing="None"
          headerText="List with StandardListItems"
          mode="None"
          onItemClick={function _a() { }}
          onItemClose={function _a() { }}
          onItemDelete={function _a() { }}
          onItemToggle={function _a() { }}
          onLoadMore={function _a() { }}
          onSelectionChange={function _a() { }}
          separators="All"
        >
          <StandardListItem additionalText="3">
            List Item 1
          </StandardListItem>
          <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem>
        </List>
      </ObjectPageSubSection>
      <ObjectPageSubSection
        aria-label="Milestones"
        id="personal-payment"
        titleText="Milestones"
      >
        <List
          growing="None"
          headerText="List with StandardListItems"
          mode="None"
          onItemClick={function _a() { }}
          onItemClose={function _a() { }}
          onItemDelete={function _a() { }}
          onItemToggle={function _a() { }}
          onLoadMore={function _a() { }}
          onSelectionChange={function _a() { }}
          separators="All"
        >
          <StandardListItem additionalText="3">
            List Item 1
          </StandardListItem>
          <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem>
        </List>
      </ObjectPageSubSection>
    </ObjectPageSection>
    <ObjectPageSection
      aria-label="personal-connect"
      id="personal-connected"
      titleText="Manpower and Visitor Status"
    >
      <ObjectPageSubSection
        // actions={<><Button design="Emphasized" style={{ minWidth: '120px' }}>Custom Action</Button><Button design="Transparent" icon="action-settings" tooltip="settings" /><Button design="Transparent" icon="download" tooltip="download" /></>}
        aria-label="Man Power"
        id="personal-connect-man"
        titleText="Man Power"
      >
        <List
          growing="None"
          headerText="List with StandardListItems"
          mode="None"
          onItemClick={function _a() { }}
          onItemClose={function _a() { }}
          onItemDelete={function _a() { }}
          onItemToggle={function _a() { }}
          onLoadMore={function _a() { }}
          onSelectionChange={function _a() { }}
          separators="All"
        >
          <StandardListItem additionalText="3">
            List Item 1
          </StandardListItem>
          <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem>
        </List>
      </ObjectPageSubSection>
      <ObjectPageSubSection
        aria-label="Equipment"
        id="personal-payment-information-man"
        titleText="Equipment"
      >
        <List
          growing="None"
          headerText="List with StandardListItems"
          mode="None"
          onItemClick={function _a() { }}
          onItemClose={function _a() { }}
          onItemDelete={function _a() { }}
          onItemToggle={function _a() { }}
          onLoadMore={function _a() { }}
          onSelectionChange={function _a() { }}
          separators="All"
        >
          <StandardListItem additionalText="3">
            List Item 1
          </StandardListItem>
          <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem>
        </List>
      </ObjectPageSubSection>
    </ObjectPageSection>
    <ObjectPageSection
      aria-label="Progress photographs"
      id="employment"
      titleText="Progress photographs"
    >
      <MediaGallery
        layout="Auto"
        menuHorizontalAlign="Left"
        menuVerticalAlign="Bottom"
        onDisplayAreaClick={function _a() { }}
        onOverflowClick={function _a() { }}
        onSelectionChange={function _a() { }}
      >
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1022.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1030.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-2002.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-2026.jpg" />
        </MediaGalleryItem>
      </MediaGallery>
    </ObjectPageSection>
  </ObjectPage>

}