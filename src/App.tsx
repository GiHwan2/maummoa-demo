import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import DoctorList from "./screens/DoctorList";
import DoctorDetail from "./screens/DoctorDetail";
import BookingTime from "./screens/BookingTime";
import BookingForm from "./screens/BookingForm";
import BookingPay from "./screens/BookingPay";
import BookingDone from "./screens/BookingDone";
import Call from "./screens/Call";
import Review from "./screens/Review";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/booking/time" element={<BookingTime />} />
      <Route path="/booking/form" element={<BookingForm />} />
      <Route path="/booking/pay" element={<BookingPay />} />
      <Route path="/booking/done" element={<BookingDone />} />
      <Route path="/call" element={<Call />} />
      <Route path="/review" element={<Review />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
