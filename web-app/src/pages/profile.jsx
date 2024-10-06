import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Profile(props) {
    var backend = {
        "name": "Evan Tao",
        "karmaPoints": 20, // this can either be digital currency or number of carts missing
        "cartsSaved": 10, // number of carts they saved from other people
        "cartsReturned": 50, // number of carts they returned properly
        "penaltyPoints": 5, // it should be in dollars
        "totalCartsSignedOut": 100,
        // "evaluationText": "Looking good!",
    }

    const [name, setName ] = useState("");
    const [karmaPoints, setKarmaPoints ] = useState(0);
    const [penaltyPoints, setPenaltyPoints ] = useState(0);
    const [cartsSaved, setCartsSaved ] = useState(0);
    const [cartsReturned, setCartsReturned ] = useState(0);
    const [cartsNotReturned, setCartsNotReturned ] = useState(0);
    const [totalCartsSignedOut, setTotalCartsSignedOut ] = useState(0);

    // const [username, setUsername] = useState("");

    const fetchUserData = (username) => {
        axios.get(`http://localhost:5000/api/profile`, {
          params: {
            userName: username
          }
        })
        .then(response => {
          console.log('User data:', response.data);
          // handle the response data here
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
      };
    
      // Using useEffect to run fetchUserData when the component mounts
      useEffect(() => {
        fetchUserData(props.username);
      }, []);


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
                    <p>Name: {name}</p>
                    
                    <p>Karma: {karmaPoints}</p>

                    <p>Penalty: {penaltyPoints}</p>
                    
                </div>
                </div>

                <div className="stats shadow w-80">
                    <div className="stat">
                        <div className="stat-title">Carts Returned Vs. Carts Not Returned</div>
                        <div className="stat-value">{cartsReturned} : {cartsNotReturned}</div>
                        {/* <div className="stat-desc">{backend.evaluationText}</div> */}
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