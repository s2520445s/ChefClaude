import chefIcon from "../assets/chef-claude-icon.png"
export default function Header()
{
    return(
        
        <header className="header">
            <img src={chefIcon} alt="chefIcon" className="chefIcon"/>
            <h2>Chef Claude</h2>
        </header>
        
    )
}