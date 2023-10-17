const User = ({user}) => {
    const {id,name,surname,status,species,gender,photo} = user;
    const divStyle = {
        // // height: '800vh',
        // weight: '10vw',
    };
    return (
        <div style={{width:'50vw'}}>
           <div>id {id}</div>
            <h3>{name} {surname} </h3>
            <h3>status: {status}</h3>
            <h3>species: {species}</h3>
            <h3>gender: {gender}</h3>
            <img src={photo} alt={photo}></img>
            <hr/>
        </div>
    );
};

export {User};