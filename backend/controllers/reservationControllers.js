import reservationModel from "../models/reservationModel.js";

//Here it shows how to Create a new reservation
const createReservation = async (req, res) => {
       try {
        const { name, email, phone, date, time, guests } = req.body;

       
        if (!name || !email || !phone || !date || !time || !guests) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
 // Create a new reservation document and save it to the database
        const newReservation = new reservationModel({ name, email, phone, date, time, guests });
        await newReservation.save();

        // Return success response with the saved reservation
        return res.status(201).json({
            success: true,
            message: "Reservation created successfully!",
            reservation: newReservation
        });

    } catch (error) {
         // Return server error response if something goes wrong
        console.log("Error creating reservation:", error.message);
        res.status(500).json({ success: false, message: "Error creating Reservation" });
    }
};
// Get all reservations, sorted by date descending
const getAllReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.find().sort({ date: -1 });
        res.json({ success: true, reservations });
    } catch (error) {
        res.status(500).json({message: "Error fetching reservations"})
    }
}

// Delete a reservation by the ID of the User 
const deleteReservation = async (req, res) => {
    try {
        const {id} = req.params;
        await reservationModel.findByIdAndDelete(id)
        res.json({message: "Reservation Removed"})
    } catch (error) {
        res.json({error: "Error Deleting Reservation"})
    }
}

export {createReservation, getAllReservations, deleteReservation}