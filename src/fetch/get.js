const get = async (paramsLink) => {
    let link = "http://localhost:3000";
    if (paramsLink) {
        link += `/${paramsLink}`
    }
    try {
        let request = await fetch(link)
        return await request.json()
    } catch (r) {
        throw new Error(r)
    }
}


export default get;