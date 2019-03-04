function pratiGlas(brpoliticar) {
    axios.post("/vote", { 
        politicarId: brpoliticar,
        dodaj: true
     })
}