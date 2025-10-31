import type { Ticket } from "./Ticket";

export interface Job{
  ProjectNumber: string;
  ProjectName: string;
  // IsClockable: boolean;
  Tickets: Ticket[];
}


