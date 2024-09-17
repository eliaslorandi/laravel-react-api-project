import axios from "axios";

const axiosClient = axios.create({
    //interceptors, será executando antes da solicitacao se atribuida ou depois da resposta for recebida
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

//interceptor da requisição
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

//interceptor da resposta
axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (response.status === 401) { //401 é expirado ou invalido
        localStorage.removeItem('ACCESS_TOKEN') //token removido e força usuario se autenticar novamente
    }

    throw error;
})

export default axiosClient;