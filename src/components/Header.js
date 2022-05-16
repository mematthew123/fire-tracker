import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {

    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Where's the Fires? </h1>
           <div className="header-search">
            <input type="text" placeholder="Search" />
        <input type="submit" value="Search" onClick={
            () => {
                alert('Searching...')
            }
         
        } />
        </div>
        </header>
    )
}


export default Header