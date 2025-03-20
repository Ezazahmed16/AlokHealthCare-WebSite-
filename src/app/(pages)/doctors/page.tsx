import Doctors from "@/components/Doctors/Doctors"
import DoctorsBanner from "@/components/Doctors/DoctorsBanner"

const page = () => {
  return (
    <div>
        <DoctorsBanner />
        <Doctors />
    </div>
  )
}

export default page