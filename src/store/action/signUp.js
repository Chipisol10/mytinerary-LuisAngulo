import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";


const setUserUp = createAction("setUserUP");


const signUpRegister = createAsyncThunk("signup", async ({ name, lastname, email, password, url, country }) => {
    console.log("Iniciando el proceso de registro...");

    const credentials = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        url: url,
        country: country
    };

    try {
        const response = await axios.post("http://localhost:8080/api/users/register", credentials);
        console.log("Respuesta del servidor:", response.data);
        console.log("Usuario registrado exitosamente");

        localStorage.setItem("token", response.data.token);

        return response.data;
    } catch (error) {
        console.error("Error en el registro:", error);
        throw error;
    }
});

export { signUpRegister, setUserUp };
