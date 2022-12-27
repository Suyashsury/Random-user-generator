import React from "react";
import { LineInfo } from "../LineInfo/LineInfo";
import './SectionDetails.css';
export const SectionDetails = (props) => {
  return (
    <ul>
      <li>
        <section>
          <h6>Personal Info</h6>
          <LineInfo label="Title" value={props.detail.name.title}/>
          <LineInfo label="First name" value={props.detail.name.first}/>
          <LineInfo label="Last name" value={props.detail.name.last}/>
          <LineInfo label="Gender" value={props.detail.gender}/>
          <LineInfo label="Age" value={props.detail.dob.age}/>
        </section>
      </li>
      
    </ul>
  );
};
