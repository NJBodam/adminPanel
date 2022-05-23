import React, {useState, useEffect, useCallback} from "react"

function CreateUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [moduleId, setModuleId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [userData, setUserData] = useState({});
    const [code, setCode] = useState();
    const [message, setMessage] = useState();
    const [reference, setReference] = useState();
 
    const [disabledButton, setDisabledButton] = useState(false);
 
    const sendCreateUserRequest = useCallback(e => {
        e.preventDefault();
        const reqBody = {
            username: username,
            password: password,
            moduleId: moduleId,
            clientSecret: clientSecret
 
        };
 
        const url = "yet-to-be-gotten";

        const getUserData = async (reqBody) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqBody)
            }).catch(err => alert(err));
            const data = await res.json();
            setUserData(JSON.parse(data))
            return data;
        }
        getUserData(reqBody);
    }, [clientSecret, moduleId, password, username])

    useEffect((e) => {
        const {code, message, reference} = userData;
        setCode(code); setMessage(message); setReference(reference);
    }, 
    [sendCreateUserRequest, userData])

    const response = (
        <>
            <p>Code: {code}</p>
            <p>Message: {message}</p>
            <p>Reference: {reference}</p>
        </>
    )
   
    const resBody = code || message || reference;
    return (
        <div className="create-user-container">
            <div className="create-user">
                <p className="sign">Create User</p>
                <form className="form1">
                    <input type="text" className="username" align="center"
                    placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required/>
 
                    <input type="password" className="password" align="center"
                    placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
 
                    <input type="text" className="moduleId" align="center"
                    placeholder="Module ID" value={moduleId} onChange={(event) => setModuleId(event.target.value)} required/>
 
                    <input type="text" className="clientSecret" align="center"
                    placeholder="Client Secret" value={clientSecret} onChange={(event) => setClientSecret(event.target.value)} required/>
 
                    <button type="submit" className="submit" disabled={disabledButton} onClick={sendCreateUserRequest}>Submit</button>
                    <div>
                        {resBody && response}
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default CreateUser