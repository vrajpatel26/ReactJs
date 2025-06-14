function Profile() {
    return (
        <div>
            <h1>Profile Card Challange</h1>

            <ProfileCard

                name="Vraj"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Vraj , How are you ?</strong>
                    </div>
                }

            >
                <p>Hobbies : Reading , Cricket</p>
                <button>Contact</button>
            </ProfileCard>


            <ProfileCard

                name="Viraj"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Viraj , How are you ?</strong>
                    </div>
                }

            >
                <p>Hobbies : Reading , Cricket</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;


function ProfileCard(props){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <div>{props.greeting}</div>
        <div>{props.children}</div>
        </>
    )
}