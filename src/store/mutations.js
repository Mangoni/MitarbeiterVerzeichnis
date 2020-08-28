export default {
    showSnackbar(state,task) {
        state.snackbar.show = "true"
        state.snackbar.message = "Der Mitarbeiter wurde " + task + "."
    },
    refreshResearchers (state, refreshedResearchers){
        state.researchersData = refreshedResearchers
    },
    swapSelectedResearcher(state, newSelectedResearcher) {
        state.selectedResearcher = newSelectedResearcher
        console.log("SelectedResearcher_name: ")
        console.log(state.selectedResearcher.name)
    }
}