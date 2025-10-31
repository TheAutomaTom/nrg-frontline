import type { WorkOrderDto } from "../nrg-dtos/WorkOrderDto";
// import type { Punch } from "../Dtos/Outbound/Punch";

export interface INrgClient {
  GetWorkOrders(user: string, pw: string, timezone: number): Promise<WorkOrderDto[]>;

  // PunchTheClock(punch: Punch[], pw: string): Promise<string>;
}
