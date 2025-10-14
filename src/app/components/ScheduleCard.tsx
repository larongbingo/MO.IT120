type Schedule = {
    date: Date,
    event: string
}

interface ScheduleCardProps {
    schedule: Schedule[]
}

function ScheduleCard({ schedule = [] }: ScheduleCardProps) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })
    return (
        <section id="upcomingEvents" className="rounded-2xl border-2 border-gray-200 space-y-3 p-3 w-2xs">
            <h4 className="font-semibold text-lg">Upcoming Events</h4>

            <div className="space-y-3">
                {
                    schedule.map((event, index) => (
                        <div key={index}>
                            <p className="text-gray-500">{formatter.format(event.date)}</p>
                            <p>{event.event}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export type { Schedule }

export default ScheduleCard