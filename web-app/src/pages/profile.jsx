import { useNavigate } from "react-router-dom";


export default function Profile() {
    var backend = {
        "firstName": "Evan",
        "lastName": "Tao",
        "karmaPoints": 20, // this can either be digital currency or number of carts missing
        "cartsSaved": 10, // number of carts they saved from other people
        "cartsReturned": 50, // number of carts they returned properly
        "penaltyPoints": 5, // it should be in dollars
        "totalCartsSignedOut": 100,
        "evaluationText": "Looking good!",
    }

    const navigate = useNavigate();


    const navigateToHome = () => {
      // Navigate to /home and pass username and password as state
      navigate("/home");
    };

    return (
        <div className="">
        <div className="flex flex-col py-10 items-center min-h-screen space-y-4">
            <h1 className="text-center text-4xl font-bold text-[#d7dde4]">Cart Sheriff</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Profile</h2>
                    <p>Name: {backend.firstName + " " + backend.lastName}</p>
                    
                    <p>Karma: {backend.karmaPoints}</p>

                    <p>Penalty: {backend.penaltyPoints}</p>
                    
                </div>
                </div>

                <div className="stats shadow w-80">
                    <div className="stat">
                        <div className="stat-title">Carts Returned Vs. Carts Not Returned</div>
                        <div className="stat-value">{backend.karmaPoints} : {backend.penaltyPoints}</div>
                        <div className="stat-desc">{backend.evaluationText}</div>
                    </div>
                </div>

                <div className="stats shadow p-10 my-10 w-80 flex flex-col items-center">
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                </div>


                <button className="btn" onClick={navigateToHome}>Close</button>
    
            </div>
        </div>
    );
  }  