import { useEffect, useState } from "react"

export default function Users() {
    const [users, serUsers] = useState([]);
    const [loading, setLoading] = useState(false); //carregar usuarios

    useEffect(() => {
        getUsers();
    }, [])  //array vazio como segundo argumento

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
            .then(({ data }) => {
                setLoading(false)
                console.log(data);
            })
            .catch(() => {
                setLoading(false)
            })
    }


    return (
        <div>
            Users
        </div>
    )
}