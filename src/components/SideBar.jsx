

function SideBar({score}){
    
        return (
            <div className="side-bar">
                <h1>Pokémon Memory Match</h1>
                <p>Get ready for a fun challenge! Click on Pokémon images to earn points,
                     but remember: you can’t click any image more than once. Keep track
                      and score as many points as you can!</p>
                <h3>Best Score: {score}</h3>
            
            
            </div>
    
        )


}

export default SideBar;