import axios from "axios";
export const fetchData = axios.get( 
    "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480"
)
.then(
    res =>{
        console.log(res.data)
    }
)


