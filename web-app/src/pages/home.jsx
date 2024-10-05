import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import QRScanner from "../components/QRScanner";
import { useState } from "react";

export default function Home() {
  const location = useLocation();
  const { username, password } = location.state || {}; // Destructure username and password from the state
  const [ qrData, setqrData ] = useState(null);

  const handleScan = (data) => {
    console.log("Scanned data: ", data);
    // setqrData(data);
  }

    return (
    <div className="artboard phone-4 bg-[#404756]">
        <Navbar/>
        <div class="flex flex-col items-center min-h-screen">

      

          <h2 className="py-10 text-xl">Welcome {username}</h2>

          <QRScanner onScan={handleScan}/>

          <p className="text-2xl p-10">What is good my ig</p>
          {qrData != null && <p>{qrData.cartId}</p>}
          {qrData != null && qrData.cartId && <p>{qrData.cartId}</p>}

          

        </div>
    </div>
    );
  }
    