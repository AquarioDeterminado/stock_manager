import webReq from "./utils/WebRequests";

function mustBeLoggedIn(navigate) {
    const authKey = localStorage.getItem("authKey");
    if (authKey === null) {
        //navigate("/login");
    } else {
        const request = new Request('http://localhost:3000/users/login/auth', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({authKey: localStorage.getItem("authKey")}),
        });

        try {
            webReq.expect(request, (res, status) => {
                if (status === 200) {
                    //localStorage.setItem("authKey", res.user.id);
                } else {
                    navigate("/login");
                    console.log("Error authenticating user", res.status);
                }
            });
        }catch (error) {
            navigate("/login");
            console.log("Error authenticating user", error);
        }
    }
}

async function getPermissions() {
    var permissions = null;

    const request =  new Request('http://localhost:3000/users/permissions/get', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({authKey: localStorage.getItem("authKey")}),
    });

    try {
        await webReq.expect(request, (res, status) => {
            if (status === 200) {
                console.log("Permissions found", res.permissions);
                permissions = res.permissions;
            } else {
                console.log("Permissions not found", res.status);
            }
        });
    } catch (error) {
        console.log("Error finding user", error);
    }
    return permissions;
}

function logInUserPass(inputs, navigate)  {
    const request =  new Request('http://localhost:3000/users/login/', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({username: inputs.username, password: inputs.password})
    });

    try {
        webReq.expect(request, (res, status) => {
            if (status === 200) {
                console.log("User found");
                localStorage.setItem("authKey", res.user.id);
                navigate("/home");
            } else {
                navigate("/login");
                console.log("Error finding user", res.status);
            }
        });
    } catch (error) {
        navigate("/login");
        console.log("Error finding user", error);
    }

}

function logInAuth(authKey, navigate)  {
    const request =  new Request('http://localhost:3000/users/login/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({authKey: authKey}),
    });

    try {
        webReq.expect(request, (res, status) => {
            if (status === 200) {
                console.log("User found");
                localStorage.setItem("authKey", res.user.id);
                navigate("/home");
            } else {
                navigate("/login");
                console.log("Error finding user", res.status);
            }
        });
    } catch (error) {
        navigate("/login");
        console.log("Error finding user", error);
    }

}

function checkAuth(navigate) {
    const authKey = localStorage.getItem("authKey");
    if (authKey === null) {
        return false;
    } else {
        logInAuth(authKey, navigate);
        return true;
    }
}

export {logInUserPass, checkAuth, logInAuth , getPermissions, mustBeLoggedIn};
export default logInUserPass;


