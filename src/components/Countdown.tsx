"use client";

import { useEffect, useState } from "react";
import { daysUntilTargetDate } from "../utils/dateUtils";

const targetDate = new Date(2024, 11, 4); // December 4, 2024

const Countdown = () => {
  const [daysRemaining, setDaysRemaining] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const days = daysUntilTargetDate(currentDate, targetDate);
      setDaysRemaining(days);
      setIsLoading(false);

      if (days <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container block">
      {isLoading ? (
        <p>Our wedding day.</p>
      ) : (
        <h1 id="countdownDays">
          {daysRemaining !== null && daysRemaining > 0 ? (
            <>
              <span>{daysRemaining} days</span> until we get married. 💍 👰🏻‍♀️🤵🏻
            </>
          ) : (
            "We are married 🎉!!!"
          )}
        </h1>
      )}
    </div>
  );
};

export default Countdown;
