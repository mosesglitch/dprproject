import react, { useState } from 'react';
import { Button, ObjectPage, DynamicPageHeader, List,Input,ComboBox,ComboBoxItem, Icon,ProgressIndicator, StandardListItem, Table, TableColumn, TableRow, TableCell, Bar, MediaGallery, MediaGalleryItem, FlexBox, ObjectPageSection, Form, MessageStrip, ObjectStatus, BreadcrumbsItem, ObjectPageSubSection, Link, Label, Breadcrumbs, FormGroup, FormItem, Text, DynamicPageTitle } from '@ui5/webcomponents-react';
import Title from '@ui5/webcomponents/dist/Title';
export default function ProjectList() {
  return <ObjectPage
    // footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Edit</Button><Button design="Negative">Save</Button></>} />}
    headerTitle={<DynamicPageTitle header="PROPOSED SUPPLY INSTALLATION  AND COMMISSIONING OF POWER LINE AND METERING SUBSTATION FOR LAMU PORT" showSubHeaderRight subHeader="51166"><ObjectStatus state="Success">KPA</ObjectStatus></DynamicPageTitle>}
    headerContent={<DynamicPageHeader>
      {/* headerContent={<DynamicPageHeader><FlexBox alignItems="Center" wrap="Wrap"><FlexBox direction="Column"><Link>+33 6 4512 5158</Link><Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link><Link href="https://github.com/SAP/ui5-webcomponents-react">https://github.com/SAP/ui5-webcomponents-react</Link></FlexBox><FlexBox direction="Column" style={{padding: '10px'}}><Label>San Jose</Label><Label>California, USA</Label></FlexBox></FlexBox></DynamicPageHeader>} */}
      {/* headerContentPinnable */}

      {/* <Title>PROPOSED SUPPLY INSTALLATION  AND COMMISSIONING OF POWER LINE AND METERING SUBSTATION FOR LAMU PORT</Title> */}
      {/* <FlexBox alignItems="Center" wrap="Wrap">
        <FlexBox direction="Column">
        <Label>+33 6 4512 5158</Label>
        <Label href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Label>
        <Label href="https://github.com/SAP/ui5-webcomponents-react">https://github.com/SAP/ui5-webcomponents-react</Label>
        </FlexBox>
        <FlexBox direction="Column" style={{ padding: '10px' }}>
          <Label>Lamu</Label>
          <Label>KPA,Lamu</Label>
          </FlexBox>
          </FlexBox> */}
      <Form
        columnsL={3}
        columnsM={2}
        columnsXL={3}
        labelSpanL={6}
        labelSpanM={6}
        labelSpanXL={6}
        style={{
          // alignItems: 'baseline'
        }}
      >
        <FormItem label="Start Date">
          <Text>
            1/Feb/2023
          </Text>
        </FormItem>
        <FormItem label="Expected Complation Date">
          <Text>
            28/08/2024
          </Text>
        </FormItem>
        <FormItem label="Contract Period">
          <Text>
            1 year
          </Text>
        </FormItem>
        <FormItem label="Days Remaining">
          <Text>
            169
          </Text>
        </FormItem>
        <FormItem label="Days no. of project">
          <Text>
            402
          </Text>
        </FormItem>
        <FormItem label="Tender NO">
          <Text>
            KPA/079/2021-22/EE
          </Text>
        </FormItem>
      </Form>


    </DynamicPageHeader>}
    headerContentPinnable
    // headerTitle={<DynamicPageTitle actions={<>
    // <Button design="Emphasized">Primary Action</Button>
    // <Button>Action</Button></>} 
    // breadcrumbs={<Breadcrumbs><BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
    // <BreadcrumbsItem>My Team</BreadcrumbsItem>
    // <BreadcrumbsItem>Employee Details</BreadcrumbsItem>
    // </Breadcrumbs>} 
    expandedContent={<ProgressIndicator
      value={50}
      valueState="None"
    />} 
    header="Denise Smith" showSubHeaderRight 
    // snappedContent={<MessageStrip>Information (only visible if header content is collapsed/snapped)</MessageStrip>} subHeader="Senior UI Developer">
    //   <ObjectStatus state="Success">employed</ObjectStatus></DynamicPageTitle>}
    image="https://www.kpa.co.ke/Style%20Library/images/logo_dark.jpg"
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
      top: "45px",
      bottom: "0px",
    }}
  >
    <ObjectPageSection
      aria-label="Executed works, Observations and remarks"
      id="goals"
      titleText="Executed works, Observations and remarks"
    >
      <ObjectPageSubSection
        actions={<><Button design="Emphasized" style={{ minWidth: '30px' }}><Icon name="edit" style={{ color: "white" }} /></Button><Button design="Transparent" icon="action-settings" tooltip="settings" /><Button design="Transparent" icon="download" tooltip="download" /></>}

        aria-label="Construction Activities"
        id="personal-payment-information"
        titleText="Construction Activities"
      >
        <Table
          columns={<><TableColumn style={{ width: '200px' }}><Label>TODAY ACTIVITIES
          </Label></TableColumn>
            <TableColumn minWidth={400} popinText="Supplier">
              <Label>Planned
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
            <ComboBox
                  icon={<Icon name="employee" />}
                  onChange={function _a(){}}
                  onInput={function _a(){}}
                  onSelectionChange={function _a(){}}
                  valueState="None"
                  style={{width:"100%"}}
                >
                  <ComboBoxItem text="ComboBox Entry 1" />
                  <ComboBoxItem text="ComboBox Entry 2" />
                  <ComboBoxItem text="ComboBox Entry 3" />
                  <ComboBoxItem text="ComboBox Entry 4" />
                  <ComboBoxItem text="ComboBox Entry 5" />
                </ComboBox>
            </TableCell>
            <TableCell>
            <Input type="Text" />

            </TableCell>
            <TableCell>
            <Input type="Text" />

            </TableCell>
            <TableCell>
            <Input type="Text" />

            </TableCell>
            <TableCell>
            <Input type="Text" />

            </TableCell>
          </TableRow>
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
        actions={<><Button design="Emphasized" style={{ minWidth: '30px' }}><Icon name="edit" style={{ color: "white" }} /></Button><Button design="Transparent" icon="action-settings" tooltip="settings" /><Button design="Transparent" icon="download" tooltip="download" /></>}
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
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7vEne6Oqs3cYRbpn27wwSX0MXSsXiHvXfXkBp3AILq_4IxZzeTeI5CAlw4ro8Qcf5dA&usqp=CAU" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://www.ecmag.com/images/default-source/articles/5b64c477-c8df-4b2f-8e48-b18d224fb4ad.jpeg?sfvrsn=2a459d0e_0" />
        </MediaGalleryItem>
        <MediaGalleryItem>
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://www.hashmicro.com/blog/wp-content/uploads/2022/10/Tools-16.jpg" />
        </MediaGalleryItem>
      </MediaGallery>
    </ObjectPageSection>
  </ObjectPage>

}