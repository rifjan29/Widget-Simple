const main = () => {
    getGlobalData();

}
const getGlobalData = () => {
    

    const URL = "https://covid19.mathdro.id/api";
    let section = document.getElementById('section_seluruh_dunia');
    
    fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
}
main();