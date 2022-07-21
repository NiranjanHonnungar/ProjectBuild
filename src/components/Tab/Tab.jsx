import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { data } from "../../constants";
const Tab = ({ children, active }) => {
    [activeTab, setActiveTab] = useState(active);
    [tabsData, setTabsData] = useState([])

    useEffect(() => {
        data = []
        children.map(element => {

            const { props: { title, content } } = element;
            data.push({ title, content })
        })
        setTabsData(data);
    }, [children])
    return (
        // <div className="tabs">
        //     <ul className="tabs-links">
        //         {tabsData.map(tab, idx => {
        //             <li className=`tabs-links__link ${idx == active}` >
        //     })
        //         }
        //         <ul />
        // </div>
    );
}

export default Tab;