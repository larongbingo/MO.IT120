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

    const json: ConnectlyUser = await response.json()

    return json;
}

export type ConnectlyUser = {
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    displayName: string;
    title: string;
    major: string;
    year: string;
    school: string;
}