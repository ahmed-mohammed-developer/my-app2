import { useState } from "react";

export default function MyForm() {
    
    const [formInputs, setFormInputs] = useState({
        name: '',
         email: '',
          generalInfo: '',
           isStudent: false,
           country: "",
           status: ""
        });

        function handleCheckBoxChange(event) {
            setFormInputs({...formInputs, isStudent: event.target.checked})
        }
    return (
        <>
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(formInputs);
        }}
        style={{margin: "300px"}}
        >

            <label>name</label>
            <input
                value={formInputs.name}
                onChange={(event) => {
                    setFormInputs({...formInputs, name: event.target.value});
                }}
            />

            <hr />

            <label>email</label>
            <input
                value={formInputs.email}
                onChange={(event) => {
                    setFormInputs({...formInputs, email: event.target.value});
                }}
            />

            <hr />

            <label>Are you Ahmed</label>
            <input type="checkbox" checked={formInputs.isStudent}
            onChange={handleCheckBoxChange}/>
            <hr />

            <label>General Info</label>
            <hr />

                <select value={formInputs.country}
                onChange={(event) => {
                    setFormInputs({...formInputs, country: event.target.value})
                }}
                >
                    <option>KSA</option>
                    <option>eSD</option>
                    <option>GFD</option>
                    <option>REW</option>
                </select>
                <hr />
                <div>
                    <input
                    value="Student"
                     type="radio"
                     name="status"
                      checked={formInputs.status === "Student"}
                      onChange={(event) => {setFormInputs ({...formInputs, status: event.target.value})}}

                      />
                    Student
                    <input
                    value="Techer"
                     type="radio"
                     name="status"
                      checked={formInputs.status === "Techer"}
                      onChange={(event) => {setFormInputs ({...formInputs, status: event.target.value})}}
                      />
                    Techer
                    </div>
                <hr />

            <hr />
            <textarea
                value={formInputs.generalInfo}
                onChange={(event) => {
                    setFormInputs({...formInputs, generalInfo: event.target.value});
                }}
            >
            </textarea>

            <button type="submit">Submit</button>
        </form>
        </>
    );
}
