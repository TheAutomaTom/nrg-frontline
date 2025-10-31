import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserConfigState } from "./user-confg-state";

import type { Coordinates } from "../core/models/Coordinates";
import type { Job } from "../core/models/Job";
import type { LaborItemDto } from "../core/models/nrg-dtos/LaborItemDto";
import type { Ticket } from "../core/models/Ticket";
import type { WorkOrderDto } from "../core/models/nrg-dtos/WorkOrderDto";
import { NrgClient } from "../core/clients/NrgClient";

export const useAppState = defineStore("AppState", () => {
  const config$ = useUserConfigState();
  const Nrg = new NrgClient();

  const StatusMessage = ref("Time Clock Ready" as string);
  const IsLoading = ref(false);

  const JobList = ref([] as Job[]);
  const LaborList = ref([] as LaborItemDto[]);

  //============================================================//

  const getCurrentCoordinates = async (): Promise<Coordinates> => {
    if (!navigator.geolocation) {
      StatusMessage.value = "Location not available.";
      return {} as Coordinates;
    }

    try {
      const position: GeolocationPosition = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (err) {
      StatusMessage.value = `Location error: ${err.message || err}`;
      return {} as Coordinates;
    }
  };

  //============================================================//

  const groupByProjectNumber = (workOrders: WorkOrderDto[]): Job[] => {
    const jobMap = new Map<string, Ticket[]>();

    // Group WorkOrders by ProjectNumber
    for (const wo of workOrders) {
      const ticket: Ticket = {
        ProjectNumber: wo.ProjectNumber,
        ProjectName: wo.ProjectName,
        Id: wo.Id,
        Number: wo.Number,
        Name: wo.Name,
        Type: wo.Type,
        // Status: wo.Status,
        // Step: wo.Step,
        // StepType: wo.StepType,
        // Owner: wo.Owner,
        // Assignees: wo.Assignees,
        // ProjectManager: wo.ProjectManager,
        // Instructions: wo.Instructions,
        MasterNote: wo.MasterNote,

        // Woops, bad idea to add these on Ticket (should be a work order Dto in the picker list)
        IsPunchedAs: false,
        AsLineItemNumber: "",
        LaborItemId: "",
        LaborItemName: "",
      };

      if (!jobMap.has(wo.ProjectNumber)) {
        jobMap.set(wo.ProjectNumber, []);
      }
      jobMap.get(wo.ProjectNumber)!.push(ticket);
    }

    // Convert grouped entries into Job[]
    const jobs: Job[] = Array.from(jobMap.values()).map((tickets) => ({
      Tickets: tickets,
      ProjectNumber: tickets[0]!.ProjectNumber,
      ProjectName: tickets[0]!.ProjectName,
    }));

    return jobs;
  };

  //============================================================//

  return {
    IsLoading,
    LaborList,
    JobList,
  };
});
