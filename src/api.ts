const BASE_URL = "https://connectly-moit149-backend-ojexm.ondigitalocean.app"

export async function getConnectlyProfile(jwt: string) {
    const response = await fetch(
        `${BASE_URL}/api/users`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            }
        }
    )

    if (!response.ok) {
        return null;
    }

    const json: ConnectlyUser = await response.json()

    return json;
}

export async function createConnectlyProfile(jwt: string, profile: NewUserDto) {  
    const response = await fetch(
        `${BASE_URL}/api/users`,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        } 
    )

    if (!response.ok) {
        return null;
    }
    
    const json: ConnectlyUser = await response.json()
    
    return json;
}

export type ConnectlyUser = {
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
} & NewUserDto

export type NewUserDto = {
    displayName: string;
    title: string;
    major: string;
    year: string;
    school: string;
}
