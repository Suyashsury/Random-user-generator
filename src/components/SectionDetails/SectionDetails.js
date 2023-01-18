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
        <section>
        <h6>Address</h6>
          <LineInfo label="Street" value={props.detail.location.street.name}/>
          <LineInfo label="City" value={props.detail.location.city}/>
          <LineInfo label="State" value={props.detail.location.state}/>
          <LineInfo label="Postcode" value={props.detail.location.postcode}/>
          <LineInfo label="Phone" value={props.detail.phone}/>
          </section>
      </li>
      
    </ul>
  );
};
