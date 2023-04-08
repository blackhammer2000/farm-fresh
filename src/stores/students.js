import {defineStore} from "pinia";

export const useStudentStore = defineStore("STUDENTS", {
    state: () => {
        return [
            {id:1, name:"john"},
        {id:2, name:"paul"},
        {id:2, name:"james"},]
    }
});