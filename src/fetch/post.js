const post = async (paramsData, paramsLink) => {
    let link = "http://localhost:3000";
    if (paramsLink) {
        link += `/${paramsLink}`
    }
    try {
        let request = await fetch(link,{
            method:"POST",
            body:JSON.stringify(paramsData),
            headers: {'content-type': 'application/json'}
        })
        return await request.json();
    } catch (r) {
        throw new Error(r)
    }
}


export default post;