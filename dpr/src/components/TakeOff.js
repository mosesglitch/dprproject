import react, { useState } from 'react';
import { Button, ObjectPage, DynamicPageHeader, List, StandardListItem, Table, TableColumn, TableRow, TableCell, Bar, MediaGallery, MediaGalleryItem, FlexBox, ObjectPageSection, Form, MessageStrip, ObjectStatus, BreadcrumbsItem, ObjectPageSubSection, Link, Label, Breadcrumbs, FormGroup, FormItem, Text, DynamicPageTitle } from '@ui5/webcomponents-react';
import Title from '@ui5/webcomponents/dist/Title';
export default function ProjectList() {
  return <ObjectPage
    footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Reject</Button></>} />}
    headerContent={<DynamicPageHeader>
      {/* <FlexBox alignItems="Center" wrap="Wrap">
        <FlexBox direction="Column"> */}
          {/* <Title>PROPOSED SUPPLY INSTALLATION  AND COMMISSIONING OF POWER LINE AND METERING SUBSTATION FOR LAMU PORT</Title> */}
        {/* <Link>+33 6 4512 5158</Link>
        <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
        <Link href="https://github.com/SAP/ui5-webcomponents-react">https://github.com/SAP/ui5-webcomponents-react</Link>
        </FlexBox>
        <FlexBox direction="Column" style={{ padding: '10px' }}>
          <Label>San Jose</Label>
          <Label>California, USA</Label>
          </FlexBox>
          </FlexBox> */}
        

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
        columns={<><TableColumn style={{ width: '12rem' }}><Label>TODAY ACTIVITIES
        </Label></TableColumn>
        <TableColumn minWidth={800} popinText="Supplier">
          <Label>TODAY ACTIVITIES
</Label></TableColumn>
          <TableColumn demandPopin minWidth={600} popinText="Dimensions">
            <Label>Achieved
Today</Label>
            </TableColumn>
            <TableColumn demandPopin minWidth={600} popinText="Weight">
              <Label>Cumulative</Label>
              </TableColumn>
              <TableColumn>
                <Label>% Complete</Label>
                </TableColumn></>}
        onLoadMore={function _a() { }}
        onPopinChange={function _a() { }}
        onRowClick={function _a() { }}
        onSelectionChange={function _a() { }}
      >
        <TableRow>
          <TableCell>
            <Label>
            "Holes Digging Hoarding of dug holes to secure them for the long pause of work"

            </Label>
          </TableCell>
          <TableCell>
            <Label>
            268
            </Label>
          </TableCell>
          <TableCell>
            <Label>
            532
            </Label>
          </TableCell>
          <TableCell>
            <Label>
           67%
            </Label>
          </TableCell>
          <TableCell>
            <Label>
            "2.4 Meters deep 

Pegs 449, 450"	
	
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Label>
            "
 Bush clearing
"
            </Label>
          </TableCell>
          <TableCell>
            <Label>
            16.9KM
            </Label>
          </TableCell>
          <TableCell>
            <Label>
            21KM
            </Label>
          </TableCell>
          <TableCell>
            <Label>
             50%
            </Label>
          </TableCell>
          <TableCell>
            <Label>
            Ongoing	
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
          // headerText="List with StandardListItems"
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
           Gloves are tearing off quickly, better quality required														
          </StandardListItem>
          {/* <StandardListItem additionalText="2">
            List Item 2
          </StandardListItem>
          <StandardListItem additionalText="1">
            List Item 3
          </StandardListItem> */}
        </List>
      </ObjectPageSubSection>
      <ObjectPageSubSection
        aria-label="Milestones"
        id="personal-payment-info"
        titleText="Milestones"
      >
        <List
          growing="None"
          // headerText="List with StandardListItems"
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
          Two number Project Billboard Installed														
          </StandardListItem>
          <StandardListItem additionalText="2">
          Cadstral maps acquired														
          </StandardListItem>
          <StandardListItem additionalText="1">
          Walkover survey complete														
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
          // headerText="List with StandardListItems"
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
          October 24th 2023, Morning hours experienced heavy rains, so morning hours of the day lost (from 9:00 AM to 12 Noon)														
          </StandardListItem>
          <StandardListItem additionalText="2">
          1st November 2023, Morning hours experienced heavy rains, so morning hours of the day lost (from 8:30 AM to 12 Noon)														
          </StandardListItem>
          <StandardListItem additionalText="1">
          2nd November 2023, Morning hours experienced heavy rains, so morning hours of the day lost (from 7:00 AM to 1PM)														
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
          // headerText="List with StandardListItems"
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
          Two number Project Billboard Installed														
          </StandardListItem>
          <StandardListItem additionalText="2">
          Cadstral maps acquired														
          </StandardListItem>
          <StandardListItem additionalText="1">
          Walkover survey complete														
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
          // headerText="List with StandardListItems"
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
          Managers
          </StandardListItem>
          <StandardListItem additionalText="2">
          Engineers/ Supervisors/ QAQC
          </StandardListItem>
          <StandardListItem additionalText="1">
          HSE/Office/Stores
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
          // headerText="List with StandardListItems"
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
          Double Cab
          </StandardListItem>
          <StandardListItem additionalText="2">
          Tarimbo
          </StandardListItem>
          <StandardListItem additionalText="1">
          Spades
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
          <img src="https://www.ecmag.com/images/default-source/articles/5b64c477-c8df-4b2f-8e48-b18d224fb4ad.jpeg?sfvrsn=2a459d0e_0" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="data:image/jpeg;base64,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" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD4D22AQHma1ipBVX8zA%2Ffeedshare-shrink_800%2F0%2F1688041579796%3Fe%3D2147483647%26v%3Dbeta%26t%3DWqM8n_Th7BfnTZfhF-g-DwOYYxr5brWL9Q9llchVLQU&tbnid=ordUuAbVUImhUM&vet=10CAQQxiAoAmoXChMIkMf5kInThAMVAAAAAB0AAAAAEAg..i&imgrefurl=https%3A%2F%2Fke.linkedin.com%2Fcompany%2Ffairface-construction-limited&docid=8rAv57_cyI2rBM&w=800&h=671&itg=1&q=site%20work&ved=0CAQQxiAoAmoXChMIkMf5kInThAMVAAAAAB0AAAAAEAg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://www.ecmag.com/images/default-source/articles/5b64c477-c8df-4b2f-8e48-b18d224fb4ad.jpeg?sfvrsn=2a459d0e_0" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="data:image/jpeg;base64,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" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://media.istockphoto.com/id/1455690288/photo/unrecognisable-engineers-on-construction-site-high-angle-view-of-employees-in-construction.webp?b=1&s=170667a&w=0&k=20&c=K6lwwNj_cSuWlSs3rp81F3O8hiyl-QRAl-woDMwzRLA=" />
        </MediaGalleryItem>
      </MediaGallery>
    </ObjectPageSection>
  </ObjectPage>

}