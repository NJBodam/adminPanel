import React, {useState} from "react"
 
function GenerateToken() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [clientId, setClientId] = useState("");
    const [grantType, setGrantType] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [userData, setUserData] = useState("");
 
    const [disabledButton, setDisabledButton] = useState(false);
 
    async function sendCreateUserRequest(e) {
        e.preventDefault();
        const reqBody = {
            username: username,
            password: password,
            clientId: clientId.toUpperCase,
            grantType: grantType,
            clientSecret: clientSecret
 
        };
 
        const url = "yet-to-be-gotten";

        const userData = async (reqBody) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqBody)
            }).catch(err => alert(err));
            const data = await res.json();
            setUserData(data);
            return data;
        }
 
    }
   
    return (
        <div className="create-user-container">
            <div className="create-user">
                <p className="sign">Generate Token</p>
                <form className="form1">
                    <input type="text" className="username" align="center"
                    placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required/>
 
                    <input type="password" className="password" align="center"
                    placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
 
                    <input type="text" className="clientId" align="center"
                    placeholder="Client ID" value={clientId} onChange={(event) => setClientId(event.target.value)} required/>

                    <input type="text" className="grantType" align="center"
                    placeholder="Grant Type" value={grantType} onChange={(event) => setGrantType(event.target.value)} required/>
 
                    <input type="text" className="clientSecret" align="center"
                    placeholder="Client Secret" value={clientSecret} onChange={(event) => setClientSecret(event.target.value)} required/>
 
                    <button type="submit" className="submit" disabled={disabledButton} onClick={sendCreateUserRequest}>Submit</button>
                    <div>
                        <p>{userData}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default GenerateToken