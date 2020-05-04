import {
    axios
} from "axios";


export const UploadFile = async (file) => {
    const data = new FormData();
    data.file = file
    const picture = await axios.post("/api/upload/new", data)
    const send = await axios.post("/api/listing/new")
}