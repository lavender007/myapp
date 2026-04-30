const Thirdcomponent = () => {
    // Variable enables us to create dynamic websites. (It means the contents of the websites will be changing over time.)
    //Below we declare some variables . Note: variables are usually declared just before the return statement in Reactjs

    let name = "Sam Vido";
    let age = 52;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my Third component</h1>
            {/*Below we bind our variables . We use the variables names that we declared Before*/}

            <h5>My name is :{name}</h5>
            <h5>My age is:{age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}
export default Thirdcomponent;
   