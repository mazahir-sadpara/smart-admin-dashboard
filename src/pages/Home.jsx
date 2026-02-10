import Header from "../components/Header"
import DashboardLayout from "../layouts/DashboardLayout"

const Home = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-full">
        <Header />
      </div>
    </DashboardLayout>
  )
}

export default Home
