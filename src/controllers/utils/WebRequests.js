export async function expect(request, after) {
    await fetch(request).then(data => {
        const status = data.status;
        data.json().then((res) => after(res, status));
    });
}

const WebRequest = {expect: expect};
export default WebRequest;