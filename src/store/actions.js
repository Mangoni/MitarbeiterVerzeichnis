import axios from "axios";

export default {
    async deleteResearcher({dispatch}, selectedResearcher) {
        await axios.delete('http://localhost:3000/deleteresearcher', {data: selectedResearcher})
        dispatch('getResearchers')
    },
    getResearchers({commit}) {
        axios.get('http://localhost:3000/researchers')
            .then(response => commit('refreshResearchers', response.data))
            .catch(error => console.log(error))
    },
    async addResearcher({dispatch},newResearcher){
        await axios.post('http://localhost:3000/addresearcher', newResearcher)
        dispatch('getResearchers')
        newResearcher.name=''
        newResearcher.boss=''
        newResearcher.department=''
    },
    async editResearcher({dispatch},editedResearcher){
        console.log("EditedResearcher Object:")
        console.log(editedResearcher)
        await axios.patch('http://localhost:3000/editresearcher', editedResearcher)
        console.log("Patch  ist erfolgt.")
        dispatch('getResearchers')
    }
}