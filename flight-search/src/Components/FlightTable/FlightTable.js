import './FlightTable.css';


const FlightTable = ({data}) => {

    return (
        <div className="container ">
            {
                data?.length>0  && <h3 className="font-semibold text-sm mt-2 pb-2">Data Parsed Successfully</h3>
            }
            <table cellSpacing="0">
                <tr className="headers">
                    <th style={{"width": "10%"}}>FLIGHT</th>
                    <th style={{"width": "10%"}}>AIRCRAFT</th>
                    <th style={{"width": "5%"}}>CLASS</th>
                    <th style={{"width": "10%"}}>FARE</th>
                    <th style={{"width": "15%"}}>ROUTE</th>
                    <th style={{"width": "15%"}}>DEPARTURE</th>
                    <th style={{"width": "15%"}}>ARRIVAL</th>
                    <th>-</th>
                    <th style={{"width": "9%"}}>DURATION</th>
                    <th style={{"width": "10%"}}>PRICE</th>
                </tr>
                {data?.map((outerValue, index) => {
                    let fareBasis = outerValue['fareBasis'][0]
                    let classes = outerValue['class'][0]
                    let price = outerValue['price']
                    let duration = outerValue['itineraries'][0]['duration']
                    let rowClass = 'even'
                    if (index % 2 === 1) {
                        rowClass = 'odd'
                    }
                    return <tr className={rowClass} key={index}>
                        <td colspan="10">
                            <table className="innerTable">
                                {outerValue['itineraries'][0]['segments'].map((innerValue, innerIndex) => {
                                    return <tr key={innerIndex}>
                                        <td style={{"width": "10%"}}>{`${innerValue['carrierCode']} ${innerValue['aircraft']}`}</td>
                                        <td style={{"width": "10%"}}>{`${innerValue['flightNumber']}`}</td>
                                        <td style={{"width": "5%"}}>{`${classes[innerIndex]}`}</td>
                                        <td style={{"width": "10%"}}>{`${fareBasis[innerIndex]}`}</td>
                                        <td style={{"width": "15%"}}>{`${innerValue['departure']['iataCode']} - ${innerValue['arrival']['iataCode']}`}</td>
                                        <td style={{"width": "15%"}}>{`${innerValue['departure']['at']}`}</td>
                                        <td style={{"width": "15%"}}>{`${innerValue['departure']['at']}`}</td>
                                        <td>-</td>
                                        {innerIndex === 0 ? <td style={{"width": "9%"}}>{duration}</td> :
                                            <td style={{"width": "9%"}}></td>}
                                        {innerIndex === 0 ? <td style={{"width": "10%"}}>{price}</td> : innerIndex === 1 ?
                                            <td style={{"width": "10%"}}>
                                                <button className='select'>Select</button>
                                            </td> : <td></td>}
                                    </tr>
                                })}
                            </table>
                        </td>
                    </tr>
                })}
            </table>
        </div>
    );
};

export default FlightTable;