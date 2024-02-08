import React, { useEffect, useState } from "react";

import { getData, postdata } from "../Firebase/Function/Function";

const Form = () => {
     const [data, setdata] = useState({
          Name: "",
          Email: "",
          Phone: "",
          Note: "",
     });

     const onChangeinput = (e) => {
          setdata({ ...data, [e.target.name]: e.target.value });
     };
     const submitform = (e) => {
          e.preventDefault();
          postdata(data);
          setdata({
               Name: "",
               Email: "",
               Phone: "",
               Note: "",
          });
     };
     useEffect(() => {
          getData();
     }, []);

     return (
          <div>
               <div className="contact-us">
                    <form onSubmit={submitform}>
                         <label htmlFor="Name">
                              NAME  : &nbsp;
                         </label>
                         <input
                              id="Name"
                              name="Name"
                              required=""
                              type="text"
                              value={data.Name}
                              onChange={onChangeinput}
                         />
                         <br />

                         <label htmlFor="Email">
                              EMAIL : &nbsp;
                         </label>
                         <input
                              id="Email"
                              name="Email"
                              required=""
                              type="email"
                              value={data.Email}
                              onChange={onChangeinput}
                         />
                         <br />
                         <label htmlFor="Phone">PHONE  : &nbsp;</label>
                         <input
                              id="Phone"
                              name="Phone"
                              type="tel"
                              value={data.Phone}
                              onChange={onChangeinput}
                         />
                         <br />
                         <label htmlFor="Note">
                              YOUR MESSAGE  : &nbsp;
                         </label>
                         <textarea
                              id="Note"
                              name="Note"
                              required=""
                              value={data.Note}
                              onChange={onChangeinput}
                              rows="4"></textarea>
                         
                         <br />
                         <button id="Order">SUBMIT</button>
                    </form>
               </div>
          </div>
     );
};

export default Form;