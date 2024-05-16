import Reac, { useState } from "react";
import "./MembershipStyles.css";
import { useForm } from "react-hook-form";

function MembershipForm() {
  const [file, setFile] = useState();
  function getfile(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  const [file1, setFile1] = useState();
  function getfile1(event) {
    setFile1(URL.createObjectURL(event.target.files[0]));
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="from-container">
      <h1>MemberShip Registration Form</h1>
      <form>
        <div className="Photo">
          <lable>Upload Your Photo Here</lable>
          <input type="file" onChange={getfile1}></input>
          <img src={file1} />
        </div>
        <input placeholder="First-Name" />
        <input placeholder="Midle-Name" />
        <input placeholder="Last-Name" />

        <div className="form-group">
          <lable htmlFor="gender" className="form-label">
            Gender
          </lable>
          <div className="gender-radio">
            <div>
              <input type="radio" name="gender" value="male" />
              <lable htmlFor="male">Male</lable>
            </div>
            <div>
              <input type="radio" name="gender" value="female" />
              <lable htmlFor="female">Female</lable>
            </div>
          </div>
          <div className="Date-picker">
            <lable htmlFor="date of birth" className="form-date">
              Date of birth
            </lable>
            <input type="date" />
          </div>
          <input placeholder="Nationality" />
          <div className="form-group">
            <label htmlFor="educational-level" className="form-label">
              Educational-level
            </label>
            <select className="form-select" name="educational-level">
              <option value="bsc">BSC</option>
              <option value="msc">MSC</option>
              <option value="mph">MPH</option>
              <option value="phd">PHD</option>
            </select>
          </div>
          <div className="Date-picker">
            <lable htmlFor="graduation date" className="form-date">
              Graduation date
            </lable>
            <input type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="field of Study" className="form-label">
              Field of Study
            </label>
            <select className="form-select" name="field of Study">
              <option value="ho">HO</option>
              <option value="lab">Lab</option>
              <option value="nurse">Nurse</option>
              <option value="medicine">Medicine</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="dental">Dental</option>
              <option value="radiology">Radiology</option>
              <option value="midwife">Midwife</option>
              <option value="other">Other</option>
            </select>
          </div>
          <input placeholder="Current job " />
          <input placeholder="Employer" />
          <input placeholder="City /Region" />
          <input placeholder="P.o.Box" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <input placeholder="Fax" />
          <div className="form-group">
            <label htmlFor="Membership status" className="form-label">
              Membership Status
            </label>
            <select className="form-select" name="membership status">
              <option value="regular">Regular</option>
              <option value="life member">Life Member</option>
              <option value="affiliate member">Affiliate Member</option>
              <option value="national ins/org">National Ins/Org</option>
              <option value="international ins/org">
                International Ins/Org
              </option>
              <option value="membership outside ethiopia">
                Membership Outside Ethiopia
              </option>
              <option value="student member">Student Member</option>
              <option value="honorary member">Honorary Member</option>
            </select>
          </div>
          <lable>Upload Banck Bill Photo here</lable>
          <input type="file" onChange={getfile}></input>
          <img src={file} />
          <button>Submit</button>
        </div>
      </form>

      <h3> Membership Status and annual fee:</h3>
      <ul>
        <li>
          {" "}
          Regular Members Birr 300.00 Health officers who pay membership fee
          annually.{" "}
        </li>
        <li>
          {" "}
          Life member Birr 1000.00 Health officers who pay membership fee only
          once.{" "}
        </li>
        <li>
          {" "}
          Affiliate Member Birr200.00 Individual who is not eligible for regular
          membership.
        </li>
        <li>
          {" "}
          National Ins/Org Birr 2000.00 Inst/Org in Ethiopia that espouses the
          mission and Objectives of PHOA annually.
        </li>
        <li>
          {" "}
          International Inst/Org £ 500.00 Inst/ Org outside Ethiopia espouse the
          mission and Objectives of PHOA-E.{" "}
        </li>
        <li>
          {" "}
          Membership outside Ethiopia £ 50 Health officer outside Ethiopia pays
          membership fee annually.{" "}
        </li>
        <li>
          {" "}
          Student member Birr 100.00 Student studying Health officer pays
          membership annually.
        </li>
        <li>
          {" "}
          Honorary member No Fee Retired regular or affiliate member with 10
          years.
        </li>
        <li>
          {" "}
          Membership in PHOA, who was a member in good standing at the time of
          retirement.
        </li>
        <li>
          The Public Health Officers Association of Ethiopias Bank Account is{" "}
          <strong>1000009593652</strong> Commercial Bank Of Ethiopia, Bole
          Medhanialem Branch, Addis Abeba.{" "}
        </li>
      </ul>
    </div>
  );
}

export default MembershipForm;
