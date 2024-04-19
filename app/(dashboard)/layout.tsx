import { OrgSidebar } from "./_components/org-sidebar"
import { Sidebar } from "./_components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({
  children
}: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <OrgSidebar />
        <div className="flex gap-x-3 h-full">
          {/* Add Navbar */}
          {children}
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout