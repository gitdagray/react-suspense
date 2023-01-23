import useSWR from 'swr'
import {
    getUsers,
    usersUrlEndpoint as usersCacheKey
} from '../api/usersApi'

const Nav = ({ currentUserId, setCurrentUserId }) => {
    const {
        isLoading,
        error,
        data: employees,
    } = useSWR(usersCacheKey, getUsers)

    let options
    if (isLoading) {
        options = <option>Loading...</option>
    } else if (!error) {
        options = employees.map(user => {
            return (
                <option key={`opt${user.id}`} value={user.id}>
                    {user.name}
                </option>
            )
        })
        const titleValue = <option key="opt0" value="0">Employees</option>
        options.push(titleValue)
    }

    const onChangeUser = (e) => setCurrentUserId(e.target.value)

    let content
    if (error) {
        content = <p>{error.message}</p>
    } else {
        content = (
            <select
                name="selectMenu"
                id="selectMenu"
                className="selectMenu"
                value={currentUserId}
                aria-label="Employee Name"
                onChange={onChangeUser}
            >{options}</select>
        )
    }

    return content
}
export default Nav