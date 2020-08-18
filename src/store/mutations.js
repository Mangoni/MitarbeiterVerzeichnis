export default {
    showSnackbar(state,task) {
        state.snackbar.show = "true"
        state.snackbar.message = "Der Mitarbeiter wurde " + task + "."
    },
    refreshResearchers (state, refreshedResearchers){
        state.researchersData = refreshedResearchers
    }
}