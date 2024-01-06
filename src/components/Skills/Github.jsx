
import GitHubCalendar from "react-github-calendar";

function Github() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
    return (
        <GitHubCalendar
            username="Coders6754"
            transformData={selectLastHalfYear}
           
            blockSize={19}
            blockMargin={5}
            fontSize={20}
            
            theme={{
                "light": [
                    "hsl(0, 0%, 92%)",
                    "red"
                ],
                "dark": [
                    "hsl(0, 0%, 10%)",
                    "#8667D9"
                ]
            }}
            style={{
                color: "#40E0D0",
                margin: "auto",
                padding: "15px",
                
            }}
        />
    );
}

export default Github;
