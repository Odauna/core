import SidebarItem from "@/Components/SidebarItem";
import type { SidebarMenuItem } from "@/types/component";



interface SidebarProps {
    menuItems: SidebarMenuItem[];
    activeMenu?: string;
    className?: string;
}

// const menuItems: SidebarMenuItem[] = [
//     {
//         label: "Dashboard",
//         icon: "fa-home",
//         status: "active",
//         href: "/dashboard",
//     },
//     {
//         label: "Data Master",
//         icon: "fa-database",
//         status: "default",
//         href: "/admin/master-data",
//     },
//     {
//         label: "Enrolment Kelas",
//         icon: "fa-chalkboard-teacher",
//         status: "default",
//         href: "/admin/class-enrolment",
//     },
//     {
//         label: "Atur Waktu & Libur",
//         icon: "fa-calendar-alt",
//         status: "default",
//         href: "/admin/settings",
//     },
//     {
//         label: "Laporan Rekap",
//         icon: "fa-file-alt",
//         status: "default",
//         href: "/admin/monthly-recap",
//     },
//     {
//         label: "Riwayat",
//         icon: "fa-history",
//         status: "default",
//         href: "/admin/daily-recap",
//     },
//     {
//         label: "Live Presensi",
//         icon: "fa-video",
//         status: "default",
//         href: "/admin/monitoring",
//     },
//     {
//         label: "Pengajuan Izin",
//         icon: "fa-file-signature",
//         status: "default",
//         href: "/admin/leave-requests",
//         badge: 2,
//     },
//     {
//         label: "Pantauan Izin",
//         icon: "fa-eye",
//         status: "default",
//         href: "/admin/leave-requests",
//     },
//     {
//         label: "Verifikasi Izin",
//         icon: "fa-check-circle",
//         status: "default",
//         href: "/admin/leave-verification",
//     },
// ];

function applyActive(
    items: SidebarMenuItem[],
    activeLabel?: string,
): SidebarMenuItem[] {
    return items.map((item) => ({
        ...item,
        status: (
            activeLabel ? item.label === activeLabel : item.status === "active"
        )
            ? ("active" as const)
            : ("default" as const),
    }));
}

export default function Sidebar({ menuItems, activeMenu, className = "" }: SidebarProps) {
    const items = applyActive(menuItems, activeMenu);

    return (
        <aside
            className={`flex w-[260px] bg-primary flex-col py-6 shrink-0 z-10 ${className}`}
        >
            {/* Brand */}
            <div className="flex items-center gap-3 px-6 mb-10">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-[13px] shrink-0">
                    UII
                </div>
                <span className="text-white font-bold text-[14px] tracking-wide leading-tight">
                    SMA UII YOGYAKARTA
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 px-4 flex-1">
                {items.map((item) => (
                    <SidebarItem key={item.label} {...item} />
                ))}
            </nav>
        </aside>
    );
}
