import { ref } from "vue";
import { apiResources } from "../api/api";
const locations = ref([])
const totalPages = ref(0)

export const useLocation = () => {


    const getAllLocations = async (page)=> {
        const { data } = await apiResources.get(`/location?page=${page}`);

        const {info, results} = data 


        locations.value = results
        totalPages.value = info.pages

    }


    
    

    return {
        getAllLocations,
        locations,
    }
 
};
