import React, { useState } from "react";
import "./Templater.scss";
import Sidebar from "../components/Layout/Sidebar";
import ActionBar from "../components/ActionBar";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

const Templater = () => {
  const [previewExpanded, setPreviewExpanded] = useState(true);

  return (
    <div id="main-content">
      <Sidebar />
      <ActionBar />
      <div id="main-choice" className={!previewExpanded ? "expanded" : ""}>
        <div className="main-headings text-center">Templates</div>
        <Tabs>
          <TabList className="component-tabs">
            <Tab className="component-tab">Header</Tab>
            <Tab className="component-tab">Body</Tab>
            <Tab className="component-tab">Footer</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="components">
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
            </TabPanel>
            <TabPanel className="components">
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
            </TabPanel>
            <TabPanel className="components">
              <div className="template-component" />
              <div className="template-component" />
              <div className="template-component" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div id="main-preview" className={!previewExpanded ? "collapsed" : ""}>
        <div className="main-headings text-center">Preview</div>
        <div id="preview">
          <div className="iframe">
            <div
              className="preview-toggle"
              onClick={() => setPreviewExpanded(!previewExpanded)}
            >
              {previewExpanded ? (
                <FaLongArrowAltRight fill="#292929" />
              ) : (
                <FaLongArrowAltLeft fill="#292929" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templater;
