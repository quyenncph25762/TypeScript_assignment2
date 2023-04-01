import { Outlet } from 'react-router-dom'
const User = () => {
    return (
        <div>
            <header>

            </header>
            <Outlet />
            <footer>
                footer
            </footer>
        </div>
    )
}

export default User
