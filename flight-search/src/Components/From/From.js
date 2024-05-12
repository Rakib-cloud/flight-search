// import React, {useEffect, useState} from 'react';
// import txt_data from "../../LHR_CDG_ADT1_TYPE_1.txt";
// import FlightTable from "../FlightTable/FlightTable";
//
// const From = () => {
//     const [data,setData] = useState({'flightOffer':[],'message':''});
//     const [selectedOption, setSelectedOption] = useState("option1");
//     const [options,setAllOptions]=useState([])
//
//     const [selectedDeparture, setSelectedDeparture] = useState('');
//     const [selectedArrival, setSelectedArrival] = useState('');
//     const [filteredFlights, setFilteredFlights] = useState([]);
//
//     const [uniqueDepartures, setUniqueDepartures] = useState([]);
//     const [uniqueArrivals, setUniqueArrivals] = useState([]);
//
//
//     const handleChange = (event) => {
//         setSelectedOption(event.target.value);
//     };
//
//     useEffect(() => {
//         fetch(txt_data)
//             .then(f => f.text())
//             .then(txt => JSON.parse(txt))
//             .then(json => setAllOptions(json?.flightOffer))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);
//
//     useEffect(() => {
//         // Extract all unique departure iataCodes from all segments in flightData
//         const allDepartures = options?.reduce((acc, flight) => {
//             const departureIataCodes = flight.itineraries.flatMap(
//                 itinerary => itinerary?.segments?.map(segment => segment?.departure?.iataCode)
//             );
//             return acc.concat(departureIataCodes);
//         }, []);
//
//         // Filter out duplicate departure iataCodes
//         const uniqueDepartures = [...new Set(allDepartures)];
//
//         // Extract all unique departure iataCodes from all segments in flightData
//         const allArrivals = options?.reduce((acc, flight) => {
//             const arrivalIataCodes = flight.itineraries.flatMap(
//                 itinerary => itinerary?.segments?.map(segment => segment?.arrival?.iataCode)
//             );
//             return acc.concat(arrivalIataCodes);
//         }, []);
//
//         // Filter out duplicate arrival iataCodes
//         const uniqueArrivals = [...new Set(allArrivals)];
//
//         // Update state with unique departure and arrival iataCodes
//         setUniqueDepartures(uniqueDepartures);
//         setUniqueArrivals(uniqueArrivals);
//     }, [options]);
//
//     function handleSubmit(e){
//         e.preventDefault();
//         fetch(txt_data)
//             .then(f => f.text())
//             .then(txt => JSON.parse(txt))
//             .then(json => setData(json))
//     }
//
//
//
//
//
//
//
//
//     const handleDepartureChange = (e) => {
//         setSelectedDeparture(e.target.value);
//     };
//
//     const handleArrivalChange = (e) => {
//         setSelectedArrival(e.target.value);
//     };
//     //
//     const filterFlight = () => {
//         const filtered = options?.filter(flight => {
//             return flight?.itineraries?.some(itinerary => {
//                 return itinerary?.segments?.some(segment => {
//                     return segment?.departure?.iataCode === selectedDeparture && segment?.arrival?.iataCode === selectedArrival;
//                 });
//             });
//         });
//         setFilteredFlights(filtered);
//     };
//     console.log('filterd',filteredFlights)
//
//     return (
//         <div>
//             <form className="">
//                 <div className="container mx-auto mt-5">
//                     <div className="flex gap-2">
//                         <select
//                             className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow"
//                             value={selectedDeparture}
//                             onChange={handleDepartureChange}
//                         >
//                             <option value="">Select Departure</option>
//                             {uniqueDepartures?.map((departure, index) => (
//                                 <option key={index} value={departure}>
//                                     {departure}
//                                 </option>
//                             ))}
//                         </select>
//
//                         <select
//                             className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow"
//                             value={selectedArrival}
//                             onChange={handleArrivalChange}
//                         >
//                             <option value="">Select Arrival</option>
//                             {uniqueArrivals?.map((departure, index) => (
//                                 <option key={index} value={departure}>
//                                     {departure}
//                                 </option>
//                             ))}
//                         </select>
//
//                         <button
//                             className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             onClick={filterFlight}
//                         >
//                             Search Flights
//                         </button>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <hr className="border-blue-400"/>
//
//                     <div className="flex gap-2 justify-between mt-2">
//                         {/* LHR and CDG */}
//                         <div className="flex gap-2">
//                             <input
//                                 type="text"
//                                 placeholder="LHR"
//                                 className="border border-gray-400 py-2 pl-5 placeholder-gray-700 font-semibold"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="CDG"
//                                 className="border bg-cyan-200 border-gray-400 py-2 pl-5 placeholder-gray-700 font-semibold"
//                             />
//                             <input
//                                 type="date"
//                                 placeholder="Date"
//                                 className="border border-gray-400 py-2 pl-5 placeholder-gray-700 font-semibold"
//                             />
//                         </div>
//
//                         {/* Day */}
//                         <div className="flex w-3/4  justify-evenly gap-2 font-semibold">
//                             <select className="w-1/2 border">
//                                 <option>Day -</option>
//                             </select>
//                             <select className="w-1/2 border">
//                                 <option>Day +</option>
//                             </select>
//                             <select className="w-4/5 border">
//                                 <option>Anytime</option>
//                             </select>
//                         </div>
//
//                         {/* ADT */}
//                         <div className="flex gap-2 justify-between font-semibold">
//                             <p className="text-3xl">+</p>
//
//                             <div className="flex justify-between gap-2">
//                                 <select className="w-28 border">
//                                     <option>ADT</option>
//                                 </select>
//                                 <select className="w-28 border">
//                                     <option>1</option>
//                                 </select>
//                             </div>
//
//                             <p className="text-3xl">-</p>
//                         </div>
//                     </div>
//
//                     <hr className="border-blue-400 mt-2"/>
//
//                     <div className="flex mt-1 justify-between items-center">
//                         <div className="flex gap-2">
//                             <input type="checkbox"/>
//                             <div className="text-xl font-semibold">Extra Options</div>
//                         </div>
//
//                         <div className="flex gap-2 text-xl font-semibold items-center">
//                             <p className="mr-2">Environment</p>
//
//                             <input
//                                 type="radio"
//                                 id="option1"
//                                 name="options"
//                                 value="option1"
//                                 checked={selectedOption === "option1"}
//                                 onChange={handleChange}
//                                 // className="hidden"
//                             />
//                             <label
//                                 htmlFor="option1"
//                                 className="inline-block py-2  rounded-lg cursor-pointer "
//                             >
//                                 Option 1
//                             </label>
//
//                             <input
//                                 type="radio"
//                                 id="option2"
//                                 name="options"
//                                 value="option2"
//                                 checked={selectedOption === "option2"}
//                                 onChange={handleChange}
//                                 // className="hidden"
//                             />
//                             <label
//                                 htmlFor="option2"
//                                 className="inline-block py-2 rounded-lg cursor-pointer "
//                             >
//                                 Option 2
//                             </label>
//                         </div>
//
//                         <button className="p-2 bg-[#312E81] text-white rounded px-5 font-semibold text-xl">
//                             SEARCH
//                         </button>
//                     </div>
//
//                     <hr className="border-blue-400 mt-2"/>
//                 </div>
//             </form>
//
//             {
//                 data && <FlightTable data={data}/>
//             }
//         </div>
//     );
// };
//
// export default From;




