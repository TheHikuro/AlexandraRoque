import { Button } from "../../components/button"
import useAuth from "../../hooks/useAuth";


const Admin = () => {
    const { logout } = useAuth();
    return (
        <div>
            <h1>
                Admin
            </h1>
            <Button name="Logout" onClick={ logout } />
        </div>
    )
}

export default Admin