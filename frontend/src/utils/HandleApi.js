import axios from "axios";

const baseURL = "http://localhost:5000/";

const getAllToDO = (setToDO) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log('data ----> ',data);
        setToDO(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

const addToDo = (text, setText, setToDo ) => {
}

export {getAllToDO,addToDo}