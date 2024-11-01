import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const MatchingDateContainer = styled.div`
   .weekday-selector {
        display: flex;
        justify-content: space-around;
        margin: 20px auto;
        max-width: 400px;
    }

    .day-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-radius: 20px;
        width: 50px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .day-box.active {
        background-color: #0080ff;
        color: white;
    }

    .day-box.active span {
        color: white;
    }

    .day-box.inactive {
        background-color: white;
        color: black;
    }

    .date {
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }

    .day {
        font-size: 12px;
        color: #666;
    }

    .day-box.selected .date,
    .day-box.selected .day {
        color: white;
    }

`;
interface Day {
    date: number;
    day: string;
}

const MatchingDate: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<number | null>(null); // State to track the selected day

    const days: Day[] = [
        { date: 21, day: '월' },
        { date: 22, day: '화' },
        { date: 23, day: '수' },
        { date: 24, day: '목' },
        { date: 25, day: '금' },
        { date: 26, day: '토' },
    ];

    const handleDayClick = (index: number) => {
        setSelectedDay(index === selectedDay ? null : index); // Toggle selection
    };

    return (
        <MatchingDateContainer>
        <div className="weekday-selector">
            {days.map((day: Day, index: number) => (
                <div
                    key={index}
                    className={`day-box ${selectedDay === index ? 'active' : 'inactive'}`}
                    onClick={() => handleDayClick(index)}
                >
                    <span className="date">{day.date}</span>
                    <span className="day">{day.day}</span>
                </div>
            ))}
        </div>
        </MatchingDateContainer>
    );
};

export default MatchingDate