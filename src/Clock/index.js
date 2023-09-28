import { StyledClock } from "./styled";
import useDate from "./useDate";

const timeData = (date) =>
   date.toLocaleString(undefined, {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "numeric",
      month: "long",
   });

const Clock = () => {
   const date = useDate();

   return (
      <StyledClock>
         Dzisaj jest {" "}
         {timeData(date)}
      </StyledClock>
   )
};

export default Clock