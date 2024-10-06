import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import QRScanner from "../components/QRScanner";
import { useState } from "react";
import axios from 'axios';

export default function Home() {
  const location = useLocation();
  const { username, password } = location.state || {}; // Destructure username and password from the state
  const [ qrData, setqrData ] = useState(null); // stores the cartId as an int

  // userId is 6 digits (123456)

  const handleScan = (data) => {
    if(data) {
      // data is info obtained from QR code
      data = JSON.parse(data);
      console.log("Scanned data: ", data.cartId);
      setqrData(data.cartId);
      // change the page


      // Make the api request and send cart id to backend along with userId to grab the userId
      axios.get(`http://localhost:5000/api/home`, {
        params: {
          cartId: data.cartId,
          userName: username
        }
      })
      .then(response => {
        console.log(response.data); // dont really do anything with response, its not really a get request tbh; maybe post cause we make a new contract
    })
      .catch(error => console.error('Error: ', error));
    }
  }

  const scanAgain = () => {
    setqrData(null);
  }

    return (
    <div className="bg-[#404756]">
        <Navbar/>
        <div class="flex flex-col items-center min-h-screen">

      

          <h2 className="py-10 text-xl text-[#d7dde4]">Welcome {username}</h2>

          {/* if no qr data, show qr scanner */}
          {/*qrData == null && <QRScanner onScan={handleScan}/>*/}
          {!qrData && <QRScanner onScan={handleScan} />}

          {/* {qrData != null && <p className="text-lg text-[#d7dde4] p-10 my-12 text-center">You have successfully borrowed shopping cart #{qrData}</p>}
          {qrData && <button className="btn btn-neutral" onClick={scanAgain}>Scan Again</button>} */}

          {qrData && <div className="card bg-base-100 w-80 shadow-xl mt-20">
            <div className="card-body">
              <h2 className="card-title">Have fun shopping!</h2>
              <p className="my-6">You have successfully borrowed shopping cart #{qrData}</p>
              <div className="card-actions justify-end">
              {<button className="btn btn-neutral" onClick={scanAgain}>Scan Again</button>}
              </div>
            </div>
        </div>}

        </div>
    </div>
    );
  }
    