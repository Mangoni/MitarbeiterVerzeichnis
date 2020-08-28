export default{
    getSelectedResearcher (state) {
        return  JSON.parse (JSON.stringify(state.selectedResearcher))
    }
}