import React, {useEffect, useState} from 'react';
import txt_data from "../../LHR_CDG_ADT1_TYPE_1.txt";
import FlightTable from "../FlightTable/FlightTable";

const From = () => {
    //State initialization
    const [data,setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState("option1");
    const [options,setAllOptions]=useState([])
    const [selectedDeparture, setSelectedDeparture] = useState('');
    const [selectedArrival, setSelectedArrival] = useState('');
    const [uniqueDepartures, setUniqueDepartures] = useState([]);
    const [uniqueArrivals, setUniqueArrivals] = useState([]);

   //Initial data get for Departure and Arrival data.
    useEffect(() => {
        fetch(txt_data)
            .then(f => f.text())
            .then(txt => JSON.parse(txt))
            .then(json => setAllOptions(json?.flightOffer))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Extract all unique departure iataCodes from all segments in flightData
    useEffect(() => {
        const allDepartures = options?.reduce((acc, flight) => {
            const departureIataCodes = flight.itineraries.flatMap(
                itinerary => itinerary?.segments?.map(segment => segment?.departure?.iataCode)
            );
            return acc.concat(departureIataCodes);
        }, []);

        // Filter out duplicate departure iataCodes
        const uniqueDepartures = [...new Set(allDepartures)];

        // Extract all unique departure iataCodes from all segments in flightData
        const allArrivals = options?.reduce((acc, flight) => {
            const arrivalIataCodes = flight.itineraries.flatMap(
                itinerary => itinerary?.segments?.map(segment => segment?.arrival?.iataCode)
            );
            return acc.concat(arrivalIataCodes);
        }, []);

        // Filter out duplicate arrival iataCodes
        const uniqueArrivals = [...new Set(allArrivals)];

        // Update state with unique departure and arrival iataCodes
        setUniqueDepartures(uniqueDepartures);
        setUniqueArrivals(uniqueArrivals);
    }, [options]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(selectedArrival && selectedDeparture){
            const filtered = options?.filter(flight => {
                return flight?.itineraries?.some(itinerary => {
                    return itinerary?.segments?.some(segment => {
                        return segment?.departure?.iataCode === selectedDeparture && segment?.arrival?.iataCode === selectedArrival;
                    });
                });
            });
            setData(filtered);
        }else{
            fetch(txt_data)
                .then(f => f.text())
                .then(txt => JSON.parse(txt))
                .then(json => setData(json?.flightOffer))
        }

    }
    //Dynamic Departure and Arrival Dropdown changes function
    const handleDepartureChange = (e) => {
        setSelectedDeparture(e.target.value);
    };
    const handleArrivalChange = (e) => {
        setSelectedArrival(e.target.value);
    };
    //Static Dropdown changes
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div>
            <form className="">

                <div className="container">
                    <hr className="border-blue-400"/>




                        <div className="flex gap-2 items-center justify-between mt-2">
                            <select
                                className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2  shadow"
                                value={selectedDeparture}
                                onChange={handleDepartureChange}
                            >
                                <option value="">Select Departure</option>
                                {uniqueDepartures?.map((departure, index) => (
                                    <option key={index} value={departure}>
                                        {departure}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow"
                                value={selectedArrival}
                                onChange={handleArrivalChange}
                            >
                                <option value="">Select Arrival</option>
                                {uniqueArrivals?.map((departure, index) => (
                                    <option key={index} value={departure}>
                                        {departure}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="date"
                                placeholder="Date"
                                className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow"
                            />


                            <select className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow">
                                <option>Day -</option>
                            </select>
                            <select className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow">
                                <option>Day +</option>
                            </select>
                            <select className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow">
                                <option>Anytime</option>
                            </select>


                            <p className="text-xl font-semibold">+</p>


                                <select className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow">
                                    <option>ADT</option>
                                </select>
                                <select className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 shadow">
                                    <option>1</option>
                                </select>


                            <p className="text-xl font-semibold">+</p>


                        </div>




                    <hr className="border-blue-400 mt-2"/>

                    <div className="flex mt-1 justify-between items-center">
                        <div className="flex gap-2">
                            <input type="checkbox"/>
                            <div className="text-xl font-semibold">Extra Options</div>
                        </div>

                        <div className="flex gap-2 text-xl font-semibold items-center">
                            <p className="mr-2">Environment</p>

                            <input
                                type="radio"
                                id="option1"
                                name="options"
                                value="option1"
                                checked={selectedOption === "option1"}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="option1"
                                className="inline-block py-2  rounded-lg cursor-pointer "
                            >
                                Option 1
                            </label>

                            <input
                                type="radio"
                                id="option2"
                                name="options"
                                value="option2"
                                checked={selectedOption === "option2"}
                                onChange={handleChange}
                                // className="hidden"
                            />
                            <label
                                htmlFor="option2"
                                className="inline-block py-2 rounded-lg cursor-pointer "
                            >
                                Option 2
                            </label>
                        </div>

                        <button className="p-2 bg-[#312E81] text-white rounded px-5 font-semibold text-xl" onClick={handleSubmit}>
                            SEARCH
                        </button>
                    </div>

                    <hr className="border-blue-400 mt-2"/>
                </div>
            </form>
            {
                data && <FlightTable data={data}/>
            }
        </div>
    );
};

export default From;