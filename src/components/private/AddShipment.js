import React from 'react';

export default () => (
    <div>
        <h2>Add Shipment</h2>
        <div>
            <form>
                <div>
                    <h2>SHIPPER DETAILS</h2>
                    <div>
                        <label>Shipper Name</label>
                        <input/>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input />
                    </div>
                    <div>
                        <label>Address</label>
                        <input />
                    </div>
                    <div>
                        <label>Email</label>
                        <input />
                    </div>
                </div>

                <div>
                    <h2>RECEIVER DETAILS</h2>
                    <div>
                        <label>Receiver Name</label>
                        <input/>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input />
                    </div>
                    <div>
                        <label>Address</label>
                        <input />
                    </div>
                    <div>
                        <label>Email</label>
                        <input />
                    </div>
                </div>

                <div>
                    <h2>SHIPMENT DETAILS</h2>
                    <div>
                        <div>
                            <label>Type of Shipment</label>
                            <select>
                                <option>Air Freight</option>
                                <option>Road Freight</option>
                                <option>Sea Freight</option>
                                <option>Intermodal Freight</option>
                            </select>
                        </div>
                        <div>
                            <label>Weight</label>
                            <input />
                        </div>
                        <div>
                            <label>Packages</label>
                            <input />
                        </div>
                        <div>
                            <label>Product</label>
                            <input />
                        </div>
                        <div>
                            <label>Payment Mode</label>
                            <select>
                                <option>Cash</option>
                                <option>Credit Card</option>
                                <option>Debit Card</option>
                                <option>Bank Transfer</option>
                                <option>Check</option>
                                <option>Crypto</option>
                            </select>
                        </div>
                        <div>
                            <label>Carrier</label>
                            <select>
                                <option>DHL</option>
                                <option>FedEx</option>
                                <option>UPS</option>
                                <option>DB Schenker</option>
                                <option>Maersk</option>
                            </select>
                        </div>
                        <div>
                            <label>Departure Time</label>
                            <input />
                        </div>
                        <div>
                            <label>Destination</label>
                            <input />
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
)