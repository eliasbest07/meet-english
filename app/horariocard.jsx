import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="rounded-lg shadow-lg overflow-hidden">
      <CardHeader className="bg-gray-100 dark:bg-gray-800 py-4">
        <CardTitle className="text-center text-lg font-bold">Los 5 dias de la semana</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <ClockIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <div className="space-y-1">
              <p className="text-sm font-medium">9:00 AM</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Primera Clase via Google Meet</p>
            </div>
          </div>
          <CalendarIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <ClockIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <div className="space-y-1">
              <p className="text-sm font-medium">6:00 PM</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Segunda Clase via Google Meet</p>
            </div>
          </div>
          <CalendarIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
