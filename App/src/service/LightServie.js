const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

const endpointAddress = "http://localhost:8080/light/";

export async function GetLights() {
    try {
        return await fetch(endpointAddress, {
            method: "GET",
            headers: headers,
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                return data;
            });
    } catch (err) {
        console.error(err);
    }
}

export async function ToggleLight(id) {
    try {
        await fetch(endpointAddress + "toggle", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                return data;
            });
    } catch (err) {
        console.error(err);
    }
}
